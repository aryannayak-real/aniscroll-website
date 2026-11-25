import { defineConfig } from 'astro/config';

// GitHub Pages project site. Change `site` and `base` if a custom domain is
// added later.
export default defineConfig({
  site: 'https://aryannayak-real.github.io',
  base: '/aniscroll-website',
  output: 'static',
  build: {
    format: 'directory',
  },
});
