// Site-wide settings that are not page copy. Edit values here, not in components.
export const config = {
  name: "Link Design",
  // Hourly rate in euros. The only price on the site.
  rate: 45,
  // Placeholder contacts: replace before production.
  email: "hello@link.design",
  telegram: { handle: "@linkdesign", url: "https://t.me/linkdesign" },
  // Legal entity line shown in footer and privacy page. Fill in when confirmed.
  legalEntity: "Link Design",
  location: "Tallinn, Estonia",

  // Brief form. Delivery goes through Web3Forms, which emails each brief to you.
  // The access key is public by design and comes from the environment:
  //   PUBLIC_WEB3FORMS_KEY   (set in Cloudflare project settings, see README)
  // Without a key the form falls back to opening the visitor's mail app.
  form: {
    endpoint: "https://api.web3forms.com/submit",
  },
} as const;
