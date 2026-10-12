# Link Design

One-page marketing site, three screens. Astro (static) + Tailwind CSS v4 + TypeScript. Yarn only.

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
| 2. What Link makes + how it goes | `src/components/Work.astro` |
| 3. Price (hourly) + contact | `src/components/Contact.astro` |

## Where to edit things

| What | File |
|---|---|
| All page copy (EN) | `src/i18n/en.ts` |
| Hourly rate, email, Telegram, legal name | `src/data/config.ts` |
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
| HTML | 7.2 KB (2.2 KB gzip) |
| CSS | 16.3 KB (4.1 KB gzip) |
| JavaScript | 0 KB |
| Fonts loaded (Latin) | about 140 KB WOFF2 (Fraunces regular + italic, Newsreader regular) |

## Open items

- **Placeholders to replace before launch:** `hello@link.design`, `@linkdesign` Telegram, legal entity line (`src/data/config.ts`).
- **Rate terms are defaults:** minimum one hour, one revision round, rush +50%, invoiced after delivery. Confirm or edit in `src/i18n/en.ts`.
- **Work examples and client logos were removed.** Add them back only with real projects and written permission to name the brand.
- **Estonian and Russian:** copy `src/i18n/en.ts` to `et.ts` / `ru.ts`, add routes. Fraunces and Newsreader have no Cyrillic glyphs, so Russian needs a Cyrillic display and text font before it ships.
- Fonts were matched by eye from the screenshot. If the original design source names the fonts, swap them in `src/styles/global.css`.
