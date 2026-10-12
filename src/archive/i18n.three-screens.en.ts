// All UI copy lives here. Copy is TEMPORARY: edit freely.
// Estonian (et.ts) and Russian (ru.ts) must satisfy the same `Copy` type.
import { config } from "./config";

export const en = {
  lang: "en",
  meta: {
    title: "Link Design: fast design, reliable files. Banners, HTML5, email, print",
    description: `Fast design for banners, HTML5, social, email and print. ${config.rate} € per hour, estimate the same day, lost source files rebuilt. Tallinn.`,
  },

  ui: { skip: "Skip to content" },

  header: { cta: "Start a brief" },

  hero: {
    title: ["Design,", "on the", "hour."],
    sub: "Banners, HTML5, social, email and print, turned around fast. When the source files are gone, Link rebuilds them.",
    cta: "Start a brief",
  },

  work: {
    title: "What Link makes.",
    items: [
      {
        title: "Source-file rebuilds",
        text: "Lost the .ai? Send a PDF, JPG or screenshot. It comes back editable.",
      },
      {
        title: "Banners & HTML5",
        text: "Any sizes, adapted from one master.",
      },
      {
        title: "Social",
        text: "Posts, stories, carousels. On-brand, not brand-fenced.",
      },
      {
        title: "Email & landing pages",
        text: "Render-tested. Outlook works. Dark mode too.",
      },
      {
        title: "Print & brand adaptations",
        text: "Press-ready files. A brand book made to work on a Tuesday.",
      },
    ],
    howTitle: "How it goes.",
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
  },

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
    id: "contact",
    // Line 1, "Get" + emphasised phrase, line 3.
    title: ["Send the brief.", "Get", "an estimate", "before the day's out."],
    emailLabel: "Email",
    telegramLabel: "Telegram",
  },
};

export type Copy = typeof en;
