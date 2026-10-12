// Site-wide settings. Edit values here, not in components.
export const config = {
  name: "Link Design",
  // Hourly rate in euros. The only price on the site.
  rate: 45,
  // Placeholder contacts: replace before production.
  email: "hello@link.design",
  telegram: { handle: "@linkdesign", url: "https://t.me/linkdesign" },
  // Legal entity line shown in footer. Fill in when confirmed.
  legalEntity: "Link Design",
  location: "Tallinn, Estonia",

  // Switch parts of the page on or off. Nothing else needs to change.
  features: {
    // Scrolling strip of client wordmarks at the bottom of the story screen.
    logos: true,
    // Example links under each service on the "What Link makes" screen.
    examples: true,
  },

  // PLACEHOLDER wordmarks for the logo strip. Replace with real clients
  // (with written permission) or turn the strip off with features.logos.
  logos: ["Northwind", "Harbor & Co", "Lumen", "Fjord", "Atlas Foods", "Kivi", "Nordlane", "Polar"],
} as const;
