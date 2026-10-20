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
1. Set `site` in `astro.config.mjs` to `https://shubhambanthia.com`.
2. Add `public/CNAME` containing `shubhambanthia.com`.
3. Add DNS records at the registrar (see GitHub Pages docs), then enable "Enforce HTTPS" in repo Pages settings.
