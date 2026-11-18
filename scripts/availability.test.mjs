import { test } from 'node:test';
import assert from 'node:assert/strict';
import { monitor, probe } from './availability.mjs';

function fixture(issues = []) {
  const calls = [];
  const context = { repo: { owner: 'test', repo: 'site' }, runId: 123 };
  const github = {
    paginate: async () => issues,
    rest: { issues: Object.fromEntries(['listForRepo', 'create', 'createComment', 'update'].map(method =>
      [method, async data => calls.push({ method, data })]
    )) },
  };
  const core = { info() {}, setFailed: message => calls.push({ method: 'failed', message }) };
  return { github, context, core, calls, wait: async () => {} };
}

test('outage creates one assigned incident after three failures', async () => {
  const f = fixture();
  let attempts = 0;
  await monitor({ ...f, check: async () => { attempts++; throw new Error('HTTP 503'); } });
  assert.equal(attempts, 3);
  assert.deepEqual(f.calls.map(c => c.method), ['create', 'failed']);
  assert.deepEqual(f.calls[0].data.assignees, ['ryanjwessel']);
});

const incident = { number: 1, title: '[Availability] ryanjwessel.com is unavailable' };
test('ongoing outage does not create duplicate incidents', async () => {
  const f = fixture([incident]);
  await monitor({ ...f, check: async () => { throw new Error('offline'); } });
  assert.deepEqual(f.calls.map(c => c.method), ['failed']);
});

test('recovery notifies and closes the incident', async () => {
  const f = fixture([incident]);
  await monitor({ ...f, check: async () => {} });
  assert.deepEqual(f.calls.map(c => c.method), ['createComment', 'update']);
  assert.equal(f.calls[1].data.state, 'closed');
});

test('transient failures recover without an incident', async () => {
  const f = fixture();
  let attempts = 0;
  await monitor({ ...f, check: async () => { if (++attempts < 3) throw new Error('temporary'); } });
  assert.equal(attempts, 3);
  assert.equal(f.calls.length, 0);
});

test('HTTP errors and wrong content both fail the probe', async () => {
  await assert.rejects(probe(async () => ({ status: 503 })), /HTTP 503/);
  await assert.rejects(probe(async () => ({ status: 200, text: async () => '<h1>Wrong site</h1>' })), /content missing/);
  let requests = 0;
  await probe(async () => {
    requests++;
    return { status: 200, text: async () => '<main><h1>Ryan Wessel</h1></main>' };
  });
  assert.equal(requests, 4);
});
