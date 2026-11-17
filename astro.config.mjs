import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ryanjwessel.com',
  srcDir: './web',
  output: 'static',
  redirects: {
    '/experience': '/about#experience',
    '/projects': '/work',
  },
  integrations: [sitemap()],
});
