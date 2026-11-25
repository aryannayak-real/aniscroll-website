# AniScroll Website

The official website for [AniScroll](https://github.com/aryannayak-real/AniScroll), built with Astro and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

The site is served at `http://localhost:4321/aniscroll-website/` because the
Astro project is configured for the GitHub Pages project-site base path.

## Production build

```bash
npm run build
npm run preview
```

The static output is written to `dist/`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site
and deploys it through GitHub Pages.

Live site: https://aryannayak-real.github.io/aniscroll-website/

## Updating screenshots

Screenshots and branding assets live in `public/images/` and the site-level
icon files in `public/`. Keep the portrait screenshots reasonably sized for the
web before committing them.

## Custom domain

If a custom domain is added later, update `site` and `base` in
`astro.config.mjs`, then add the domain under **Settings → Pages** in GitHub.

## App links

Release, issue, Discord, and repository links are centralised in
`src/lib/site.ts`.

## License

The website code is distributed under GPL-3.0, matching the AniScroll app.
AniScroll branding, screenshots, and app artwork remain part of the AniScroll
project.
