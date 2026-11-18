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
- Review and merge passing fixes. Merges deploy through the existing Vercel Git
  integration. Auto-merge is not enabled by this configuration.
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
