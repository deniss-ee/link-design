import type { APIRoute } from "astro";

// One page for now. Add /et/ and /ru/ here when they exist.
export const GET: APIRoute = ({ site }) => {
  const url = new URL("/", site).toString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${url}</loc></url></urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
