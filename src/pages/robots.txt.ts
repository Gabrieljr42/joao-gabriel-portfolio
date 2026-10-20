export function GET() {
  const site = (import.meta.env.SITE || 'http://localhost:4477').replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${site}/sitemap-index.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
