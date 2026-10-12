# Link Design

One-page marketing site. Astro (static) + Tailwind CSS v4 + TypeScript. Yarn only.

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

Output is the `dist/` folder (static HTML, CSS, fonts). Check it locally with `yarn preview`.

## What to upload

Contents of `dist/`. On Cloudflare this happens automatically from GitHub (see below).

## Where to edit things

| What | File |
|---|---|
| All page copy (EN) | `src/i18n/en.ts` |
| Prices, hours (cards + spec table) | `src/data/plans.ts` |
| Plan wording, turnaround, rush, etc. | `src/i18n/en.ts` → `pricing.plans` |
| Email, Telegram, LinkedIn, legal name, show/hide work index | `src/data/config.ts` |
| Colours, fonts, type scale | `src/styles/global.css` (`@theme`) |
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
2. Create project **link-design** from GitHub repo `deniss-ee/link-design`.
   Production branch `main`, build command `yarn build`, output directory `dist`.
   Variables: `SITE_URL=https://link.design`.
3. Create project **link-design-dev** from the same repo.
   Production branch `dev`, same build command and output.
   Variables: `PUBLIC_SITE_ENV=dev`, `SITE_URL=https://dev.link.design`.
4. Add custom domains: `link.design` (and `www` redirect) to the first project, `dev.link.design` to the second.
5. Email: enable Email Routing and forward `hello@link.design` to your inbox.
6. GitHub: Settings → Branches → protect `main` (require pull request).

## Server settings

- HTTPS only, redirect HTTP to HTTPS (Cloudflare default).
- No CORS needed (no API calls).
- Static assets are hashed (`/_astro/*`): cache for a year. HTML: short cache or revalidate.

## Weights (production build, English page)

| Item | Size |
|---|---|
| HTML | 36.9 KB (6.7 KB gzip) |
| CSS | 47.9 KB (20.6 KB gzip) |
| JavaScript | 0 KB of framework; one inline clock script |
| Fonts loaded (Latin) | about 225 KB WOFF2 |

## Open items

- **Placeholders to replace before launch:** `hello@link.design`, `@linkdesign` Telegram, LinkedIn URL, legal entity line (`src/data/config.ts`).
- **Work index rows are placeholders.** Replace with real projects or set `showWork: false` in `src/data/config.ts`.
- **Do not name client brands without written permission** (including Õhtuleht; check your contract).
- **Estonian and Russian:** copy the structure of `src/i18n/en.ts` to `et.ts` / `ru.ts`, add routes. Fraunces and Newsreader have no Cyrillic glyphs, so Russian needs a Cyrillic display and text font before it ships.
- Fonts were matched by eye from the screenshot. If the original design source names the fonts, swap them in `src/styles/global.css`.
- Optional later: brief form (needs a server-side function so the mail key stays secret), privacy page if a form or tracking is added.
