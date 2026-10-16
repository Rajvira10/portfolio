# Rajvir Ahmed Shuvo — portfolio

Refresh of the existing https://rajvir-portfolio.netlify.app/ project.
Original source: https://github.com/Rajvira10/portfolio, master `b2f14e6`.

## Develop and build

Use npm and the committed package-lock.json (`yarn.lock` is retained from the original project).

```
npm ci --no-audit --no-fund
npm start
npm run build
python -m http.server 18765 --bind 127.0.0.1 --directory build
```

React remains the authoring format. `postbuild` pre-renders the page and removes unused generated JavaScript and legacy public assets from `build/`. The production page uses only HTML, CSS and a favicon; no JavaScript, CMS, forms service, analytics, external fonts or API requests are needed. Original components and assets remain in source and history. Sass replaces obsolete node-sass for current Node compatibility.

## Content and publication review

Final claims:

- Full-stack developer; Dhaka, Bangladesh.
- “I build backend services and web and mobile apps.”
- “I work with Go, Laravel, PostgreSQL and Redis, alongside React, TypeScript and Flutter.”
- “Interested in distributed systems, queues, caching and the work of debugging failures.”

Grounded in the user's refreshed public GitHub README. No employer/client identities, private implementation details, telemetry, scale claims or production-release claims are included.

Public contributions verified for Rajvira10 on 16 October 2026:

- CLI Helpers #117, Unicode table alignment — merged.
- d3-scale #291, degenerate descending domains — open.
- Plumbum #865, unsupported remote process termination — open.

The latter two are explicitly labelled Open; status is dated. These are concise contribution links, not featured product launches. LinkedIn is exactly https://www.linkedin.com/in/rajvir-ahmed-shuvo/ .

## Design

Compact personal profile and contribution index. Neutral white/charcoal with a restrained green accent; Arial for unobtrusive text, Georgia for the small personal mark. Sidebar identity on desktop, a single reading column on mobile. No hero slogan, diagrams, case-study prose, project cards or invented screenshots.

Visually inspected references: https://paco.me/ (compact identity and quiet text hierarchy) and https://rauno.me/ (direct personal introduction and deliberate negative space). Only composition informed the work; no assets or copy were reused. The old portrait was a stock image, so it is not presented as Rajvir.

## Existing hosting and rollback

The existing Netlify project is `rajvir-portfolio`, in Rajvira10’s team. It is manually deployed with Netlify Drop and has no linked repository in its project overview. The reviewed refresh was published with Netlify Drop after user approval on 17 October 2026 (UTC).

Original deploy permalink: https://649c5bb702b27a2a3bf21e31--rajvir-portfolio.netlify.app/ . Source history and original assets remain intact.

Published deploy: https://6ad2666eda889265a9a0526f--rajvir-portfolio.netlify.app/ . All four live files were verified byte-for-byte against the reviewed build from commit `ec6c441`. Desktop and phone rendering and contact destinations were checked on the live site. No account, credential, paid-plan or infrastructure settings were changed. For future updates, upload only `build/` to this existing project after review; manual uploads publish immediately.
