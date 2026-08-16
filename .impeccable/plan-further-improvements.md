# NAP landing page — further improvements plan

## Current state (recap)

- Direction: SSENSE Editorial, seed `b1654aa2`
- 6 sections shipped: hero, how-it-works, artists, pricing, FAQ, footer
- 5 generated rasters with provenance; Astro build passes; DESIGN.md + sidecar written
- Detector clean; finish-review fix batch landed (kickers removed, BOOKED fragment fixed, CTA baseline glow + SVG arrow, hero re-rendered to comp framing)

## Real friction points surfaced by reading the build

1. **CTA goes nowhere meaningful.** `href="#book"` lands on the footer id, so "See open slots" scrolls to a second identical "See open slots" button.
2. **No service filter.** Visitors know whether they want nails or lashes; the artist grid doesn't help them narrow.
3. **No city/area selector.** The mono micro-label says "Open now in your city" but nothing lets the visitor set city.
4. **Vetting criteria live in a FAQ answer.** The brief makes vetting the differentiator; it belongs in the buying flow.
5. **Static sections after first paint.** Only BOOKED fragment animates; everything else sits.
6. **No trust signals beyond copy.** No press, no roster count, no certification marks.
7. **Pricing shows "from" prices but no band or service toggle.**

## Proposed improvements — ranked

### Tier 1 — high leverage, low risk
These ship meaningfully better conversion AND fit the SSENSE world.

**A. Fix CTA destination + add sticky bottom-sheet on mobile.**
- Replace `#book` with a real booking route placeholder (`#book-now`); add a new `<section id="book-now">` placeholder explaining "Booking flow ships in the next milestone".
- Add a sticky bottom CTA bar on mobile only (`@media max-width: 900px`): "See open slots" + small "Open now in your city" mono, fixed bottom with safe-area padding. Slides in after scroll > 400px.
- File: `src/pages/index.astro` (add section, add bar markup), `src/styles/global.css` (sticky bar styles).

**B. Service filter chips above the artists strip.**
- Three chips: All / Nails / Lashes. Click filters the artist grid (data attributes on cards, small inline JS toggle).
- Chips: mono treatment, sharp 4px, hairline-bordered inactive, ink-filled active.
- File: `src/pages/index.astro` (chips + inline script), `src/styles/global.css`.

**C. Scroll-driven motion grammar.**
- IntersectionObserver: sections entering viewport animate hairlines drawing in (`scaleX(0)` → `scaleX(1)` from left), mono labels fade in with 80ms delay, headings stagger word-by-word using `span.word` wrappers.
- Respects `prefers-reduced-motion`. Same restraint as BOOKED fragment — one grammar, used everywhere.
- File: `src/scripts/reveal.mjs` (new), imported by `Layout.astro`.

**D. Accordion FAQ.**
- Native `<details>` + `<summary>`; one open at a time via small inline script. Zero-JS fallback works. Add chevron as inline SVG (not Unicode, per craft floor).
- File: `src/pages/index.astro` (convert FAQ list), `src/styles/global.css`.

### Tier 2 — medium leverage
**E. Sticky nav with backdrop blur on scroll.**
- After 80px scroll, add `.scrolled` class with `backdrop-filter: blur(12px)` + slight bone tint.
- File: `src/scripts/reveal.mjs` (reuse), `src/styles/global.css`.

**F. "How we vet" section between How it works and Artists.**
- 4 vetting criteria (portfolio, two certifications, three reference clients, six-month re-review) as a 4-up hairline grid with mono numerals. Pulls the differentiator out of the FAQ into the buying flow.
- File: `src/pages/index.astro` (new section), `src/styles/global.css`.

**G. Press / "as featured in" strip.**
- 4–5 publication wordmarks in a single hairline-bounded row above the footer. Wordmarks are SVG text in editorial serif (no logos — type-only). Clearly labeled: "Sample wordmarks — replace before launch."
- File: `src/pages/index.astro`, `src/styles/global.css`. Asset generation via muapi.

### Tier 3 — polish
**H. Pricing toggle (Nails / Lashes / Both).**
- Three buttons above the table; click filters rows by data-service attribute. Same restraint as the artist filter chips.

**I. Hero portrait parallax.**
- Portrait translates at 0.4× scroll speed within the hero. Disabled if reduced-motion. Subtle.

## Tradeoffs

- Sticky mobile CTA bar must respect `env(safe-area-inset-bottom)` on iOS.
- Inline `<script>` blocks keep Astro's static output; small + `defer`; acceptable.
- Service filter and pricing toggle need real client-side JS — vanilla, no framework.
- Press strip needs asset generation via muapi for wordmark rasters.

## What I will NOT do

- A second landing page, pricing page, about page (separate surfaces).
- Real booking integration (no backend).
- Real artist portfolios (placeholder stays; clearly labeled).
- Manifestos / journals / zines (separate surfaces).
- Email capture for launch (no brief).
- Cursor-aware tilt / WebGL (risky, no clear payoff).

## Effort

- Tier 1 (A–D): ~30–45 min, mostly markup + small CSS + one new tiny JS file.
- Tier 2 (E–G): ~20–30 min, one new section + one press asset pass.
- Tier 3 (H–I): ~15 min, both small.

## Recommended scope

Ship Tier 1 (A–D) only. Highest leverage, all stay inside the SSENSE world, fixes the real friction points. Tier 2 + 3 ship after Tier 1 is verified.