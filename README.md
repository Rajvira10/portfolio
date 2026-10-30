# Rajvir Ahmed Shuvo — portfolio

Source for https://rajvir-portfolio.netlify.app/ . The repository now contains the sparse portfolio refresh, rather than only the original 2023 interface.

## Source and publication status

- `ec6c441`: approved sparse design, published on 17 October 2026.
- `4c53d91`: adds Remvyn and refreshes selected contribution links. This source update is ready; its separate Netlify publication approval is still pending.
- The current public site is the October 17 version until that deployment is approved and completed. A repository push alone does not publish the site.

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

## Deploy to the existing Netlify project

The existing project is **rajvir-portfolio**, in **Rajvira10's team**. As verified on 30 October 2026, Netlify's Developer settings shows **Current repository: Not linked**. GitHub also has no repository webhooks or Actions workflows configured. Do not connect a repository or alter deployment settings as part of a content update.

1. Obtain review and publication approval for the specific production preview and any changed professional claims.
2. Build with `npm run build`.
3. In the existing Netlify project, upload the **contents of `build/`**, or a ZIP whose root contains `index.html`. Do not upload this whole repository, its `.git`, dependencies, local environment files or screenshots.
4. A manual upload publishes immediately. Verify the production URL, new deploy permalink, contact destinations and files against the reviewed build.

Do not treat a successful GitHub push as evidence that Netlify changed. The Remvyn update remains pending deployment approval even though its source is available here.

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
