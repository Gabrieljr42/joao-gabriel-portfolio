# João Gabriel: Signal into substance

## Brief
Build an English portfolio for João Gabriel Alves Junior, GitHub Gabrieljr42. Audience: engineering teams and potential collaborators. Job: make backend, applied AI, and product engineering legible, then invite an email. Facts come from the public profile README and four project READMEs, read 19 October 2026. Professional development since 2021, based in Brazil. No employers, availability, user counts, or commercial outcomes are inferred.

Stack: Astro 7, TypeScript, plain CSS, GSAP and Lenis. Static HTML suits this content-led showcase and keeps the interaction budget small. Use Sites when publication is approved. The explicitly invoked awwwards skill requires confirmation before deployment, so this deliverable is a local production preview.

## Three territories
1. **Signal into substance, profession/material.** Independent threads become one useful system. Anchor: ingestion to evidence to usable interfaces across Observador and Pensieve. Signature: a woven toroidal signal routes between Backend, Applied AI, and Product, while a text label names the relevant project. Emotion: thoughtful, technically confident. Screenshot: ivory display type with a copper wire sculpture. Originality 4, fit 5, feasibility 5, portability 2.
2. **Proof attached, working process.** Every statement carries a trace back to source. Anchor: exact citation provenance and notice fingerprinting. Signature: selecting a claim opens an attached source ribbon. Emotion: trust. Screenshot: statement and its source joined across the grid. Originality 4, fit 5, feasibility 4, portability 3.
3. **One system, many surfaces, formal.** A single line continues across desktop, mobile and data representations. Anchor: Android cross-app contracts and offline synchronization. Signature: line expands into a product surface. Emotion: connectedness. Screenshot: three real product screens joined by a continuous thread. Originality 3, fit 4, feasibility 5, portability 3.

Pick 1: the signal makes João's end-to-end systems work visible without imitating a terminal or obscuring the projects. Borrow traceable repository citations from 2 as useful content, not a second effect.

## Concept card
Idea: independent threads become software that holds together.
Metaphor: woven copper signal cable.
Signature: one driver routes a wire sculpture and its project caption between three actual engineering practices; adapted generative-system recipe.
Emotion: quiet confidence and curiosity.
Motion verb: thread, gather, settle.
Screenshot: “Complex systems. Clear purpose.” beside a sculptural copper knot.

## System
Palette: ground graphite #151717; ink chalk #efefea; muted warm grey #a5aaa5; line #343837; accent copper #e6b297; curtain #242a28. Copper comes from physical wiring; warm mineral whites stop this becoming a terminal aesthetic.
Type: Switzer 400/500/600/700 from Fontshare, self-hosted WOFF2; JetBrains Mono 400 from Google for actual metadata. 2 preloads maximum. Display clamp 56–112 px, tracking -0.065em, line-height 1.02. Body 17px/1.55. UI 12–14px with AA contrast.
Grid: 12 columns, 56px desktop margins, 24px gutter, max-width 1600px. Mobile four columns, 22px margin, 16px gaps. Align all left edges to section gutters. Vary rhythm: hero 740px, work 100px top, about 150px top, contact 100px top.
Shape: 4px media radius; round only pills and circular directional controls. No drop shadows or glass.
Motion: shared expo/power3 ease family. 0.35s hovers, 0.6s intros, 0.45s transitions. One GSAP ticker drives Lenis and idle. No WebGL: code-native SVG threads are lighter and give an equally composed static fallback. Slow group transform is paused off-screen, off while tab hidden and under reduced motion. No loader: critical content is HTML and there is no real asynchronous task that merits a blocking screen.

## Composition
Hero, split poster:
```
JG name           role          Work About [Contact]
                    / sculpture /
Complex systems.    /           /
Clear purpose.      / sculpture /
Intro + [Selected work]         /
Brazil / Since 2021    [Backend] [Applied AI] [Product]
```
Work, staggered gallery:
```
Ideas, made real.                   introduction
[Pensieve: large image]       [Observador: image]
title, tags, case link        title, tags, case link
                             [Fitness: image]
[GymIA: image]                title, tags, case link
```
About, statement + factual index:
```
The whole problem.           statement paragraph
                            Backend / AI / Products
Open source                 four linked contribution rows
```
Contact, finale:
```
Have a problem
worth solving?                     [Let's talk ↗]
name + Brazil                GitHub LinkedIn Back to top
```
Case page, narrative:
```
← All work            project category
Large title + summary       tech + role
[full-width actual screenshot]
Context              paragraphs
Decisions            three precise choices
[detail screenshot] + caption
What shipped         honest status, source
Next project →
```
404: broken thread, large 404, “This thread leads nowhere.” and home action.

