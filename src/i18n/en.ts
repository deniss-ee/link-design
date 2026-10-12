// ============================================================================
// PAGE CONTENT (English). This is the one file to edit for text and structure.
//
// Page order = order of the `blocks` list below. To change the page:
//   - Reorder: move a whole { type: "...", ... } block up or down.
//   - Hide:    add   enabled: false,   inside a block (nothing is deleted).
//   - Edit:    change the text between the quotes. Keep the quotes and commas.
//   - Add:     copy an item in a list ({ title, text } or { title, url }) and edit it.
//
// A typo in the structure fails `yarn build` with a clear message, so the live
// site is never broken by an edit. Estonian and Russian later: copy this file
// to et.ts / ru.ts and translate the text only.
// ============================================================================
import { config } from "../data/config";
import type { Page } from "../lib/types";

export const en: Page = {
  lang: "en",

  meta: {
    title: "Link Design: fast design, reliable files. Banners, HTML5, email, print",
    description: `Fast design for banners, HTML5, social, email and print. ${config.rate} € per hour, estimate the same day, lost source files rebuilt. Tallinn.`,
  },

  ui: { skip: "Skip to content", exampleSuffix: "↗" },

  header: { privacy: "Privacy", privacyHref: "/privacy" },

  blocks: [
    // ------------------------------------------------------------------ 1
    {
      type: "hero",
      id: "top",
      title: ["Design,", "on the", "hour."],
      sub: "Banners, HTML5, social, email and print, turned around fast. When the source files are gone, Link rebuilds them.",
      cta: "Start a brief",
      ctaHref: "#contact",
    },

    // ------------------------------------------------------------------ 2
    {
      type: "story",
      id: "story",
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
      // Scrolling client strip. Set enabled: false to hide it.
      // PLACEHOLDER names: replace with real clients (with written permission).
      logos: {
        enabled: true,
        label: "Teams that sent a brief",
        names: ["Northwind", "Harbor & Co", "Lumen", "Fjord", "Atlas Foods", "Kivi", "Nordlane", "Polar"],
      },
    },

    // ------------------------------------------------------------------ 3
    {
      type: "makes",
      id: "work",
      title: "What Link makes.",
      // Set to false to hide all example links at once.
      showExamples: true,
      items: [
        {
          title: "Source-file rebuilds",
          text: "Lost the .ai? Send a PDF, JPG or screenshot. It comes back editable.",
          // PLACEHOLDER links: point each to a real case, Behance, Figma or live page.
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
      ],
    },

    // ------------------------------------------------------------------ 4
    {
      type: "contact",
      id: "contact",
      price: {
        title: "Price.",
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
      // Line 1, "Get" + emphasised phrase, line 3.
      headline: ["Send the brief.", "Get", "an estimate", "before the day's out."],
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        deadlineLabel: "Deadline",
        deadlinePlaceholder: "Friday, 12:00",
        briefLabel: "What do you need?",
        briefPlaceholder: "Sizes, formats, links to files. Half a sentence is fine.",
        optional: "optional",
        submit: "Send the brief",
        sending: "Sending…",
        successTitle: "Brief received.",
        successText: "An estimate comes back the same day.",
        errorText: "That did not go through. Email it directly instead:",
        emailSubject: "New brief from the website",
        privacyNote: "Your details are used only to reply to this brief.",
        privacyLink: "Privacy",
        direct: "Or write directly",
      },
    },
  ],

  // /privacy page. Plain-language draft: have it checked against your real setup.
  privacy: {
    title: "Privacy",
    back: "Back to Link Design",
    updated: "Last updated: October 2026",
    sections: [
      {
        heading: "Who is responsible",
        text: `${config.legalEntity}, ${config.location}. Contact: ${config.email}.`,
      },
      {
        heading: "What is collected",
        text: "The name, email address, deadline and brief text you type into the form. Nothing else is collected through the form.",
      },
      {
        heading: "Why",
        text: "To reply to your brief and send an estimate. Your details are not used for newsletters or marketing.",
      },
      {
        heading: "Who receives it",
        text: "The form is delivered by Web3Forms, which forwards each submission to the Link Design email inbox. Email is handled by the mail provider used for that inbox.",
      },
      {
        heading: "How long it is kept",
        text: "As long as needed to handle the request, and for bookkeeping if work follows. You can ask for deletion at any time.",
      },
      {
        heading: "Cookies and analytics",
        text: "The site sets no cookies. If visit statistics are enabled, they are cookieless and contain no personal profiles.",
      },
      {
        heading: "Your rights",
        text: `You can ask for access, correction or deletion of your data by writing to ${config.email}. You can also complain to the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon).`,
      },
    ],
  },

  notFound: {
    title: "Page not found.",
    text: "That page does not exist. The brief form lives on the home page.",
    link: "Back to Link Design",
  },
};
