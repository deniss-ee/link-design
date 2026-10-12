# Link Design

One-page marketing site, four screens. Astro (static) + Tailwind CSS v4 + TypeScript. Yarn only.

## Run locally

```bash
yarn
yarn dev
```

Opens at `http://localhost:4321`.

## Build

```bash
yarn build
```

Output is the `dist/` folder (static HTML, CSS, fonts, no JavaScript).
Check it locally with `yarn preview`.

## What to upload

Contents of `dist/`. On Cloudflare this happens automatically from GitHub (see below).

## Structure

| Screen | File |
|---|---|
| 1. Hero | `src/components/Hero.astro` |
| 2. Story (every team has been here) + how it goes + logo strip | `src/components/Story.astro`, `Logos.astro` |
| 3. What Link makes, with example links | `src/components/Makes.astro` |
| 4. Price (hourly) + contact | `src/components/Contact.astro` |

## Switches

In `src/data/config.ts`, `features`:

| Flag | Effect |
|---|---|
| `logos` | Scrolling logo strip at the bottom of screen 2 |
| `examples` | Example links under each service on screen 3 |

## Archive (nothing is deleted)

Everything removed from the page lives in `src/archive/` and in git tags `archive/v1-full-page` and `archive/v2-three-screens`.
See `src/archive/README.md` for the file list and how to bring a section back.

## Where to edit things

| What | File |
|---|---|
| All page copy (EN), example link titles and URLs | `src/i18n/en.ts` |
| Hourly rate, email, Telegram, legal name, logo names, switches | `src/data/config.ts` |
| Colours, fonts | `src/styles/global.css` (`@theme`) |
| Reference designs (local only, git-ignored) | `reference/` |

## Environment variables

Set per deployment (Cloudflare project settings). Never commit `.env`.

| Variable | Production | Staging | Purpose |
|---|---|---|---|
| `PUBLIC_SITE_ENV` | unset or `production` | `dev` | `dev` adds `noindex` and `Disallow: /` |
| `SITE_URL` | `https://link.design` | `https://dev.link.design` | Canonical URL, sitemap, OG tags |

No secrets are used. There is no backend and no form; contact is `mailto:` + Telegram.

## Git workflow

```
feature branch --PR--> dev   (staging site)
dev            --PR--> main  (production site)
```

## Deploy setup (Cloudflare, one-time)

Cloudflare may offer Workers or Pages for new projects; the settings below are the same for both. Follow the dashboard wording.

1. Create a Cloudflare account and add the domain.
2. Create project **link-design** from the GitHub repo.
   Production branch `main`, build command `yarn build`, output directory `dist`.
   Variables: `SITE_URL=https://link.design`.
3. Create project **link-design-dev** from the same repo.
   Production branch `dev`, same build command and output.
   Variables: `PUBLIC_SITE_ENV=dev`, `SITE_URL=https://dev.link.design`.
4. Add custom domains: `link.design` (and `www` redirect) to the first project, `dev.link.design` to the second.
5. Email: enable Email Routing and forward `hello@link.design` to your inbox.
6. GitHub: Settings, Branches, protect `main` (require pull request).

## Server settings

- HTTPS only, redirect HTTP to HTTPS (Cloudflare default).
- No CORS needed (no API calls).
- Static assets are hashed (`/_astro/*`): cache for a year. HTML: short cache or revalidate.

## Weights (production build, English page)

| Item | Size |
|---|---|
| HTML | 15.5 KB (3.0 KB gzip) |
| CSS | 17.6 KB (4.5 KB gzip) |
| JavaScript | 0 KB |
| Fonts loaded (Latin) | about 140 KB WOFF2 (Fraunces regular + italic, Newsreader regular) |

## Open items

- **Placeholders to replace before launch:** `hello@link.design`, `@linkdesign` Telegram, legal entity line (`src/data/config.ts`).
- **Rate terms are defaults:** minimum one hour, one revision round, rush +50%, invoiced after delivery. Confirm or edit in `src/i18n/en.ts`.
- **Logo strip and example links are placeholders.** Wordmarks in `config.logos` are invented; example URLs in `src/i18n/en.ts` point to `#work`. Replace with real clients (written permission to name the brand) and real case links, or switch off with `features`.
- **Estonian and Russian:** copy `src/i18n/en.ts` to `et.ts` / `ru.ts`, add routes. Fraunces and Newsreader have no Cyrillic glyphs, so Russian needs a Cyrillic display and text font before it ships.
- Fonts were matched by eye from the screenshot. If the original design source names the fonts, swap them in `src/styles/global.css`.
