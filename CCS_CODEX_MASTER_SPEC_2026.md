# CCS CORPORATE WEBSITE — CODEX MASTER IMPLEMENTATION SPECIFICATION
Version: 1.0 | October 2026 | Project: Courthouse Computer Systems corporate website

> **INSTRUCTION TO CODEX:** This is an implementation brief, not an invitation to build a generic template. Build an exceptionally contemporary, art-directed, polished, production-minded website. The visual quality target is premium editorial/experimental digital agency work in 2026, while preserving the credibility, clarity, accessibility and security expected of a government-technology vendor. Do not fabricate content. Implement the actual website in the existing repository, not merely a mockup. Read the repository first and preserve useful existing assets and configurations.

## 0. Critical non-negotiables

1. **EXTREMELY MODERN — 2026 design quality is the highest creative priority.** Bespoke compositions, sophisticated typography, immersive but controlled motion, scroll storytelling, layered depth, spatial transitions, rich interactions, refined microinteractions, fast page loads, crisp responsive layouts. Do not deliver a conventional SaaS template, repetitive cards everywhere, stock illustrations, clichéd circuit-board/robot visuals, excessive glassmorphism, neon overload, generic gradients, or uniform sections.
2. CCS logo colors **#175883 (deep blue)** and **#3990CE (bright blue)** must be unmistakable recurring brand accents: navigation active states, key CTAs, focus rings, motion paths, interactive nodes, iconography, transitions, and highlights. The identity should remain visibly blue, not drift into purple, teal, or generic black-and-white. Additional neutrals allowed: #0C2032, #EAF5FC, #F5F8FA, #FFFFFF. Ensure contrast and accessibility; bright blue on white may need darkened text or a dark backing.
3. **Five distinct, fully realized landing pages:** Home, Digitization Services, Software Solutions, Custom AI & Automation, About CCS. Each has a distinctive signature interaction and shared brand system.
4. **Content language: English.** This implementation brief is in English; developer notes can be in English. All missing/unverified copy, images, facts, logos, statistics, client testimonials, endpoints and historical material must be explicitly flagged as placeholders in structured content; never fabricate evidence, client names, case studies, dates, capabilities, compliance badges, government endorsements, or AI accuracy numbers.
5. **Navigation:** global header with CCS logo left, Search and two *separate* right-hand buttons `Client Portal` (outlined) and `Employee Portal` (solid blue). No combined portal dropdown. A persistent right-edge vertical icon navigation for the five pages. A distinct floating Support Desk control at bottom-right. On each landing page, a sticky horizontal **local section navigation** directly below the global header, with page name left and anchors right. Make mobile equivalents thoughtful and non-obstructive.
6. Strong accessibility and speed: semantic HTML, keyboard access, visible focus, reduced-motion alternative, no scroll hijacking, no essential content hidden behind animation, responsive across 360px–ultrawide, proper image loading and graceful failure. Prefer CSS transforms/opacity, lazy-load noncritical effects, respect browser/device constraints.
7. Preserve the existing repository and user assets. Do not overwrite original logos or image files. Never substitute AI-generated-looking fake archival photos for purported historical evidence. Prefer genuine approved assets; use clearly marked visual placeholders until supplied.
8. Treat external portals as links to existing applications; do not invent or build fake login functionality. Treat demo/contact forms as functional only after secure backend/email provider integration is configured; implement validation, honeypot/rate-limit plan, success/error states, and clear TODO for secrets and deployment.

## 1. Product positioning and narrative

**Master brand proposition:** `A Legacy of Trust. A Future of Innovation.`
Alternative contextual lines: `Preserving the Past. Powering the Future.`; `Technology Changes. Trust Endures.`; `Rooted in History. Driven by Innovation.`

CCS provides digitization, records software, and tailored AI/automation for government agencies. The site must communicate government-sector reliability **and** a company that continually adopts and develops modern technology. Historical family heritage should support trust, while the story culminates in today's AI-powered government solutions.

Do not confuse three business pillars:
- **Digitization Services:** Historical Record Scanning, Case File Scanning, Historical Record Indexing, image-by-image enhancement, archival handling and QA.
- **Software Solutions:** Land Record Management, Secure Remote Access (SRA), Online Marriage Application, Probate Management (In Development). AI Indexing may be crosslinked to AI & Automation.
- **Custom AI & Automation:** bespoke tools tailored to a client's unique challenge; examples FindGenie, Courtney, Automated Redaction; capabilities OCR, intelligent extraction/indexing, pattern recognition, review/validation, search and workflow automation. Public product wording requires approval.

## 2. Existing stack and engineering approach

