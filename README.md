# The Common — website (Astro)

Fresh static rebuild of thecommon.io. Code-native (vibe-coded with Claude), edits → static HTML on a CDN.

## Run it locally
```bash
cd the-common/site
npm install
npm run dev        # http://localhost:4321
```
Build for production:
```bash
npm run build      # outputs ./dist  → deploy to Cloudflare Pages / Netlify
```

## Structure
- `src/styles/global.css` — the brand system (monochrome + silver + champagne gold, Fraunces/Jost). One source of truth for all pages.
- `src/layouts/Base.astro` — `<head>` (fonts, GA, SEO meta, canonical), Nav + Footer, scroll-reveal. Wrap every page in this.
- `src/components/Nav.astro`, `Footer.astro` — shared, edit once.
- `src/pages/*.astro` — one file per page (file path = URL).
- `public/img/` — logos + images (served at `/img/...`).

## Pages (Sept 2026)
- `index.astro` — Home
- `membership.astro` — Plans, linked to the matching OfficeRnD plan pages
- `spaces.astro` — Drop-in, meeting rooms, private offices, venue
- `about.astro`
- `contact.astro` — HubSpot "Ask us anything" form (same form as the current site)

Parked in `_archive/` (not built): member card page + wallet component (see `_archive/member-card/PARKED-SNIPPETS.md` to restore), events page + entries, journal.

## Preview on GitHub Pages
Every push to `main` builds and publishes to GitHub Pages via `.github/workflows/pages.yml`. The workflow rewrites root paths to `/thecommon/` because a project Pages site lives under a subpath; the source stays written for the real root domain.

## iCloud note
This folder is inside iCloud Drive. Dependencies live in `node_modules.nosync/` (iCloud ignores `.nosync` folders) with `node_modules` as a symlink. If a build hangs, run:
`find . -type f -flags +dataless -not -path './node_modules*' -exec brctl download {} \;`

## Deploy (later)
1. Push repo to GitHub. 2. Cloudflare Pages → connect repo → build `npm run build`, output `dist`. 3. Test on the `*.pages.dev` URL. 4. SEO cutover: map 301 redirects from old WordPress URLs, migrate metadata, then point DNS (preserve email MX records on CanSpace).

## Notes
- GA property `G-L9RSCHQ4KG` is wired into `Base.astro` (don't double-add).
- The homepage events teaser uses a gradient placeholder — drop a real event photo at `public/img/social.jpg` and set it as the `.teaser-img` background.
