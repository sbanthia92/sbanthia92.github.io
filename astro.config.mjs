import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// When shubhambanthia.com is attached, change `site` to 'https://shubhambanthia.com'
// and add a public/CNAME file containing that domain.
export default defineConfig({
  site: 'https://sbanthia92.github.io',
  integrations: [sitemap()],
});
