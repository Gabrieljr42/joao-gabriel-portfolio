// Country routing, language persistence, and complete translated pages.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import { chromium } from 'playwright';
const origin = process.argv[2] || 'http://127.0.0.1:4477';
const out = '.shots-i18n';
await fs.mkdir(out, { recursive: true });
const config = JSON.parse(await fs.readFile('vercel.json', 'utf8'));
const results = [];
function redirect(path, country, preference) {
  for (const rule of config.routes.filter(route => route.status === 307)) {
    const match = path.match(new RegExp(rule.src));
    if (!match) continue;
    if (rule.has?.some(condition => (condition.type === 'cookie' ? preference : country) !== condition.value)) continue;
    return rule.headers.Location.replace('$1', match[1]);
  }
  return null;
}
for (const path of ['/', '/background/', '/work/pensieve/', '/missing/']) {
  assert.equal(redirect(path, 'BR'), `/pt-br${path}`);
  for (const country of ['US', 'PT', 'AO', 'AR', undefined]) assert.equal(redirect(path, country), `/en${path}`);
  assert.equal(redirect(path, 'BR', 'en'), `/en${path}`);
  assert.equal(redirect(path, 'US', 'pt-br'), `/pt-br${path}`);
  assert.equal(redirect(path, 'BR', 'invalid'), `/pt-br${path}`);
  results.push({ check: 'country default and explicit preference', path, pass: true });
}
for (const path of ['/en/', '/pt-br/', '/en/work/pensieve/', '/pt-br/background/', '/_astro/site.js', '/fonts/switzer.woff2', '/og.png', '/robots.txt', '/sitemap-index.xml']) {
  assert.equal(redirect(path, 'BR', 'pt-br'), null, `Must not redirect explicit locale or asset: ${path}`);
}
results.push({ check: 'no locale loops or asset redirects', pass: true });
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const req = createRequire(import.meta.url);
const axe = await fs.readFile(req.resolve('axe-core/axe.min.js'), 'utf8');
const ready = async () => { await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(300); };
try {
  for (const locale of ['en', 'pt-br']) {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
      for (const path of ['/', '/background/', '/work/pensieve/', '/work/observador/', '/work/fitness/', '/work/gymia/', '/404/']) {
        const response = await page.goto(`${origin}/${locale}${path}`);
        assert.equal(response.status(), 200);
        await ready();
        assert.equal(await page.locator('html').getAttribute('lang'), locale === 'pt-br' ? 'pt-BR' : 'en');
        assert.equal(await page.locator('h1').count(), 1);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${locale}${path} overflows at ${width}`);
        assert.equal(await page.locator(`.language-switcher [data-language="${locale}"]`).getAttribute('aria-current'), 'true');
        const links = await page.locator('main a[href^="/"]').evaluateAll(links => links.map(link => link.getAttribute('href')).filter(href => !href.startsWith('/_astro/')));
        assert(links.every(href => href.startsWith(`/${locale}/`)), `Cross-language internal link: ${links}`);
        assert((await page.locator('link[rel=canonical]').getAttribute('href')).endsWith(`/${locale}${path}`));
        assert.equal(await page.locator('link[rel=alternate][hreflang]').count(), 3);
        if (locale === 'pt-br') {
          const body = await page.locator('body').innerText();
          for (const leak of ['Selected work', 'Engineering decisions', 'What shipped', 'Back to top', 'In progress', 'View credential', 'Follow the project’s data flow.']) assert(!body.includes(leak), `Untranslated copy: ${leak}`);
        }
        await page.addScriptTag({ content: axe });
        const violations = await page.evaluate(async () => (await axe.run(document)).violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })));
        assert.deepEqual(violations, [], `${locale}${path} accessibility at ${width}: ${JSON.stringify(violations)}`);
        for (const image of await page.locator('main img').all()) await image.evaluate(img => img.decode());
        const file = `${locale}-${path === '/' ? 'home' : path.split('/').filter(Boolean).join('-')}-${width}`;
        await page.screenshot({ path: `${out}/${file}.png` });
        results.push({ check: 'complete localized page, links, metadata, accessibility, responsive layout', locale, path, width, pass: true });
      }
    }
  }
  await page.goto(`${origin}/pt-br/background/?ref=language-test#education`);
  await ready();
  await page.getByRole('link', { name: 'EN: English', exact: true }).press('Enter');
  await page.waitForURL('**/en/background/?ref=language-test#education');
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  assert.equal((await context.cookies()).find(c => c.name === 'portfolio-language')?.value, 'en');
  await page.goto(origin);
  await page.waitForURL('**/en/');
  await page.getByRole('link', { name: 'PT-BR: Português do Brasil', exact: true }).press('Enter');
  await page.waitForURL('**/pt-br/');
  assert.equal((await context.cookies()).find(c => c.name === 'portfolio-language')?.value, 'pt-br');
  await page.goto(origin);
  await page.waitForURL('**/pt-br/');
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('lang'), 'pt-BR');
  results.push({ check: 'keyboard language switching preserves page, query and anchor; choice persists across entry and reload', pass: true });
  for (const [name, output, slug] of [['Backend', 'Sincronizar com o app offline', 'observador'], ['IA aplicada', 'Abrir a resposta com suas fontes', 'pensieve'], ['Produto', 'Ler o resumo do dia', 'fitness']]) {
    await page.getByRole('button', { name, exact: true }).press('Enter');
    await page.locator('[data-trace]').press('Enter');
    assert.equal(await page.locator('[data-trace-status]').innerText(), output);
    assert.equal(await page.locator('[data-practice-project]').getAttribute('href'), `/pt-br/work/${slug}/`);
  }
  await page.goto(`${origin}/pt-br/work/observador/`);
  await ready();
  await page.getByRole('button', { name: 'Sincronizar FastAPI + SQLite' }).press('Enter');
  assert((await page.locator('[data-stage-copy]').innerText()).includes('fila local'));
  results.push({ check: 'Portuguese data traces, case links, and pipeline explanations after navigation', pass: true });
  const staticContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const staticPage = await staticContext.newPage();
  await staticPage.goto(`${origin}/pt-br/`);
  assert((await staticPage.locator('h1').innerText()).includes('Sistemas complexos.'));
  await staticPage.getByRole('link', { name: 'EN: English', exact: true }).click();
  await staticPage.waitForURL('**/en/');
  assert((await staticPage.locator('h1').innerText()).includes('Complex systems.'));
  results.push({ check: 'both languages and language links work without JavaScript', pass: true });
  await staticContext.close();
  const sitemap = await context.request.get(`${origin}/sitemap-0.xml`);
  const xml = await sitemap.text();
  assert(xml.includes('/en/background/')); assert(xml.includes('/pt-br/background/')); assert(!xml.includes('/404/'));
  assert.deepEqual(errors, []);
  await fs.writeFile(`${out}/results.json`, JSON.stringify({ results, errors }, null, 2));
  console.log(JSON.stringify({ checks: results.length, errors, status: 'passed' }));
} finally { await browser.close(); }
