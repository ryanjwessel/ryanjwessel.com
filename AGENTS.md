# Deployment workflow

- Production deployments must come from committed and pushed code through the Git deployment workflow.
- Never deploy production directly from a local checkout or staging directory, including `vercel --prod`, or promote a local preview as a shortcut.
- Local CLI deployments are permitted only for explicitly selected development/preview environments.
- Verify production corresponds to the pushed commit. If the Git integration is missing or fails, fix or report the blocker rather than deploying production locally.
