// Site-wide settings. Edit values here, not in components.
export const config = {
  name: "Link Design",
  // Placeholder contacts: replace before production.
  email: "hello@link.design",
  telegram: { handle: "@linkdesign", url: "https://t.me/linkdesign" },
  linkedin: "https://www.linkedin.com/",
  // Legal entity line shown in footer. Fill in when confirmed.
  legalEntity: "Link Design",
  location: "Tallinn, Estonia",
  // Hero/sign-off availability. Keep wording undated so it cannot go stale.
  availability: { open: true },
  // Hide the work index until real entries exist.
  showWork: true,
  // Tallinn, for the masthead clock.
  timeZone: "Europe/Tallinn",
  coordinates: "59.4°N",
} as const;
