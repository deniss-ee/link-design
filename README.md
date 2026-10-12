# Link Design

One-page marketing site, four screens, built from blocks. Astro (static) + Tailwind CSS v4 + TypeScript. Yarn only.

## Run locally

```bash
yarn
yarn dev
```

Opens at `http://localhost:4321`.

## Build and check

```bash
yarn build       # output in dist/
yarn typecheck   # checks src/i18n/en.ts against the block types
yarn preview     # serve dist/ locally
```

## What to upload

Contents of `dist/`. On Cloudflare this happens automatically from GitHub (see below).

## How the page is built

The page is a list of blocks. Order, text and visibility are all in **one file: `src/i18n/en.ts`**.

| Block | Screen | Component |
|---|---|---|
| `hero` | 1. Headline and button | `src/blocks/Hero.astro` |
| `story` | 2. "Every team has been here", how it goes, logo strip | `src/blocks/Story.astro` |
| `makes` | 3. What Link makes, with example links | `src/blocks/Makes.astro` |
| `contact` | 4. Price and brief form | `src/blocks/Contact.astro` |

Other editable files:

| What | File |
|---|---|
| Hourly rate, email, Telegram, legal name | `src/data/config.ts` |
| Privacy page text, 404 text | `src/i18n/en.ts` (`privacy`, `notFound`) |
| Colours, fonts | `src/styles/global.css` (`@theme`) |

### Common edits (in `src/i18n/en.ts`)

| I want to | Do this |
|---|---|
| Change a headline or sentence | Edit the text between the quotes |
| Hide the logo strip | In the `story` block: `logos: { enabled: false, ... }` |
| Hide all example links | In the `makes` block: `showExamples: false` |
| Hide a whole screen | Add `enabled: false,` inside that block |
| Reorder screens | Move a whole `{ type: "...", ... }` block up or down |
| Add a service | Copy one item in `makes.items`, edit it |
| Point an example to a real page | Replace its `url` with `https://...` (opens in a new tab) |
| Change the rate | `rate` in `src/data/config.ts` |

A typo in the structure fails `yarn build`, so the live site never breaks from an edit; the previous version stays online.

### Editing in the browser

1. On GitHub, open the repo and press `.` (opens the web editor), or open `src/i18n/en.ts` and click the pencil.
2. Switch to the `dev` branch, edit, commit.
3. Cloudflare rebuilds the staging site in about a minute. Check it.
4. Open a pull request `dev` to `main`. Merge to publish.

### Adding a new block type

1. Create `src/blocks/X.astro`.
2. Add its type to `src/lib/types.ts`.
3. Add one `case` to `src/pages/index.astro`.

## Brief form

The form on screen 4 emails each brief to you through [Web3Forms](https://web3forms.com).

1. Go to web3forms.com, enter the inbox that should receive briefs, confirm the email. You get an access key.
2. In each Cloudflare project add the variable `PUBLIC_WEB3FORMS_KEY` with that key.
3. Redeploy. Submit a test brief on the staging site and check it arrives.

Notes:

- The key is public by design. It only routes submissions to your inbox.
- Free plan: 250 submissions per month. Spam: honeypot field built in.
- Web3Forms processes submitted data on your behalf. The privacy page says so. Review it.
- Without a key, the form opens the visitor's mail app with the brief filled in. The site never breaks.
- To use another provider (Formspree, your own Worker), change `form.endpoint` in `src/data/config.ts` and adjust the hidden fields in `src/components/ContactForm.astro`.

## Environment variables

Set per deployment (Cloudflare project settings). Never commit `.env`.

| Variable | Production | Staging | Purpose |
|---|---|---|---|
| `PUBLIC_SITE_ENV` | unset | `dev` | `dev` adds `noindex` and `Disallow: /` |
| `SITE_URL` | `https://link.design` | `https://dev.link.design` | Canonical URL, sitemap, OG tags |
| `PUBLIC_WEB3FORMS_KEY` | access key | same or a second key | Brief form delivery |
| `PUBLIC_CF_ANALYTICS_TOKEN` | optional | empty | Cookieless visit stats |

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
   Variables: `SITE_URL`, `PUBLIC_WEB3FORMS_KEY`.
3. Create project **link-design-dev** from the same repo.
   Production branch `dev`, same build command and output.
   Variables: `PUBLIC_SITE_ENV=dev`, `SITE_URL=https://dev.link.design`, `PUBLIC_WEB3FORMS_KEY`.
4. Add custom domains: `link.design` (and `www` redirect) to the first project, `dev.link.design` to the second.
5. Email: enable Email Routing and forward `hello@link.design` to your inbox.
6. GitHub: Settings, Branches, protect `main` (require pull request).

## Server settings

- HTTPS only, redirect HTTP to HTTPS (Cloudflare default).
- No CORS setup needed. The browser posts the form straight to `api.web3forms.com`.
- `public/_headers` sets security headers and long caching for `/_astro/*`.
- No strict Content-Security-Policy yet. If you add one, allow `https://api.web3forms.com` for `connect-src` and `form-action`, and `https://static.cloudflareinsights.com` if analytics is on.

## Archive (nothing is deleted)

Everything removed from the page lives in `src/archive/` and in git tags `archive/v1-full-page`, `archive/v2-three-screens`, `archive/v3-four-screens`.
See `src/archive/README.md`.

## Weights (production build, English page)

| Item | Size |
|---|---|
| HTML (home) | about 20 KB (4.6 KB gzip), form script inline |
| CSS | 21 KB (5.0 KB gzip) |
| External JavaScript | 0 KB |
| Fonts loaded (Latin) | about 140 KB WOFF2 |

## Open items before launch

- **Placeholders:** `hello@link.design`, `@linkdesign` Telegram, LinkedIn, legal entity (`src/data/config.ts`). Logo names and example links (`src/i18n/en.ts`).
- **Get the Web3Forms key** and add it to both Cloudflare projects.
- **Privacy page** is a plain-language draft. Check it against your real company data and mail provider.
- **Rate terms** (minimum one hour, one revision, rush +50%, invoice after delivery) are defaults. Confirm.
- **Estonian and Russian:** copy `src/i18n/en.ts` to `et.ts` / `ru.ts`, add routes. Fraunces and Newsreader have no Cyrillic glyphs, so Russian needs a Cyrillic font pair first.
- Fonts were matched by eye from the screenshot. If the design source names them, swap in `src/styles/global.css`.
