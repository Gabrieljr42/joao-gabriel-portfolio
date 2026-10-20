import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser=await chromium.launch();
const page=await browser.newPage({ reducedMotion:'reduce' });
const results=[];
try{
 for(const locale of ['en','pt-br']) for(const width of [701,768,900,1024,1100,1101,1250,1366,1440,1600,1712,1920]){
  await page.setViewportSize({width,height:900});
  await page.goto(`http://127.0.0.1:4477/${locale}/`);
  await page.evaluate(()=>document.fonts.ready);
  const spacing=await page.evaluate(()=>{
   const caption=document.querySelector('.signal-walkthrough').getBoundingClientRect();
   const controls=document.querySelector('.hero-bottom').getBoundingClientRect();
   return {captionBottom:caption.bottom,controlsTop:controls.top,gap:controls.top-caption.bottom};
  });
  assert(spacing.gap>=6,`${locale} at ${width}: caption overlaps the controls: ${JSON.stringify(spacing)}`);
  results.push({locale,width,...spacing,pass:true});
  if(width===1440) await page.screenshot({path:`.shots-i18n/${locale}-home-1440.png`});
 }
 await fs.writeFile('.shots-i18n/spacing.json',JSON.stringify(results,null,2));
 console.log(JSON.stringify({checks:results.length,status:'passed'}));
}finally{await browser.close();}
