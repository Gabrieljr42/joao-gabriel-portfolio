# Production verification

Verified on 20 October 2026 against the static production build at `http://127.0.0.1:4477/`. Browser measurements are synthetic Chromium results, not field performance data.

## Build and content

- `npm run check`: 24 files, zero errors, warnings, or hints.
- `npm run build`: all seven pages generated, responsive WebP images, sitemap and robots included.
- Final metadata audit: six content pages crawled, zero FAIL and zero WARN. Heaviest initial page approximately 446 KB; JavaScript 59 KB gzipped, CSS 8 KB gzipped.
- Public profile and project provenance is recorded in `CONTENT_SOURCES.md`. The proposed canonical origin is the only explicit deployment placeholder.
- Education and credentials are professional profile listings. PUC-Rio is in progress, not an awarded diploma. No employment dates, document downloads, metrics, or clients were invented.

## Browser passes

Three full production capture passes were completed. The first fixed sculpture/type collisions, small labels, accessible names, and external link relations. The second verified the revised project pages and Observador explainer. The third added the LinkedIn background page and a readable, interactive input/system/output path in the hero.

Final capture: `.shots-final/summary.json`, per-page `report.json`, screenshots and `audit.txt`.

- Home: throttled mobile LCP 700 ms, CLS 0, desktop/mobile scrolling 60 fps.
- Background: throttled mobile LCP 664 ms, CLS 0, desktop/mobile scrolling 60 fps.
- Observador case: throttled mobile LCP 784 ms, CLS 0, desktop/mobile scrolling 60 fps.
- Designed 404: throttled mobile LCP 660 ms, CLS 0, desktop/mobile scrolling 60/61 fps.
- All page types: no horizontal overflow, undersized targets, axe violations, hidden reduced-motion text, moving reduced-motion content, invisible focus, or missing focus feedback. Skip link is first. Hover pairs and transition frames were read visually.
- Home idle motion is intentional. Its `settledMs: null` records the continuous subtle sculpture motion, not a blocking loader. The actual heading intro is 700 ms. Inner pages and 404 are intentionally still, documented in `DESIGN.md`.
- The 404 summary includes one failed HTTP response because the deliberately missing route returns HTTP 404. Its runtime error list is empty; this is expected behavior.
- The full third-pass report found a missing hover change on the active Work navigation item. This was corrected with a translating current-page dot. Focused rest/hover captures and assertions for both Work and About are in `.shots-final/interaction/`; the original report is retained as the historical finding.
- The mobile Observador figure now stacks its title beneath its source count. Case images offer working full-size links for close inspection on phones.

## Additional journeys

`scripts/check-interactions.mjs` supplements the capture with every real case study at 390 and 1440 pixels, home layouts at 390/768/1024/1440/1920 pixels, all three keyboard selectors and complete data traces, active navigation feedback, pipeline stages, background education anchors and issuer URLs, real 404 status and browser Back restoration. It asserts full-size image URLs return images. Reduced-motion trace goes directly to the output. Results and evidence are in `.shots-final/interaction/`: 25 checks passed with zero runtime errors. A Chromium full-page capture artifact omitted two decoded mobile hero images after scrolling. `scripts/recapture-cases.mjs` rechecked the image URLs, decoded/visible states, normal phone first folds, and complete expanded-viewport captures. The corrected screenshots and `image-verification.json` confirm the images render; no site change was needed.

## Independent criticism

Fresh evidence-only critics reviewed each full pass. Pass 1: 7.1 overall; pass 2: 7.93 overall. Their findings led to the composition, typography, interaction, and architecture-path improvements above. The final fresh evidence-only critic scored Design 8, Usability 8, Creativity 8, Content 8, weighted overall 8.0/10. Developer scores: semantics/SEO 8, animation/transitions 8, accessibility 8, WPO 9, responsive 8, markup/meta-data 8. The corrected navigation and mobile figure were reviewed; no blocking defect remained. This is an independent rubric estimate, not an official Awwwards award or submission.

The strongest future improvements are a concrete sample record in the hero trace, a larger mobile Fitness detail crop, and verified measured outcomes where the project evidence supports them. Those refinements need additional content; no fabricated records or impact numbers were added.


## GitHub and Vercel preparation

The owner authorized GitHub repository creation and Vercel deployment. The README now documents the repository, stack, source editing, verification, and Vercel configuration. `vercel.json` specifies static Astro output. A simulated Vercel production build passed with a controlled `.example` test origin; assertions confirmed canonical, OG URL/image, sitemap, and robots all use that origin instead of the earlier proposed GitHub Pages URL. A regular local production build was restored afterward. The updated Astro check reports 25 files, zero errors/warnings/hints. Vercel refuses a production build without an explicit or platform-provided origin.
