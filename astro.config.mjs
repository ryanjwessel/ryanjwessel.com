import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ryanjwessel.com',
  srcDir: './web',
  output: 'static',
  integrations: [sitemap()],
});
