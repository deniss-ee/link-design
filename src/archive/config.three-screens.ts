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
} as const;
