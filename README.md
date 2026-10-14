# naturalwineimporters.com

Interim one-page "coming soon" site, served by a Cloudflare Worker with static assets.

- `public/`: the site (everything in here is deployed)
- `src/index.js`: Worker; redirects `www.` to the bare domain, then serves `public/`
- `mockups/`: design options from October 2026 (B was chosen); not deployed
- `NWI Logo_JPG.jpg`: original logo (296×296); `public/logo.png` is a transparent version

Local preview: `npx wrangler dev`
Deploy: `npx wrangler deploy` (or push to `main` if Workers Builds is connected)

Fonts: Fraunces and Inter, self-hosted under the SIL Open Font License (see `public/fonts/`).