Repository is expected to be Next.js 15 / React 19 / TypeScript / Tailwind CSS / Framer Motion; inspect actual versions first and adapt rather than reinstalling blindly. Use Next.js App Router if repository already uses it. For Digitization continuous scroll-path, consider GSAP ScrollTrigger + MotionPathPlugin; add only when it materially improves fidelity and performance. Use native CSS / Framer Motion for microinteractions. No unnecessary heavyweight 3D libraries; use Three.js/WebGL only if clearly justified and gracefully degradable. Honor existing lint, scripts, assets, and conventions.

Suggested routes:
- `/` — Home
- `/digitization` — Digitization Services
- `/software` — Software Solutions
- `/ai-automation` — Custom AI & Automation
- `/about` — About CCS

Suggested structure (adjust to repo): `app/`, `components/layout/`, `components/motion/`, `components/sections/`, `components/forms/`, `content/`, `lib/`, `public/assets/`, `styles/`.

Centralize copy and placeholders in typed data objects, not scattered JSX. Example placeholder syntax `[HOME_HERO_DESCRIPTION]`, `[APPROVED_CLIENT_LOGOS]`. Add a `CONTENT_REQUIRED.md` listing each placeholder, source needed, approval status, and where it appears.

## 3. Art direction — 2026-quality, not a dated trend checklist

- **Editorial hierarchy:** oversized typographic headlines, purposeful negative space, tight typographic details, asymmetric but disciplined grids, responsive fluid type (`clamp`).
- **Narrative motion:** motion that explains the product or story; not animation for its own sake. Smooth page/section transitions, carefully choreographed reveal timing, hover/touch feedback.
- **Depth and materiality:** restrained parallax, layered archival paper and digital planes, subtle shadows, fine grain/noise when tasteful, selective blur, high-quality light and reflections; avoid legibility loss.
- **Bespoke graphic language:** CCS-blue signal paths, archive-to-data transformations, typographic data overlays, document edges, search highlights, animated system diagrams.
- **Contemporary interactions:** responsive cursor-aware depth on desktop where appropriate; magnetic CTAs only if usable; polished scroll progress and sticky chapter navigation; no excessive gimmicks.
- **Modern performance:** modern image formats, responsive `sizes`, preload critical hero assets, defer secondary animation, code-split heavier experiences, avoid layout shift, provide immediate visual hero fallback.
- **Motion tokens:** define shared easing, durations, reduced-motion fallbacks; default to smooth, restrained motion rather than springy cartoon behavior.
- **Color:** #175883 primary, #3990CE accent, #0C2032 dark, #EAF5FC light, #F5F8FA canvas, white; use blue prominently on every page and across all signature experiences. Historical About page may introduce warm archival paper tones but must transition visibly back to CCS blue.
- **Fonts:** high-quality sans-serif such as Manrope or Inter, with optional tasteful editorial serif reserved for historical quotes/headlines; load efficiently.
- **Trust:** no fake awards, fake counters, unsupported security certifications, invented testimonials or stock photos masquerading as employees/clients.

## 4. Shared global UI

### Global header
- Sticky, premium, compact; logo on left; search icon/action and two separate buttons on right.
- `Client Portal`: outlined light treatment. `Employee Portal`: solid CCS bright/deep blue.
- Link URLs from config: `[CLIENT_PORTAL_URL]`, `[EMPLOYEE_PORTAL_URL]`; until set, show clearly disabled/placeholder state rather than routing to nonexistent endpoints.
- Search: implement working local-site search if feasible, or an explicitly labeled nonfunctional placeholder; never present a broken search UI as working.

### Vertical global navigation
- Persistent right-edge icon rail linking all five pages, with accessible labels/tooltips, current route indication, active CCS-blue state. On mobile, replace with an ergonomic, non-overlapping compact alternative.

### Floating Support Desk
- Distinct lower-right control, accessible and non-overlapping with the navigation rail. `[SUPPORT_DESK_URL]`.

### Local sticky navigation
- Below global header on **each page**; left: page title; right: anchor links for page sections. Accurate scroll offset under both sticky bars, active section indicator, keyboard/touch support.

### Footer
- Navigation, government-facing contact CTA, company details and legal links; `[VERIFIED_CONTACT_INFO]`, `[CONTACT_EMAIL]`, `[SOCIAL_URLS]`.

## 5. PAGE ONE — HOME

**Intent:** extraordinary first impression; immediately communicate CCS's three pillars, government focus, trust, and contemporary innovation.

**Signature visual:** immersive premium hero with a sophisticated archive-to-digital visual transition. Consider animated document layers becoming indexed searchable data, but ensure fast first paint. Make the primary hero artwork purposeful, not an unrelated particle background.

