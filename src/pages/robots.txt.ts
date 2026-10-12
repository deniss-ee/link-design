import type { APIRoute } from "astro";

// Staging disallows everything; production points to the sitemap.
export const GET: APIRoute = ({ site }) => {
  const isDev = import.meta.env.PUBLIC_SITE_ENV === "dev";
  const body = isDev
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", site)}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
