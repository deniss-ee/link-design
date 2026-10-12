# Archive

Nothing removed from the site is deleted. It lives here, unused, ready to bring back.
Files here are not imported by the site, not scanned by Tailwind and not type-checked.

Git also keeps everything, as tags:

| Tag | What it holds |
|---|---|
| `archive/v1-full-page` | Original 12-section page |
| `archive/v2-three-screens` | Three-screen, hourly-only version |
| `archive/v3-four-screens` | Four screens before the move to data-driven blocks (components in `src/components/`) |

Example: `git show archive/v1-full-page:src/components/Pricing.astro`.

## What is here

| File | What it is |
|---|---|
| `index.full-page.astro` | Original 12-section page (v1) |
| `components/Masthead.astro` | Top bar with issue number, nav, live Tallinn clock |
| `components/Hero.astro` | v1 hero with side table (booking, from, reply) |
| `components/Ticker.astro` | Scrolling mono keyword strip |
| `components/Brief.astro` | "The brief that won't wait" story block |
| `components/Method.astro` | Four-step method with 01/04 numerals |
| `components/Services.astro` | Numbered services list with tool tags |
| `components/Pricing.astro` | Four plan cards (pay-as-you-go, Lite, Core, Pro) |
| `components/SpecTable.astro` | Plan comparison table |
| `components/WorkIndex.astro` | Numbered work index (placeholder rows) |
| `components/Principles.astro` | Dark principles + colophon block |
| `components/Faq.astro` | Eight-question FAQ |
| `components/SignOff.astro` | v1 sign-off with big headline and contacts |
| `components/Footer.astro` | v1 footer with big wordmark |
| `components/Work.two-column.astro` | v2 "What Link makes" + "How it goes" two columns |
| `i18n.en.ts` | v1 copy for all sections above, incl. FAQ and plan wording |
| `i18n.three-screens.en.ts` | v2 (three-screen) copy |
| `plans.ts` | Plan numbers and hourly-rate helper |
| `config.ts`, `config.three-screens.ts` | v1 and v2 site config |
| `legacy.css` | v1 tokens and helper classes (`.label`, `.h-section`, ticker keyframes) |

## Bring a section back

1. Copy the component from `components/` to `src/components/`.
2. Fix its imports: `../i18n.en` to `../i18n/en`, `../plans` to `../data/plans`, `../config` to `../data/config`.
3. Copy the matching copy keys from the archived i18n file into `src/i18n/en.ts`.
4. If it uses `.label`, `.h-section`, `.h-display`, `.rule-top`, `.cta-arrow` or the ticker, copy those rules from `legacy.css` into `src/styles/global.css`.
5. Add the component to `src/pages/index.astro`.
