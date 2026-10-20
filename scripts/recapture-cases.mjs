import { chromium } from 'playwright';
import fs from 'node:fs/promises';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
const results=[];
try {
 for(const slug of ['pensieve','observador']) {
  await page.goto(`http://127.0.0.1:4477/work/${slug}/`);
  await page.evaluate(() => document.fonts.ready);
  await page.locator('.case-cover img').evaluate(image => image.decode());
  await page.waitForTimeout(1200);
  await page.screenshot({path:`.shots-final/interaction/${slug}-390-fold-settled.png`});
  const images=await page.locator('main img').evaluateAll(images=>images.map(img=>({src:img.currentSrc,complete:img.complete,width:img.naturalWidth,height:img.naturalHeight,opacity:getComputedStyle(img).opacity,visibility:getComputedStyle(img).visibility})));
  if(images.some(img=>!img.complete||img.width===0||img.opacity==='0'||img.visibility==='hidden')) throw new Error('Image failed to render');
  const height=await page.evaluate(()=>document.documentElement.scrollHeight);
  await page.setViewportSize({width:390,height});
  for(const image of await page.locator('main img').all()) await image.evaluate(img=>img.decode());
  await page.waitForTimeout(1500);
  await page.screenshot({path:`.shots-final/interaction/${slug}-390.png`});
  results.push({slug,images,height,capture:'Viewport expanded to document height to force all image tiles to paint; normal 390x844 first fold also captured.',pass:true});
  await page.setViewportSize({width:390,height:844});
 }
 await fs.writeFile('.shots-final/interaction/image-verification.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify(results));
} finally { await browser.close(); }
