# Validation — October 20, 2026

All data mutations used isolated local D1, never the production board.

| Command | Result |
|---|---|
| `npm run db:generate` | Passed; additive `0001_serious_crystal.sql` generated and inspected |
| `node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0001_serious_crystal.sql` | Passed; six schema/index statements applied locally |
| `npm run lint` | Passed |
| `npx tsc --noEmit` | Passed |
| `node <sites-plugin-root>/scripts/build-site.mjs` | Passed |
| `node verify-participation.mjs` | Passed: wizard, all offer kinds, private contacts, validation, CSRF, idempotency, rate limit, moderation, resource matching, outbox persistence, mobile |
| `node verify-admin.mjs` | Passed: owner login, spoof rejection, public approval/removal, voting, sorting, sign-out |
| `node verify-navigation.mjs` | Passed: nine routes, seven original slides, five room screens, QR targets, schedules, legacy links, mobile |
| `node verify-analytics.mjs` | Passed: UTM sanitization, anonymous identity, admin exclusion, DNT/GPC |
| `node verify-notifications.mjs` | Passed: mock provider only; missing configuration, idempotency, private payload, acceptance, retry and attempt limits |
| `TEST_ORIGIN=http://127.0.0.1:18767 node verify.mjs` | Passed: built-runtime voting, submissions, privacy, validation, rate limits and mobile |
| `TEST_ORIGIN=http://127.0.0.1:18767 node verify-sharing.mjs` | Passed: copy/social links, direct links, quick submission, all seeded options and mobile dialogs |

The sanitized template separately passed `npm run lint`, `npx tsc --noEmit`, and `npm run build`, using the existing dependency installation. No fresh dependency download was required. Full end-to-end tests target the Sacramento implementation; template-specific branding assertions need adaptation when rebranding.

The initial production-build suite saw one transient 503 for an invalid request while other builds were running. Isolated invalid-input requests returned the expected 400 on both runtimes, and the subsequent full built-runtime suites passed. Initial wizard testing found a click-before-hydration race, fixed by waiting for the idea list before enabling choices. Repeated local test fixtures also required unique selectors; no production records were involved.

Visual inspection covered the mobile wizard and research page; padding was corrected and rechecked. Email provider acceptance is covered with mocks only. No live email delivery, paid research API, scheduled job, verified participant login or alternative hosting deployment is claimed tested.