## Genericness check
Avoided a terminal, skill badge cloud, glowing gradient, invented dashboard or identical cards. Replaced generic developer art with three physically woven signals tied to the actual Backend/AI/Product relationship. Every case has a verifiable repository link and explicit technical trade-offs.

## Assumptions and provenance
English follows the request. Professional title and bio paraphrase the public profile. Four featured projects follow its selected work. No invented projects. No employment availability claim. No inferred city. Contact and LinkedIn come from the public README. Planned canonical https://gabrieljr42.github.io is a deployment placeholder, marked in site.ts and .env.example; set SITE_URL before publishing.
Actual project screenshots reused from the owner's local repositories. Fitness images are existing composites of the owner's real screens and captions, explicitly captioned as a screen overview rather than a new screenshot. No new screenshot-shaped UI is fabricated. Actual visual assets are kept apart from the sculpture, which is procedural art.

## QA
Production-only browser QA, two passes, fresh evidence-only critic per pass. Reports in .shots-pass1 and .shots. Remove weakest accessory after first review. Detailed results recorded in QA.md.

Final accessory removed: the three tiny axis labels around the signal sculpture. They repeated the actual practice controls and crowded its caption. Keep the caption and the functional controls.

Second-pass concept refinement: actual source→system→output paths label each case's anchor navigation. The hero selector maps the same driver to wire rotation, thread emphasis, actual pipeline text, and its project link. Observador replaces its repeated interface image with a quiet three-stage interactive explanation: Celery collection, SHA-256/PostgreSQL versioning, and FastAPI/SQLite sync. This diagram is semantic HTML with the existing palette, no isometric kit, one GSAP clock, reduced-motion still states, and genuine technical descriptions. The standalone anatomy skill is unavailable and was not installed. Other case pages remain intentionally still; hover, chapter links, next-project navigation, and source links carry their continuity.


## LinkedIn expansion, 20 October 2026
The owner supplied https://www.linkedin.com/in/joao-gabriel-alves-junior/. Its current About, education and credential sections supply the background page. Public professional information only is copied; self-view analytics and job-search controls are excluded. The homepage now links to the background page, with the current About navigation state indicated. The long page uses a split work history, a two-node educational timeline, and three credential rows with direct Alura issuer links. Current PUC-Rio study is explicitly in progress, expected October 2027; IFMG dates are March 2021 to December 2024. Job dates were not exposed, so the labels are Current and Previously, with the profile’s nearly-four-year ECOM-D duration. No invented diploma downloads.

Third-pass signature refinement: the hero now makes Input, System and Output readable around the woven signal. Selecting a discipline updates all three labels and the linked real project. A keyboard-accessible Trace action follows a notice, answer or day along the SVG path, giving each stage a technical explanation. This is an illustration of the architecture, not a live backend request. One GSAP clock drives the packet and sculpture. Reduced motion goes directly to the output while preserving the complete path. These labels replace the removed decorative axes with information that explains the work. Keep inner pages still by design. The weakest remaining accessory, the caption that repeated all three node labels, was removed.

Final verification: independent score 8.0 overall, each main category 8; developer areas at least 8, WPO 9. Active-page navigation now translates its dot on hover/focus, full-size image links support phone inspection, and the mobile pipeline title stacks beneath the source count. The final 25 journey checks pass with no runtime errors.

Deployment preparation: the owner selected GitHub and Vercel and authorized publication. The initial proposed GitHub Pages origin is superseded by the production host supplied by Vercel or an explicit SITE_URL. Configured-origin checks cover canonical, Open Graph, sitemap, and robots.


## Brazilian Portuguese and English

The owner requested Brazilian Portuguese by default for visitors in Brazil and English elsewhere, with an explicit switch. Preserve the visual language and genuine project imagery. Both locales are static routes with shared templates; Portuguese copy is authored in full, including metadata, alt text, accessibility labels, case-study decisions, and interactive traces. The persistent header control reads EN / PT-BR and has a deliberate two-row phone layout. Country and cookie redirects run as static Vercel CDN rules, avoiding extra runtime functions and geolocation services. Explicit locale URLs remain stable. Manual choices take priority over country and persist in a first-party cookie. Headlines and long Portuguese labels use tuned responsive measures.
