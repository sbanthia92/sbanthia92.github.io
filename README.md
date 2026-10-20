# Personal site

Astro static site, deployed to GitHub Pages on every push to `main`.

- Projects: `src/content/projects/*.md` (screenshots in `src/assets/projects/<name>/`)
- Experience: `src/content/experience/*.md`
- Writing: `src/content/writing/*.md` (set `draft: false` to publish)
- Site-wide settings, skills, hobbies: `src/data/site.ts`

```sh
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Custom domain
Served at https://shubhambanthia.com (`public/CNAME`, `site` in `astro.config.mjs`). DNS is on Cloudflare: four `A` records and a `www` CNAME to `sbanthia92.github.io`, all DNS-only (not proxied).
