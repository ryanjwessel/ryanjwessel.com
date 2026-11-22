# Deployment workflow

## Personal site palette

- Deep teal (#0E4B4A), parchment (#F7F2E6), and dusty blue (#315E73) are approved section backgrounds.
- Start pages with deep teal or parchment. Reserve dusty blue for sections below the introduction.
- Keep the headshot rectangular and unframed, without an arch or decorative backdrop circle.

## Deployment

- Production deployments must come from committed and pushed code through the Git deployment workflow.
- Never deploy production directly from a local checkout or staging directory, including `vercel --prod`, or promote a local preview as a shortcut.
- Local CLI deployments are permitted only for explicitly selected development/preview environments.
- Verify production corresponds to the pushed commit. If the Git integration is missing or fails, fix or report the blocker rather than deploying production locally.
