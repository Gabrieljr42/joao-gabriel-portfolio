// Production journeys supplement the awwwards capture with every real case study.
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import { chromium } from 'playwright';
const origin = `${new URL(process.argv[2] || 'http://127.0.0.1:4477').origin}/en`;
const out = process.env.QA_OUT || '.shots/interaction';
await fs.mkdir(out, { recursive: true });
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
const errors = [];
const results = [];
page.on('pageerror', e => errors.push(e.message));
const req = createRequire(import.meta.url);
const axe = await fs.readFile(req.resolve('axe-core/axe.min.js'), 'utf8');
const assert = (condition, description) => { if (!condition) throw new Error(description); };
const checkCurrentNav = async (name) => {
  const link = page.getByRole('link', { name, exact: true });
  await page.mouse.move(700, 700);
  await page.waitForTimeout(400);
  const before = await link.locator('.nav-dot').evaluate(node => getComputedStyle(node).translate);
  await link.screenshot({ path: `${out}/active-${name.toLowerCase()}-rest.png` });
  await link.hover();
  await page.waitForTimeout(400);
  const after = await link.locator('.nav-dot').evaluate(node => getComputedStyle(node).translate);
  await link.screenshot({ path: `${out}/active-${name.toLowerCase()}-hover.png` });
  assert(before !== after, `Active ${name} navigation lacks feedback`);
  results.push({ check: 'active navigation hover motion', name, before, after, pass: true });
  await page.mouse.move(700, 700);
};
const ready = async () => { await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(800); };
try {
  await page.goto(origin);
  await ready();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: `${out}/home-mobile.png` });
  for (const width of [390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    assert(!overflow, `Home overflows at ${width}px`);
    results.push({ check: 'home responsive', width, pass: true });
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const [name, slug] of [['Backend', 'observador'], ['Applied AI', 'pensieve'], ['Product', 'fitness']]) {
    await page.getByRole('button', { name, exact: true }).press('Enter');
    await page.waitForTimeout(1200);
    const target = await page.locator('[data-practice-project]').getAttribute('href');
    assert(target === `/en/work/${slug}/`, `${name} links to the wrong project`);
    const pressed = await page.getByRole('button', { name, exact: true }).getAttribute('aria-pressed');
    assert(pressed === 'true', `${name} selection was not announced`);
    await page.screenshot({ path: `${out}/home-${slug}.png` });
    await page.locator('[data-trace]').press('Enter');
    await page.waitForTimeout(2200);
    await page.screenshot({ path: `${out}/trace-${slug}-midway.png` });
    await page.waitForTimeout(2300);
    assert((await page.locator('[data-signal-node="2"]').getAttribute('data-active')) === 'true', `${name} trace did not reach output`);
    await page.screenshot({ path: `${out}/trace-${slug}-complete.png` });
    results.push({ check: 'keyboard practice selector and complete data trace', name, target, pass: true });
  }
  await page.locator('[data-practice-project]').click();
  await page.waitForURL('**/work/fitness/');
  assert((await page.title()).includes('Android Fitness Ecosystem'), 'Project route failed');
  await page.getByRole('link', { name: 'All work', exact: true }).click();
  await page.waitForURL('**/#work');
  await ready();
  const gallery = await page.locator('#work').boundingBox();
  assert(gallery && gallery.y > -50 && gallery.y < 300, 'Gallery return did not reach its anchor');
  results.push({ check: 'project navigation and gallery return', pass: true });
  const paths = ['pensieve', 'observador', 'fitness', 'gymia'];
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    for (const slug of paths) {
      const response = await page.goto(`${origin}/work/${slug}/`);
      assert(response.status() === 200, `${slug} failed to serve`);
      await ready();
      for (const link of await page.locator('.case-image-link').all()) {
        const asset = await context.request.get(new URL(await link.getAttribute('href'), origin).href);
        assert(asset.status() === 200 && asset.headers()['content-type']?.startsWith('image/'), `${slug} full-size image does not load`);
      }
      assert(await page.locator('h1').count() === 1, `${slug} has incorrect headings`);
      assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), `${slug} overflows at ${width}px`);
      await page.addScriptTag({ content: axe });
      const a11y = await page.evaluate(async () => (await axe.run(document)).violations.map(v => ({ id: v.id, impact: v.impact, count: v.nodes.length })));
      assert(!a11y.some(v => ['serious', 'critical'].includes(v.impact)), `${slug} accessibility: ${JSON.stringify(a11y)}`);
      // A fullPage capture alone does not trigger below-fold lazy images.
      for (const image of await page.locator('main img').all()) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate(img => img.decode());
      }
      // Expanded viewport forces Chromium to paint every decoded image tile.
      // Full-page capture after scrolling alone can omit off-screen image tiles.
      const captureHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      await page.setViewportSize({ width, height: captureHeight });
      await page.waitForTimeout(1000);
      await page.screenshot({ path: `${out}/${slug}-${width}.png` });
      await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
      results.push({ check: 'complete case study', slug, width, a11y, pass: true });
      if (slug === 'observador') {
        if (width === 1440) await checkCurrentNav('Work');
        await page.getByRole('button', { name: 'Sync FastAPI + SQLite' }).press('Enter');
        assert((await page.locator('[data-stage-copy]').innerText()).includes('outbox'), 'Sync explanation did not update');
        await page.waitForTimeout(800);
        await page.locator('[data-pipeline]').screenshot({ path: `${out}/pipeline-sync-${width}.png` });
        results.push({ check: 'pipeline stage keyboard activation', width, pass: true });
      }
    }
  }
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 900 });
    await page.goto(`${origin}/background/`);
    await ready();
    assert(!await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), `Background overflows at ${width}px`);
    assert((await page.getByRole('link', { name: 'About', exact: true }).getAttribute('aria-current')) === 'page', 'About route not indicated');
    assert(await page.getByText('In progress', { exact: true }).count() === 1, 'Postgraduate status is missing');
    if (width === 1440) await checkCurrentNav('About');
    const credentials = page.locator('.credential-list a');
    assert(await credentials.count() === 3, 'Missing LinkedIn credentials');
    for (const link of await credentials.all()) assert((await link.getAttribute('href')).startsWith('https://cursos.alura.com.br/certificate/'), 'Credential must link to issuer');
    await page.addScriptTag({ content: axe });
    const a11y = await page.evaluate(async () => (await axe.run(document)).violations.map(v => ({ id: v.id, impact: v.impact })));
    assert(a11y.length === 0, `Background accessibility: ${JSON.stringify(a11y)}`);
    await page.screenshot({ path: `${out}/background-${width}.png`, fullPage: true });
    await page.getByRole('link', { name: 'Education', exact: true }).press('Enter');
    await page.waitForTimeout(1000);
    const section = await page.locator('#education').boundingBox();
    assert(section.y > -5 && section.y < 160, 'Education anchor did not navigate');
    results.push({ check: 'background content, issuer links, keyboard anchor and accessibility', width, a11y, pass: true });
  }
  const reduced = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 390, height: 844 } });
  const reducedPage = await reduced.newPage();
  reducedPage.on('pageerror', e => errors.push(e.message));
  await reducedPage.goto(origin);
  await reducedPage.getByRole('button', { name: 'Applied AI', exact: true }).press('Enter');
  assert((await reducedPage.locator('[data-practice-project]').getAttribute('href')) === '/en/work/pensieve/', 'Reduced-motion selector failed');
  await reducedPage.locator('[data-trace]').press('Enter');
  assert((await reducedPage.locator('[data-trace-status]').innerText()) === 'Open the cited answer', 'Reduced trace did not show complete result');
  const response = await reducedPage.goto(`${origin}/not-found-verification`);
  assert(response.status() === 404, 'Missing routes must return HTTP 404');
  assert((await reducedPage.locator('h1').innerText()).includes('thread'), 'Designed 404 did not render');
  await reducedPage.getByRole('link', { name: 'Back to home', exact: true }).click();
  await reducedPage.waitForURL(u => u.pathname === '/en/');
  await reducedPage.goBack();
  await reducedPage.waitForURL('**/not-found-verification');
  await reducedPage.waitForFunction(() => document.querySelector('h1')?.textContent.includes('thread'), null, { timeout: 10000 });
  assert((await reducedPage.locator('h1').innerText()).includes('thread'), 'Back navigation did not restore the 404');
  await reducedPage.locator('header.header').waitFor({ state: 'visible' });
  await reducedPage.waitForTimeout(1200);
  await reducedPage.screenshot({ path: `${out}/404-history-back.png` });
  results.push({ check: '404 home navigation and browser Back restoration', pass: true });
  await reduced.close();
  results.push({ check: 'reduced-motion selector and real 404', pass: true });
  assert(errors.length === 0, `Runtime errors: ${errors.join('; ')}`);
  await fs.writeFile(`${out}/results.json`, JSON.stringify({ results, errors }, null, 2));
  console.log(JSON.stringify({ checks: results.length, errors, status: 'passed' }));
} finally { await browser.close(); }