**Local nav:** `Overview · What We Do · Why CCS · Trusted Partnerships · Contact`.

Sections:
1. **Hero**: `[HOME_HERO_HEADLINE]` (draft: `Preserving the Past. Powering the Future.`), `[HOME_HERO_DESCRIPTION]`, CTAs `Explore Our Solutions` / `Contact CCS`; animated branded composition, strong text legibility.
2. **Three Pillars**: three dramatically differentiated clickable entry experiences, not three bland equal cards. Digitization / Software / Custom AI & Automation. Animated previews that hint at each destination's signature interaction.
3. **Why CCS**: government domain expertise, continuity, modern engineering, responsible document workflows. Any numerical proof must be sourced: `[VERIFIED_METRICS]`.
4. **Trusted Partnerships**: `[APPROVED_CLIENT_LOGOS]`, `[VERIFIED_TESTIMONIALS]`, `[CASE_STUDIES]`. Without approved assets, display elegant clearly marked placeholders.
5. **Legacy Meets Innovation**: visual bridge to About page, ending in today's AI solutions.
6. **Contact CTA**: compelling invitation to discuss a challenge; route to contact form.

## 6. PAGE TWO — DIGITIZATION SERVICES

**Signature experience — NON-NEGOTIABLE:** one **persistent document object travels continuously along a winding spatial path in direct response to scrolling**, through multiple stations. NOT separate full-screen fade scenes; NOT teleporting between cards. Reversible on reverse scroll, precise interpolation and continuity. This is the primary concept approved for this page.

**Local nav:** `Overview · Historical Records · Case Files · Indexing · Our Process · Get a Quote`.

Narrative visual stations:
1. **Inspect** — original records, integrity and completeness check.
2. **Prepare** — careful physical document preparation.
3. **Scan** — scanning, physical-to-digital transformation.
4. **Review & Enhance** — quality assurance, image improvement.
5. **Index** — structured, searchable metadata.
6. **Deliver** — secure delivery / accessible digital records.

Important factual nuance: CCS's documented **case-file workflow** is `Inspect → Prepare → Scan (double scan) → Review → Upload`. The six-stop animation above is a **marketing synthesis**, not a claim that every CCS project uses the exact same process. Clearly distinguish service-specific workflows and preserve double-scan/QC where describing case files.

Implementation:
- Build a scroll-tied motion path (SVG path with responsive viewBox or equivalent); maintain the same DOM visual identity of the document across stages.
- Document rotates/zooms/changes visual state smoothly; background environment and subtle secondary layers reinforce movement and depth.
- Foreground/background occlusion correct; no clipping, sudden resizing, jumps, or overlapping UI.
- Desktop immersive; mobile simplified continuous path or stepwise accessible fallback; reduced motion reveals complete information without scroll dependency.
- Supporting content covers Historical Records Scanning, Case File Scanning, Indexing, enhancement and delivery; use `[SERVICE_DETAILS]`, `[ARCHIVAL_IMAGES]`, `[VERIFIED_QA_METRICS]`.
- CTA `Get a Quote` opens form with service context.

## 7. PAGE THREE — SOFTWARE SOLUTIONS

**Signature experience:** curated **product sectors/cards** with polished UI previews and tangible feature summaries; each has a direct demo CTA. 2x2 desktop layout is acceptable if art-directed and visually sophisticated; stacked/slider treatment on mobile. Do not make the cards feel like a commodity SaaS template.

**Local nav:** `Overview · Land Records · SRA · Marriage · Probate · Request Demo`.

Products:
1. **Land Record Management** — `[LAND_RECORDS_DESCRIPTION]`, `[LAND_RECORDS_FEATURES_3_TO_5]`, `[LAND_RECORDS_UI_IMAGE]`, `Request a Demo`.
2. **Secure Remote Access (SRA)** — `[SRA_DESCRIPTION]`, `[SRA_FEATURES_3_TO_5]`, `[SRA_UI_IMAGE]`, `Request a Demo`.
3. **Online Marriage Application** — `[MARRIAGE_DESCRIPTION]`, `[MARRIAGE_FEATURES_3_TO_5]`, `[MARRIAGE_UI_IMAGE]`, `Request a Demo`.
4. **Probate Management (In Development)** — `[PROBATE_DESCRIPTION]`, `[PROBATE_PLANNED_FEATURES]`, `[PROBATE_PREVIEW]`, CTA `Request Information` (do not falsely promise a working demo).

