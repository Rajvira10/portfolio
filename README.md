# Rajvir Ahmed Shuvo — portfolio

Source for https://rajvir-portfolio.netlify.app/ . The repository now contains the sparse portfolio refresh, rather than only the original 2023 interface.

## Source and publication status

- `ec6c441`: approved sparse design, published on 17 October 2026.
- `4c53d91`: adds Remvyn and refreshes selected contribution links. Published through the Git-backed deployment of `faa5e43` on 30 October 2026.
- The existing Netlify site now tracks `master` in this repository. Pushing to `master` starts an automatic production build and deployment; wait for a successful deploy before treating the live site as updated.

The older components and assets remain for reference. `src/App.js`, `src/App.css` and `src/index.css` define the current page. Updating an old component under `src/container/` will not update the current page unless it is imported by `App.js`.

## Local development

Use npm and the committed `package-lock.json`. `yarn.lock` is retained from the original project; it is not the authoritative lockfile for this refresh. Tested with Node 26.8.1 and npm 11.19.0.

```sh
npm ci --no-audit --no-fund
npm start
```

No environment variables, Sanity account, API credentials or external fonts are required for the current page. The old tracked `.env` has been removed from the current Git tree and is ignored; prior repository history is preserved.

## Production build and preview

```sh
npm run build
python -m http.server 18765 --bind 127.0.0.1 --directory build
```

Open http://127.0.0.1:18765/ . `npm run build` runs the production compiler and then `scripts/prerender.cjs`. React remains the authoring format, but the delivered page is static HTML and CSS. Postbuild removes generated JavaScript and unused legacy public assets from `build/`. The output contains `index.html`, `favicon.svg`, `robots.txt` and one stylesheet under `static/css/`.

Preview `build/` before publishing: this is the actual production output and works without JavaScript, a CMS or API requests. Check desktop and phone layouts, keyboard focus, contact links and contribution status labels.

## Continuous deployment to the existing Netlify project

The existing **rajvir-portfolio** project in **Rajvira10's team** is linked to **Rajvira10/portfolio** as of 30 October 2026. The URL remains https://rajvir-portfolio.netlify.app/ .

Netlify build configuration:

- Production branch: `master`.
- Base directory: repository root (blank in the Netlify form).
- Build command: `npm run build`.
- Publish directory: `build`.
- No environment variables are needed for this page.

Preview and review changes locally before pushing or merging to `master`, especially changed public professional claims. A push to `master` now deploys automatically; use a separate branch for work that must stay out of production. No manual ZIP upload is required.

After each production push, inspect the existing project's Deploys page. Confirm the deploy succeeds and names the intended commit, then verify the live content and contact links. A successful push is not itself proof that the deployment succeeded. Keep the repository linked to this existing project rather than creating a second site or changing domains.

The first Git-backed deployment succeeded at https://6ae470f7b222c596619b99f4--rajvir-portfolio.netlify.app/ from `faa5e43`. Its page content matched the reviewed source; Netlify generated a different stylesheet fingerprint, with only legacy vendor-prefix and source-map-comment differences from the local CSS. Desktop and phone layouts and contact destinations were checked on the live site.

## Recoverable versions

- Approved sparse portfolio: https://6ad2666eda889265a9a0526f--rajvir-portfolio.netlify.app/ ; source commit `ec6c441`.
- Original 2023 deployment: https://649c5bb702b27a2a3bf21e31--rajvir-portfolio.netlify.app/ ; original source ends at `b2f14e6`.

Git history retains both interfaces. Netlify has an automatic deploy-retention policy, so historical deploy permalinks are references, not a substitute for keeping source history and rebuilding when needed.

## Content

The page keeps the approved compact personal introduction and exact contact links, including https://www.linkedin.com/in/rajvir-ahmed-shuvo/ . Remvyn links to https://github.com/Rajvira10/remvyn and is described using its public README and source: desktop SSH and server management with terminals, SFTP, port forwarding and Linux host monitoring; Go, Wails, React and TypeScript.

Selected contribution statuses were verified on 30 October 2026:

- [franz-go #1509](https://github.com/twmb/franz-go/pull/1509): kfake shutdown deadlock fix, **merged**.
- [fx #440](https://github.com/antonmedv/fx/pull/440): Unicode symbol rendering fix, **merged**.
- [d3-scale #291](https://github.com/d3/d3-scale/pull/291): degenerate descending domains, **open**.

Keep open changes distinct from merged contributions. Do not add employer implementation details, private telemetry, unsupported adoption or performance numbers, or production-readiness claims.
