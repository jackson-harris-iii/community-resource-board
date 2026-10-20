# Run this for your community

This is a Sites-ready template with a portable React/Workers/D1 application core, not a one-click Vercel deployment. The included Sacramento guide and research are examples to replace or retain deliberately.

## Local preview

1. Clone this repository. Use Node 22.13 or newer.
2. Run `npm run install:ci` (or the installed Sites dependency helper). Do not copy `node_modules`, `.wrangler` or `.sites-runtime` from a production project.
3. Run `npm run build` to generate `dist/server/wrangler.json`. Initialize the local database by running the following for each SQL migration file in filename order: `node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_magenta_power_pack.sql`, then the same command with `--file drizzle/0001_serious_crystal.sql`. These commands target local state only.
4. For local admin testing only, create ignored `.dev.vars` with `ADMIN_EMAIL=seedy@sites.test` and `TRUST_SITES_IDENTITY=true`. The development preview strips incoming identity headers and uses a local mock account. Do not publish its cookie-based mock login.
5. Start `npm run dev -- --port 18766 --hostname 127.0.0.1`, open `/participate`, then `/admin` and use the preview login.

## Publish with Sites

Ask Codex with the Sites plugin to “Create a new site from this sanitized template.” Use the helper's `--template-source` option against this checkout. It must create a **new** Site ID and database. Do not reuse Jackson's production Site or data.

Set `ADMIN_EMAIL` to your own trusted Sites login email and `TRUST_SITES_IDENTITY=true` in the new Site's server environment. The latter is an explicit opt-in to the Sites identity boundary; without it this template denies admin access. Set `RESEND_API_KEY` and `NOTIFICATION_FROM` only if you want email and have a verified sender. Do not put secrets in source files. Publish through the Sites build/source/save/deploy workflow; review the new site's audience before sharing.

Before publishing, replace `https://your-community.example` throughout `app/` and `public/` with the new public origin. Edit `app/community.config.ts`, `app/SiteHeader.tsx`, `app/CommunityPage.tsx`, `app/SharePanel.tsx`, `app/layout.tsx` and `app/admin/page.tsx` for your community name, operator, event and share copy. The serialized legacy guide in `app/guide-document.ts` and its `public/guide-assets/` content retain the Sacramento example; replace or remove it intentionally. Stable idea IDs are in `app/ideas.json`; the research directory and briefs are separate JSON files. The prototype still contains Sacramento example copy outside the config file; this is a scaffold, not a completely white-label CMS.

Replace the QR placeholder with a code pointing to your published guide, and confirm all QR links after changing the origin. Analytics is disabled. Add your own project and privacy text if needed. Run lint, typecheck and a build, then check submissions, admin, sharing and mobile layout before collecting real input.

## Other hosts

Direct Cloudflare Workers hosting requires your own D1 binding, migrations, secrets and a verified authentication adapter. Vercel additionally requires replacing the Workers/D1 integration. **Do not enable `TRUST_SITES_IDENTITY` on either host.** Untrusted clients can forge raw identity headers without the Sites dispatcher. Keep admin denied until verified auth (for example a correctly validated Access/OIDC session) is implemented and tested. No standalone deployment to those hosts is claimed tested here.

## Browser tests

Install Playwright as development tooling (`npm install --no-save playwright`, then `npx playwright install chromium`) or supply it from your environment. The `verify*.mjs` scripts import Playwright normally. Use local ports 18766 (development/auth) and 18767 (built runtime). Update community-specific assertions deliberately when changing the sample content. `verify-sharing.mjs` retains Sacramento example expectations and must be adapted after rebranding.
