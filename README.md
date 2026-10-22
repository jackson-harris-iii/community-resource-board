> **Latest source:** [Idea Hub](https://github.com/jackson-harris-iii/idea-hub) · [Sacramento edition](https://github.com/jackson-harris-iii/ideahub-sac) · [Community projects](https://github.com/jackson-harris-iii/idea-hub-projects). This repository preserves the original prototype. The live board is now [ideahubsac.org](https://ideahubsac.org).

# Community Resource Board

Open-source scaffold for turning community ideas into proposed solutions, resource offers and funding conversations. No participant account is needed for the demo; an owner reviews everything before publication.

**Sacramento pilot:** https://sacramento-ideas.jacksonthedev.chatgpt.site

- Open idea submission and most-voted-first board
- Participation wizard: support, idea, solution, resources or funding interest
- Private owner review and optional private contact fields
- Four example research briefs and a cited, dated resource directory
- Automatic matching against that curated directory on submission/review
- Durable email outbox with an optional Resend adapter
- Original hackathon guide, slides and room displays retained as examples

Funding offers do not collect money or constitute commitments. Fresh web research, participant accounts and scheduled checks are not enabled. Email needs your own sender/key. Analytics is disabled by default.

## Set up your community

See [deployment guide](docs/DEPLOYMENT.md) for local preview, a new Sites deployment and the explicit authentication boundary. The current supported hosted path is Sites. Direct Cloudflare/Vercel deployment needs additional hosting/auth work; it is not advertised as one-click.

Edit the public settings in `app/community.config.ts`, replace the Sacramento sample copy and links, and supply your own seed ideas/research. No production database, credentials, Site ID or private Git history is included. Third-party logos are excluded.

## Documentation

- [Operator guide](docs/OPERATIONS.md)
- [Four-project research](docs/RESEARCH.md)
- [Participation/account decision](docs/PARTICIPATION-DECISION.md)
- [Service and cost ledger](docs/SERVICES-AND-COSTS.md)
- [Contributing](CONTRIBUTING.md)
- [License](LICENSE) and [third-party notice](NOTICE.md)

Stack: React/Vinext, TypeScript, Workers and D1. Run `npm run lint`, `npx tsc --noEmit`, the supported build helper and relevant local `verify*.mjs` suites. See deployment instructions for browser tooling. Keep participant data out of source control.
