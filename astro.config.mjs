import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_PROJECT_PRODUCTION_URL;
const configuredOrigin = process.env.SITE_URL || env.SITE_URL || (productionHost ? `https://${productionHost}` : undefined);

if (process.env.VERCEL && !configuredOrigin) {
  throw new Error('Set SITE_URL or enable Vercel system environment variables before deploying.');
}

export default defineConfig({
  site: configuredOrigin || 'http://localhost:4477',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: { inlineStylesheets: 'auto' },
});
