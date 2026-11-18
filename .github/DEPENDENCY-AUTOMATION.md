# Dependency security automation

GitHub Dependabot is the repository's dependency-remediation bot.

- Keep Dependabot alerts and security updates enabled in repository settings.
- Dependabot opens grouped npm security-update pull requests as alerts arrive.
  The weekly schedule is for version updates; setting the npm open-PR limit to
  zero disables routine version updates, not security updates.
- GitHub Actions updates are checked weekly.
- Every pull request runs a clean install and the production Astro build using
  the Node version in `.nvmrc`. The job has read-only repository access and does
  not need deployment secrets.
- Patch/minor npm-only Dependabot updates queue for squash auto-merge.
  Major updates, unknown update types, and changes outside the two npm manifests
  stay open for human review. Dependabot metadata reports the highest semver
  change in a group, so a group containing a major upgrade requires review.
- Branch protection must require `Build website`, `Browser validation`, and
  `Vercel`, with the branch up to date before merging. Auto-merge must be enabled
  in repository settings. Failed checks block merging.
- Browser validation exercises all six pages on desktop and mobile Chromium:
  page content, images, local asset responses, styles, horizontal overflow, and
  navigation. Dependabot PRs additionally compare full-page screenshots against
  their base commit on the same runner (0.1% pixel tolerance). Reference
  screenshots come from the base site, not the candidate. External Google fonts
  are blocked for deterministic fallback-font comparisons. Reports/traces are
  retained for 14 days on GitHub Actions.
- Merges deploy through the existing Vercel Git integration.
- If Dependabot cannot resolve an alert, inspect its update error in GitHub's
  security tab. A parent dependency upgrade or a source-code migration may be
  required. Never dismiss an alert just to clear the queue.

## Activation and verification

This configuration must be merged into `master` to take effect.

Check the bot's status:

```sh
gh api repos/ryanjwessel/ryanjwessel.com/automated-security-fixes
gh api 'repos/ryanjwessel/ryanjwessel.com/dependabot/alerts?state=open'
gh pr list --repo ryanjwessel/ryanjwessel.com --author 'app/dependabot'
```

GitHub can pause security updates on inactive repositories. Repository activity
resumes them; verify that the status reports `enabled: true, paused: false`.
Confirm a new Dependabot PR receives the `Build website` check. A successful build
does not guarantee that every vulnerability is fixed; verify the affected alerts
close after the fix is merged and GitHub rescans the dependency graph.

The existing old minimist/json5 PRs predate the current Astro dependency tree;
check their relevance before merging.

## Availability monitoring

`Website availability` runs approximately every 15 minutes and can be dispatched
manually. It checks the homepage, About, Work, and Writing for HTTP 200 and
expected HTML content. Three consecutive failures open one incident issue,
assigned to and mentioning `@ryanjwessel`; ongoing failures reuse that incident.
Recovery posts a notification and closes it. GitHub notification delivery follows
the account's email/app settings. No Slack integration is configured.

GitHub schedules can be delayed and public-repository schedules can be disabled
after prolonged inactivity; this is periodic monitoring, not a guaranteed
real-time paging service. A broken monitor itself appears as a failed Actions run.

Run locally:

```sh
npm ci
npx playwright install chromium
npm run build
npm run test:e2e
node --test scripts/availability.test.mjs
```
