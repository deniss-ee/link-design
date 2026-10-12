// All UI copy lives here. Copy is TEMPORARY: edit freely.
// Estonian (et.ts) and Russian (ru.ts) must satisfy the same `Copy` type.
import type { PlanId } from "./plans";

type SpecKey =
  | "minimum"
  | "hours"
  | "tasks"
  | "turnaround"
  | "response"
  | "scope"
  | "channel"
  | "payment"
  | "rush"
  | "revisions";

interface PlanCopy {
  name: string;
  tagline: string;
  specs: Record<SpecKey, string>;
  /** Which spec rows show on the card, in order. */
  cardRows: SpecKey[];
}

export const en = {
  lang: "en",
  meta: {
    title: "Link Design: fast design, reliable files. Banners, HTML5, email, print",
    description:
      "Fast design for banners, HTML5, social, email and print. Same-day estimate, delivery usually inside 48 hours, lost source files rebuilt. Tallinn.",
  },

  ui: {
    skip: "Skip to content",
    up: "↑ Top",
  },

  masthead: {
    issue: "Vol. I · No. 01",
    nav: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Principles", href: "#principles" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    label: "§ 00 — Masthead",
    title: ["Design,", "on the", "hour."],
    sub: "Link Design turns briefs into finished files fast, and rebuilds the source files when they are lost. Banners, HTML5, social, email, print. Estimate the same day, delivery usually inside 48 hours.",
    aside: [
      { k: "Booking", v: "Open" },
      { k: "From", v: "45 €/h" },
      { k: "Reply", v: "Within 1 day" },
      { k: "Source files", v: "Included" },
    ],
    cta: "Start a brief",
  },

  ticker: [
    "Web banners",
    "HTML5",
    "Social",
    "Email",
    "Landing pages",
    "Print",
    "OOH",
    "Brand adaptations",
    "Source-file rebuilds",
    "Decks",
  ],

  brief: {
    label: "§ 01",
    title: "The brief that won't wait.",
    p1: "The campaign goes live Friday. The in-house designer is on holiday. The agency quoted ten days. Twelve banner sizes, two social cuts, an email header, and the original Figma is somewhere nobody can find.",
    quote: "This is the work Link does.",
    p2: "Briefs are estimated the same day. Missing source files are rebuilt. A screenshot works as a spec sheet. No kickoff meetings. Files, on time.",
  },

  method: {
    label: "§ 02",
    tag: "Working method",
    title: "How it actually goes.",
    steps: [
      {
        title: "Brief",
        text: "Email, Telegram, voice memo, half a sentence. Whatever you have. The rest gets asked.",
      },
      {
        title: "Estimate",
        text: "Hours and a delivery window, the same day. No proposals, no decks.",
      },
      {
        title: "Design",
        text: "Work happens without calls. Drafts arrive in your inbox or shared channel.",
      },
      {
        title: "Hand-off",
        text: "One round of revisions. Final files with sources, organised and named clearly.",
      },
    ],
  },

  services: {
    label: "§ 03",
    tag: "Six things, well",
    title: "What Link makes.",
    items: [
      {
        title: "Source-file rebuilds",
        tags: "PDF → Figma · JPG → AI · URL → layers",
        text: "For when the original .ai is on a drive nobody owns anymore.",
      },
      {
        title: "Web banners & HTML5",
        tags: "HTML5 · Animated · Static",
        text: "Up to 30 sizes per set. Adaptations from a master, in hours.",
      },
      {
        title: "Social",
        tags: "Static · Carousel · Story",
        text: "Concept-light, craft-heavy. On-brand, not brand-fenced.",
      },
      {
        title: "Email & landing pages",
        tags: "HTML email · Responsive · Dark mode",
        text: "Render-tested. Outlook works. Dark mode too.",
      },
      {
        title: "Print & OOH",
        tags: "CMYK · Spot · Press-ready",
        text: "Press-ready, with the printer on copy.",
      },
      {
        title: "Brand adaptations",
        tags: "Decks · Templates · Systems",
        text: "A brand book, made to work on a Tuesday.",
      },
    ],
  },

  pricing: {
    label: "§ 04 — Rate card",
    title: ["Prices,", "plainly."],
    intro:
      "Four ways to work. One revision round on every brief. Unused hours don't roll over; they hold capacity, not credit. Euros, VAT added where applicable.",
    pick: "← Pick this one",
    start: "Start",
    perHour: "€/hour",
    perMonth: "€/month",
    plans: {
      payg: {
        name: "Pay-as-you-go",
        tagline: "For the one-off. The fire drill.",
        specs: {
          minimum: "1 hour",
          hours: "—",
          tasks: "1",
          turnaround: "3–4 days",
          response: "within 1 day",
          scope: "Static and HTML5",
          channel: "Email",
          payment: "After delivery",
          rush: "+50%",
          revisions: "1 round",
        },
        cardRows: ["minimum", "turnaround", "response", "payment", "revisions"],
      },
      lite: {
        name: "Lite",
        tagline: "A retainer for steady, static work.",
        specs: {
          minimum: "1 month",
          hours: "12 / month",
          tasks: "1",
          turnaround: "2–3 days",
          response: "2–4 h",
          scope: "Static only",
          channel: "Email",
          payment: "Monthly",
          rush: "+50%",
          revisions: "1 round",
        },
        cardRows: ["hours", "tasks", "turnaround", "response", "scope"],
      },
      core: {
        name: "Core",
        tagline: "The right plan for most teams.",
        specs: {
          minimum: "1 month",
          hours: "24 / month",
          tasks: "1 + backlog",
          turnaround: "1–2 days",
          response: "2–4 h",
          scope: "HTML5, email, simple print",
          channel: "Telegram",
          payment: "Monthly",
          rush: "+50%",
          revisions: "1 round",
        },
        cardRows: ["hours", "tasks", "turnaround", "response", "scope", "channel"],
      },
      pro: {
        name: "Pro",
        tagline: "Two tracks in parallel, broader scope.",
        specs: {
          minimum: "1 month",
          hours: "40 / month",
          tasks: "2 parallel",
          turnaround: "1–2 days",
          response: "2–4 h",
          scope: "Landings, decks, light branding",
          channel: "Telegram",
          payment: "Monthly",
          rush: "+50%",
          revisions: "1 round",
        },
        cardRows: ["hours", "tasks", "turnaround", "response", "scope", "channel"],
      },
    } satisfies Record<PlanId, PlanCopy>,
    specLabels: {
      minimum: "Minimum",
      hours: "Hours",
      tasks: "Active tasks",
      turnaround: "Turnaround",
      response: "Response",
      scope: "Scope",
      channel: "Channel",
      payment: "Payment",
      rush: "Rush / weekend",
      revisions: "Revisions",
    } satisfies Record<SpecKey, string>,
  },

  compare: {
    label: "§ 05 — Spec sheet",
    title: "All four, on one page.",
    tag: "Comparison · All figures EUR",
    itemHeader: "Item",
    rows: [
      { key: "rate", label: "Hourly rate" },
      { key: "hours", label: "Hours included" },
      { key: "tasks", label: "Active tasks" },
      { key: "turnaround", label: "Turnaround" },
      { key: "response", label: "Response time" },
      { key: "minimum", label: "Minimum" },
      { key: "channel", label: "Channel" },
      { key: "payment", label: "Payment" },
      { key: "rush", label: "Rush / weekend fee" },
      { key: "revisions", label: "Revisions" },
    ],
    footnote:
      "*Effective rate inside a subscription. The premium pays for held capacity, faster response, and a guaranteed slot.",
  },

  work: {
    label: "§ 06 — Index",
    title: ["Selected", "work."],
    intro:
      "An index, in the print sense: by year, client, and what was actually delivered. Most of it is under NDA; descriptions are kept dry on purpose.",
    footnote: "Full case studies on request. Email.",
    // PLACEHOLDER ROWS. Replace with real projects or hide via config.showWork.
    rows: [
      { year: "2025", client: "Auto dealership group", what: "Spring campaign, 32 banner sizes, 4 markets", sector: "Auto dealership" },
      { year: "2025", client: "National newsroom", what: "Election-night liveblog cover system", sector: "Newsroom" },
      { year: "2024", client: "B2B software", what: "Partner brand kit and deck rebuild", sector: "B2B SaaS" },
      { year: "2024", client: "Sports event", what: "Race-week social system, 110+ assets", sector: "Sport event" },
      { year: "2024", client: "Insurance", what: "Onboarding email series, 9 templates", sector: "Insurance" },
      { year: "2023", client: "Travel operator", what: "Summer campaign adaptation, 47 sizes", sector: "Travel" },
      { year: "2023", client: "Confidential", what: "Brand book rebuilt from a single 2009 PDF", sector: "Legal firm" },
    ],
  },

  principles: {
    label: "§ 07 — Colophon",
    title: "Principles.",
    items: [
      { title: "Fast.", text: "Estimate the same day. Delivery usually inside 48 hours." },
      { title: "Reliable.", text: "Deadline agreed in writing, then met." },
      { title: "Complete.", text: "Source files included. Rebuilt when missing." },
    ],
    colophon: [
      { k: "Based", v: "Tallinn, EE" },
      { k: "Formats", v: "Banners · Social · Email · Print" },
      { k: "Delivery", v: "Usually 48 h" },
      { k: "Files", v: "Sources included" },
    ],
  },

  faq: {
    label: "§ 08",
    title: ["Questions,", "answered", "at length."],
    items: [
      {
        q: "Why does a subscription cost more per hour than hourly?",
        a: "It pays for held capacity and faster response, not just hours. A retainer reserves a slot in the week. Hourly work is queued in arrival order, usually a few days out.",
      },
      {
        q: "We've lost the source files. Can you still help?",
        a: "Yes. It is a core part of the service. Send the highest-resolution version available: print PDF, JPG, screenshot, live URL. It comes back editable in Figma or Illustrator.",
      },
      {
        q: "How does cancellation work?",
        a: "Subscriptions run month-to-month. Cancel before the renewal date and the next month doesn't bill. No exit interview, no clawback on work already delivered.",
      },
      {
        q: "Can you build a brand identity from scratch?",
        a: "Small ones: wordmarks, simple systems, internal brands. A full identity programme with research, naming and guidelines needs a bigger studio. A recommendation is included.",
      },
      {
        q: "Rush work? Weekends?",
        a: "Possible. +50% on the hourly rate, with the deadline agreed in writing first.",
      },
      {
        q: "NDAs?",
        a: "Yours, or a simple mutual one. Either is fine.",
      },
      {
        q: "What happens to unused subscription hours?",
        a: "They expire at the end of the month. The subscription buys capacity, not a bank of credits. Consistent underuse means switching down.",
      },
      {
        q: "Who owns the files?",
        a: "The client. Final files and sources transfer on payment.",
      },
    ],
  },

  signoff: {
    label: "§ 09 — Sign-off",
    // Line 1, "Get" + emphasised phrase, line 3.
    title: ["Send the brief.", "Get", "an estimate", "before the day's out."],
    direct: "Direct",
    telegram: "Telegram",
    booking: "Booking",
    bookingText: "Taking briefs now. Estimates go out the same day.",
  },

  footer: {
    rights: "©",
    linkedin: "LinkedIn",
  },
};

export type Copy = typeof en;
