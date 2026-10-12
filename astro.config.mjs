// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// SITE_URL is set per Cloudflare project (prod: https://link.design, dev: https://dev.link.design).
const site = process.env.SITE_URL ?? "https://link.design";

export default defineConfig({
  site,
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
