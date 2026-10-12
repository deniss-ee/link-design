// All UI copy lives here. Copy is TEMPORARY: edit freely.
// Estonian (et.ts) and Russian (ru.ts) must satisfy the same `Copy` type.
import { config } from "../data/config";

export interface Example {
  title: string;
  // PLACEHOLDER links. Point each to a real case, Behance, Figma or live page.
  url: string;
}

export const en = {
  lang: "en",
  meta: {
    title: "Link Design: fast design, reliable files. Banners, HTML5, email, print",
    description: `Fast design for banners, HTML5, social, email and print. ${config.rate} € per hour, estimate the same day, lost source files rebuilt. Tallinn.`,
  },

  ui: { skip: "Skip to content", exampleSuffix: "↗" },

  header: { cta: "Start a brief" },

  hero: {
    title: ["Design,", "on the", "hour."],
    sub: "Banners, HTML5, social, email and print, turned around fast. When the source files are gone, Link rebuilds them.",
    cta: "Start a brief",
  },

  // Screen 2: empathy first, then how it goes.
  story: {
    title: "Every team has been here.",
    situations: [
      "The campaign goes live Friday.",
      "Your designer is on holiday.",
      "The agency quoted ten days.",
      "The source files are on a laptop nobody can find.",
    ],
    resolve: "It happens. Link makes it fast.",
    howTitle: "Here is how it goes.",
    steps: [
      {
        title: "Send the brief",
        text: "Email, Telegram, voice memo, half a sentence. Whatever you have.",
      },
      {
        title: "Get an estimate",
        text: "Hours and a delivery window, the same day. No proposals, no decks.",
      },
      {
        title: "Receive the files",
        text: "One round of revisions. Sources included, named clearly.",
      },
    ],
    logosLabel: "Teams that sent a brief",
  },

  // Screen 3: services, each with example links.
  makes: {
    title: "What Link makes.",
    items: [
      {
        title: "Source-file rebuilds",
        text: "Lost the .ai? Send a PDF, JPG or screenshot. It comes back editable.",
        examples: [
          { title: "Brand book from a 2009 PDF", url: "#work" },
          { title: "Banner set from a JPG", url: "#work" },
        ],
      },
      {
        title: "Banners & HTML5",
        text: "Any sizes, adapted from one master.",
        examples: [
          { title: "Spring campaign, 32 sizes", url: "#work" },
          { title: "Animated launch set", url: "#work" },
        ],
      },
      {
        title: "Social",
        text: "Posts, stories, carousels. On-brand, not brand-fenced.",
        examples: [
          { title: "Race-week social system", url: "#work" },
          { title: "Story templates", url: "#work" },
        ],
      },
      {
        title: "Email & landing pages",
        text: "Render-tested. Outlook works. Dark mode too.",
        examples: [
          { title: "Onboarding email series", url: "#work" },
          { title: "Launch landing page", url: "#work" },
        ],
      },
      {
        title: "Print & brand adaptations",
        text: "Press-ready files. A brand book made to work on a Tuesday.",
        examples: [
          { title: "Event signage pack", url: "#work" },
          { title: "Deck and templates", url: "#work" },
        ],
      },
    ] satisfies { title: string; text: string; examples: Example[] }[],
  },

  // Screen 4: price and contact.
  price: {
    title: "Price.",
    amount: String(config.rate),
    unit: "€ per hour",
    lead: "Hours are estimated up front and billed as worked. No packages, no retainers.",
    terms: [
      "Minimum one hour per task.",
      "One revision round included.",
      "Source files always included.",
      "Rush or weekend work: +50%.",
      "Invoiced after delivery. VAT added where applicable.",
    ],
  },

  contact: {
    // Line 1, "Get" + emphasised phrase, line 3.
    title: ["Send the brief.", "Get", "an estimate", "before the day's out."],
  },
};

export type Copy = typeof en;
