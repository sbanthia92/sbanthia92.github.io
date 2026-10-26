# Personal site (shubhambanthia.com)

Astro 5 static site. Live at https://shubhambanthia.com, deployed to GitHub Pages from `main` (repo `sbanthia92/sbanthia92.github.io`, public).

## Keep this file current
Every commit that is pushed must also update this file if it changes anything documented here (structure, conventions, content decisions, open items). Update `CLAUDE.md` in the same commit, not afterwards.

## Commands
```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # must pass before pushing; output in dist/
```
If `localhost:4321` shows stale content, an old dev server is holding the port: `pkill -f "astro dev"` and restart from this folder.

## Deploy
- Push to `main` runs `.github/workflows/deploy.yml` (withastro/action, Node 22, then actions/deploy-pages). Live about 1.5 minutes later.
- Check with `gh run list -L 3`. Pages source is "GitHub Actions".
- Custom domain: `site` in `astro.config.mjs` and `public/CNAME` are both `shubhambanthia.com`. Pages custom domain set via `gh api -X PUT repos/sbanthia92/sbanthia92.github.io/pages -f cname=shubhambanthia.com`. HTTPS is enforced.
- DNS is on Cloudflare: four `A` records (185.199.108-111.153) and `www` CNAME to `sbanthia92.github.io`. Records must stay **DNS only** (grey cloud). Proxying breaks certificate renewal.
- The repo is named `sbanthia92.github.io` so the site serves from the root; do not add an Astro `base`. Internal links are root-absolute (`/projects/...`).

## Structure
- `src/data/site.ts`: name, tagline, nav, social links, `interests` (hobbies, currently empty), `education`, `skills`, `highlights` (home-page stat tiles).
- `src/data/queries.ts`: sorted/filtered collection getters (drafts excluded). Use these instead of calling `getCollection` in pages.
- `src/content.config.ts`: schemas for three collections.
  - `projects/*.md`: `title, summary, order, featured, draft, tags, cover, coverAlt, coverFit, gallery[], links[]`. Page at `/projects/<file-name>`.
  - `experience/*.md`: `role, company, url, start (YYYY-MM), end (omit = present), location, summary, highlights[], tags, draft`. Sorted newest first by `start`.
  - `writing/*.md`: `title, description, date, tags, cover, draft`. Page at `/writing/<file-name>`. Set `draft: false` to publish.
- `src/pages/`: `index`, `about`, `experience`, `projects/index`, `projects/[...slug]`, `writing/index`, `writing/[...slug]`.
- `src/components/`: `ProjectCard`, `ExperienceList`, `PostList`. `src/layouts/Base.astro` holds head, nav, footer, theme toggle.
- `src/styles/global.css`: all styling. Light/dark via CSS variables; editorial serif (Newsreader) plus JetBrains Mono for labels.
- Images live in `src/assets/projects/<project>/` and are referenced relatively from frontmatter (`../../assets/projects/...`) so Astro optimizes them.

## Images and screenshots
- Screenshots are real captures, cropped to the important region so text is legible (crop with Pillow; keep the full-resolution original out of the repo).
- Card covers are shown 16:9, cropped to top-left. Very wide images get cut off on cards, so set `coverFit: contain` in frontmatter to show the whole image, or crop closer to 16:9.
- Gallery images display at natural size; low-resolution phone screenshots stay soft rather than being stretched.

## Content rules
- Experience and highlights use only facts and numbers from the public resume. The private "body of work" doc has more internal metrics (Oracle CI build, launch latency, device-selection P99, architecture-review skill) and names internal tools; these were deliberately left out. Add them only after the owner confirms they are safe to publish, and rephrase without internal tool names.
- Do not publish phone number or city.
- Tone is relaxed and plain, not a slogan. Current hero headline is a single sentence about 10+ years of distributed systems at Amazon, Oracle and Harness, now having fun with AI agents.
- No RSS feed (removed on request). Sitemap integration is kept.

## Projects on the site
The Gaffer (`gaffer`), fpl-context-mcp, Review Desk, Why Do People Live Here? (repo made public on request). `fpl-context-mcp` is the correct repo name (the resume still says `sports-context-mcp`).

## Open items
- Hobbies section on About is a placeholder (`interests` in `site.ts`).
- `src/content/writing/hello.md` is a hidden draft example; replace or delete.
- Review Desk screenshot text is still small on the card; a tighter 16:9 crop would help.
- Optional: add `CLAUDE.md` to `review-desk` and `why-do-people-live-here` repos.

## Commits
Commit messages end with the Co-Authored-By line for Claude. Work directly on `main`; each push deploys.
