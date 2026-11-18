export async function probe(fetcher = fetch) {
  for (const path of ['/', '/about', '/work', '/writing']) {
    const response = await fetcher(`https://ryanjwessel.com${path}`, {
      signal: AbortSignal.timeout(15000),
      headers: { 'User-Agent': 'ryanjwessel-site-monitor' },
    });
    if (response.status !== 200) throw new Error(`${path}: HTTP ${response.status}`);
    const html = await response.text();
    if (!html.includes('Ryan Wessel') || !html.includes('<main') || !html.includes('<h1')) {
      throw new Error(`${path}: expected page content missing`);
    }
  }
}

export async function monitor({ github, context, core, check = probe, wait = ms => new Promise(resolve => setTimeout(resolve, ms)) }) {
  let failure;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await check();
      failure = undefined;
      break;
    } catch (error) {
      failure = error.message;
      if (attempt < 2) await wait(10000);
    }
  }
  const title = '[Availability] ryanjwessel.com is unavailable';
  const issues = await github.paginate(github.rest.issues.listForRepo, {
    ...context.repo, state: 'open', creator: 'github-actions[bot]', per_page: 100,
  });
  const incident = issues.find(issue => !issue.pull_request && issue.title === title);
  const run = `https://github.com/${context.repo.owner}/${context.repo.repo}/actions/runs/${context.runId}`;
  if (failure) {
    if (!incident) {
      await github.rest.issues.create({
        ...context.repo, title,
        body: `@ryanjwessel The website failed three availability checks.\n\nFailure: ${failure}\n\n[Monitor run](${run})\n\nThis issue will close automatically when service recovers.`,
        assignees: ['ryanjwessel'],
      });
    }
    core.setFailed(`Website availability failed: ${failure}`);
  } else if (incident) {
    await github.rest.issues.createComment({
      ...context.repo, issue_number: incident.number,
      body: `@ryanjwessel The website is responding normally again on all monitored routes. [Recovery check](${run}).`,
    });
    await github.rest.issues.update({
      ...context.repo, issue_number: incident.number, state: 'closed', state_reason: 'completed',
    });
  } else {
    core.info('All monitored pages are available.');
  }
}