Card behavior: subtle depth lift, branded blue glow, microanimated genuine UI preview (or obvious placeholder), accessible click/tap behavior, clear CTA.

**Demo form**: product preselected, full name, organization/county, work email, optional phone, message; validated and securely submitted after endpoint configured. `[DEMO_FORM_ENDPOINT]` or secure email transport. Feedback for success/error/loading. No secrets in frontend.

AI Indexing is crosslinked to the AI & Automation page; avoid confusing it with a fully separate approved off-the-shelf product.

## 8. PAGE FOUR — CUSTOM AI & AUTOMATION

**Positioning — MOST IMPORTANT:** not simply a catalog of AI products. Lead with CCS's ability and willingness to design **purpose-built intelligent tools for specific government workflows and problems**.

**Hero draft:** `Your Challenge. Our Intelligence.`
**Supporting copy placeholder:** `[CUSTOM_AI_VALUE_PROPOSITION]`.
**Local nav:** `Overview · Our Approach · Applications · Capabilities · Let's Build`.

**Signature visual:** an interactive **Tailored Solutions Lab**. A central government workflow challenge connects to branded modules `OCR`, `AI Indexing`, `Search`, `Validation`, `Pattern Recognition`, `Workflow Automation`, `Data Extraction`. Selecting a real-world example dynamically reconfigures modules, animated connecting paths, and a contextual information panel. Make this elegant and legible, not a toy diagram.

Examples to feature, subject to public-content approval:
- **FindGenie** — OCR / full-text document search and discovery. `[FINDGENIE_APPROVED_COPY]`, `[FINDGENIE_SCREENSHOT]`.
- **Courtney** — AI-assisted extraction/indexing of historical records. `[COURTNEY_APPROVED_COPY]`, `[COURTNEY_SCREENSHOT]`.
- **Automated Redaction** — pattern-based detection/redaction of sensitive information and bulk processing, as documented in the CCS presentation. `[REDACTION_APPROVED_COPY]`.
- **Your Custom Solution** — visual prompt to discuss a unique workflow, not a fabricated existing product.

Story structure: customer challenge → understanding records/process → designing intelligent modules → human validation / responsible review → integration / delivery. Do not claim AI replaces human QA or guarantees perfect results.

CTA `Discuss Your Challenge` → tailored contact form with organization, problem description, document/workflow type, email, optional attachments only if a secure upload backend is actually implemented. Otherwise omit attachments.

## 9. PAGE FIVE — ABOUT CCS / LIVING LEGACY TIMELINE

**Emotional positioning:** a deeply human, archival, family-business history centered on **LEGACY and the trust government customers have placed in CCS over time**, not just a generic corporate history. The **climax must be modern technology and AI**: the company has consistently adapted to new eras and now delivers contemporary solutions for government.

**Hero:** `A Legacy of Trust. A Future of Innovation.`; alternate `Technology Changes. Trust Endures.`
**Local nav:** `Our Legacy · Timeline · Trusted Partnerships · Our People · Today & Tomorrow`.

**Signature visual:** a single **Living Legacy Timeline**, immersive documentary storytelling. Archival textures, authentic scanned materials, old photographs, newspaper clippings, letters, old technology, employee portraits, authentic client evidence; warm paper transitions into luminous CCS-blue digital systems and AI visualization as scrolling reaches today. Never use synthetic 'historic photos' as if genuine.

**Two parallel narratives:**
- `Our Heritage`: family bookbinding roots, microfilm, CCS founding, digital records, today's AI.
- `Their Trust`: verified county/government partnerships, archival contracts, public records, dated testimonials, documented long-term relationships. Link these tracks visually when evidence exists.

**Provisional historical milestones requiring source/approval before publication:**
- `1905`: E.H. Roederer Bookbindery family roots.
- `1970s`: microfilm and preservation technology.
- `1981`: Courthouse Computer Systems founded.
- `2000s onward`: expansion of government records software and digital services; exact milestones `[VERIFIED_MILESTONES]`.
- `Today & Beyond`: AI indexing, intelligent search, automated redaction, tailored solutions.

Historical details above originated from previously discussed CCS corporate history, not the attached presentation; do not assert dates/names publicly until verified against primary sources. The CCS presentation directly supports products/services and case-file process but does not substantiate all family milestones.

**Historic content asset registry**: `[AUTHENTIC_ARCHIVAL_PHOTOS]`, `[NEWSPAPER_CLIPPINGS]`, `[ORIGINAL_BOOKBINDERY_MATERIALS]`, `[VERIFIED_CLIENT_STORIES]`, `[EMPLOYEE_PORTRAITS]`, `[IMAGE_RIGHTS_AND_CREDITS]`. Render meaningful placeholders with editorial labels until originals are provided. Plan provenance/citation captions for historical assets and permissions review.

**Finale — highest-impact moment:** timeline's physical-paper material transforms into a modern data network and bright-blue AI visualization, with headline `Rooted in History. Driven by Innovation.` and subcopy `[TODAY_AI_AND_GOVERNMENT_COPY]`. The conclusion: a trusted company with heritage, continuously advancing technology for government customers.

## 10. Forms, content integrity and external systems

- Site-wide contact CTA: `[CONTACT_EMAIL]` / `[CONTACT_API_ENDPOINT]`.
- Quote form: service preselection, organization, contact info, project description.
- Demo form: software product preselection and request.
- AI challenge form: free-form problem statement and contact info.
- Protect server-side endpoints against spam and injection, validate with a schema, do not log sensitive content, do not leak SMTP keys. Include configuration instructions for environment variables.
- Do not claim forms send email if backend is unconfigured. Implement clear development-mode placeholder behavior and actionable deployment TODO.
- Portals/support links are external destinations; maintain a centralized URL config.
- Content placeholders should be human-friendly and obvious in development; before deployment, a content audit must fail/warn for remaining unresolved placeholders.

## 11. UX, SEO, accessibility and performance acceptance

- All pages and navigational anchors work on desktop and mobile.
- Motion is smooth and controllable; no motion-dependent inaccessible content; respect `prefers-reduced-motion`.
- Distinct signature interactions exist on Digitization, Software, AI & Automation, About; Home feels equally premium.
- Every page prominently expresses both brand blues (#175883 and #3990CE).
- Appropriate alt text, form labels, focus order, heading hierarchy, skip link, accessible tooltips, no keyboard traps; aim for WCAG 2.2 AA.
- Core Web Vitals oriented: optimize LCP, CLS, INP; don't ship multi-megabyte critical animations; prioritize first render and hero image preloading.
- SEO: unique title/description per route, OG metadata, sitemap, canonical handling, robots policy, structured data only when truthful.
- Respect browser back/forward, direct deep links, mobile safe areas, pointer/touch differences.
- Include loading/error/empty states and working CTAs. No fake links or inert buttons masquerading as features.
- All placeholder assets clearly identified; no unsupported statistics, customer endorsements or regulatory compliance claims.

## 12. Implementation sequence for Codex

1. **Audit** repository, identify existing assets/routes/components, package versions, broken behavior, and constraints. Do not destroy working code.
2. **Design foundation**: CSS tokens, typography, spacing, breakpoints, motion system, branded header, icon rail, local sticky nav, support control, footer.
3. **Build Home** with an impressive performant hero and three-pillar transitions.
4. **Build Digitization** persistent scroll-bound winding document path; validate continuity carefully.
5. **Build Software** art-directed product cards, feature data placeholders, demo interactions.
6. **Build Custom AI & Automation** interactive configurable solutions lab and examples.
7. **Build About** authentic-document-oriented living timeline and futuristic AI finale.
8. **Implement forms/config**, validation, SEO, accessibility, performance, responsive details.
9. **Test** lint/typecheck/build and browser behavior if tools available; document issues and remaining integrations.
10. **Deliver** clear changed-file summary, local run instructions, environment variables, `CONTENT_REQUIRED.md`, and remaining approvals.

### Definition of done
- All five pages implemented, not just described.
- Brand identity is instantly recognizable.
- Modern visual polish genuinely matches 2026 premium web experiences, with custom choreography rather than generic component assembly.
- No broken or deceptive functionality.
- All unknown factual material remains marked and traceable.
- Works at common mobile, tablet, desktop sizes, and with reduced motion.
- Existing project and valuable assets preserved.

## 13. Source-of-truth notes

The attached `Pres_CCS_08.pptx` presentation explicitly lists: software Land Record Management, SRA, AI Indexing, Online Marriage Application, Probate Management (in development); services Historical Records Scanning, Historical Records Indexing, Automated Redaction, Case File Scanning; image-by-image enhancement; and case-file workflow Inspect, Prepare, Scan (double scan), Review, Upload. It also mentions Boxy-based inventory/project tracking and secure digital delivery. FindGenie and Courtney are supported by separate internal materials, not this presentation. Historical legacy details must be verified independently before public use.

**Final direction to Codex:** Push visual execution well beyond an ordinary business website, but never sacrifice trustworthiness, usability, accessibility, or performance. Make each page feel bespoke. Use the actual CCS blues with confidence. Where a content asset is missing, create a beautifully composed **honest placeholder**, not invented history or a fake client case study.
