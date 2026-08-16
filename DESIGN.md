---
name: NAP
description: NAP — nail & lash booking, designed as a fashion editorial.
colors:
  ink: "#0A0A0A"
  bone: "#F5F1EA"
  signal: "#E8334E"
  blush: "#F2D8D8"
  bone-2: "#ECE6DB"
  hairline: "rgba(10, 10, 10, 0.12)"
  hairline-bone: "rgba(245, 241, 234, 0.18)"
  ink-70: "rgba(10, 10, 10, 0.70)"
  ink-50: "rgba(10, 10, 10, 0.50)"
  bone-78: "rgba(245, 241, 234, 0.78)"
  bone-72: "rgba(245, 241, 234, 0.72)"
  bone-70: "rgba(245, 241, 234, 0.70)"
  bone-55: "rgba(245, 241, 234, 0.55)"
  ink-caption: "rgba(10, 10, 10, 0.45)"
typography:
  display:
    fontFamily: "General Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontWeight: 700
    fontSize: "clamp(56px, 11vw, 156px)"
    lineHeight: 0.92
    letterSpacing: "-0.04em"
    textTransform: "uppercase"
  headline:
    fontFamily: "General Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontWeight: 700
    fontSize: "clamp(40px, 6vw, 80px)"
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "General Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontWeight: 700
    fontSize: "clamp(22px, 2.4vw, 28px)"
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "General Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontWeight: 400
    fontSize: "16px"
    lineHeight: 1.5
  body-lg:
    fontFamily: "General Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontWeight: 400
    fontSize: "19px"
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontWeight: 500
    fontSize: "11px"
    lineHeight: 1
    letterSpacing: "0.18em"
    textTransform: "uppercase"
  italic-accent:
    fontFamily: "Spectral, Georgia, Times New Roman, serif"
    fontStyle: "italic"
    fontWeight: 400
    fontSize: "clamp(22px, 3vw, 36px)"
    lineHeight: 1.1
    letterSpacing: "-0.01em"
rounded:
  default: "4px"
  none: "0px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "24px"
  6: "32px"
  7: "48px"
  8: "64px"
  9: "96px"
  10: "128px"
components:
  cta-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.bone}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.default}"
    padding: "0 24px"
    height: "56px"
  cta-primary-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.bone}"
    rounded: "{rounded.default}"
  hairline:
    backgroundColor: "{colors.hairline}"
    height: "1px"
  hairline-on-bone:
    backgroundColor: "{colors.hairline-bone}"
    height: "1px"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    typography: "{typography.mono}"
    padding: "12px 16px"
    rounded: "{rounded.none}"
  mono-label:
    typography: "{typography.mono}"
    textColor: "{colors.ink-70}"
  artist-card-image:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.default}"
    size: "aspect-ratio 4 / 5"
  price-cell-strong:
    typography: "{typography.body-lg}"
    textColor: "{colors.ink}"
---

# Design System: NAP

## Overview

**Creative North Star: "Editorial Beauty — the Booking Is the Cover."**

NAP is a beauty booking surface designed like a fashion editorial. The appointment is the look; each booking reads as a cover story, not a service menu. The system rejects the soft-pink beauty default in favor of a near-black studio backdrop, bone-white paper, and one flat unmissable block of signal red. Display type is monumental and behaves like matter — the hero word *BOOKED* fragments the bottom of its own letters as it settles into place. Everything else holds deliberate negative space; sections are paced like magazine spreads rather than product pages.

Personality: warm, confident, lightly playful — never cutesy, never clinical. Density: low. Ornament: zero. The signal red, the hairline, and the monumental type do all the talking; nothing else competes.

**Key Characteristics:**
- Two-tone canvas (bone paper + ink studio) with one flat signal accent
- Sharp corners everywhere (4px); hairlines (1px) carry all division
- Mono micro-labels set at 11px with 0.18em tracking act as the system's "stage directions"
- Spectral italic is reserved for the editorial whisper line ("with your artist", "Booked with your artist.")
- Display type is monumental (up to 156px), tight (-0.04em tracking), and animated like physical matter
- Glow appears exactly once: a soft red bloom under the primary CTA

## Colors

The palette is four working colors and a token pair of hairlines. Every other color in the build is a transparency of these.

### Primary
- **Signal Red** (`#E8334E`): the single saturated accent. Held flat as a block on the primary CTA; reused in micro form (artist-link hover, step numerals). Never used as a tint or wash. Its rarity is the point.

### Secondary
- _Omitted by design._ The system has one accent; do not invent a second.

### Tertiary
- _Omitted by design._

### Neutral
- **Ink** (`#0A0A0A`): near-black backdrop and primary type color. Owns the how-it-works section, the footer, and the figure wells behind imagery.
- **Bone** (`#F5F1EA`): the page surface. Default background. A warm off-white, never pure white.
- **Bone-2** (`#ECE6DB`): pricing surface — a step darker than Bone so the section reads as a sheet inserted between bone sections.
- **Blush** (`#F2D8D8`): declared token, held in reserve. Treat as a tertiary warmth only; do not introduce as background without an explicit reason.
- **Hairline / Hairline-Bone** (`rgba(10,10,10,0.12)` / `rgba(245,241,234,0.18)`): the only divider in the system. Hairline reads on bone; Hairline-Bone reads on ink.
- **Ink-70 / Ink-50** (`rgba(10,10,10,0.70)` / `rgba(10,10,10,0.50)`): secondary and tertiary type on bone. Use 70 for lede and body strong; 50 for mono micro-metadata.
- **Bone-{78,72,70,55}**: the inversions on ink surfaces (how-it-works body, footer captions). Same tracking as the ink variants, mirror image.

### Named Rules
**The One Voice Rule.** Signal Red is used on roughly one element per fold. Hover tints do not exist; saturation is held at one register so the CTA always reads first.

**The Two-Canvas Rule.** The page alternates between Bone and Ink. Bone carries commercial intent (hero, artists, FAQ); Ink carries system intent (how-it-works, footer). Never split a single section across both.

## Typography

**Display Font:** General Sans (700) with system-ui / -apple-system fallback
**Body Font:** General Sans (400 / 700) — the same family as display; only weight and size separate roles
**Label / Mono Font:** JetBrains Mono (500)
**Italic Accent:** Spectral (400 italic)

**Character:** A geometric grotesque display set tight and big, paired with a quiet monospace for stage directions and a single italic serif for the human whisper. The pairing is loud, exact, and editorial — type behaves like architectural matter, not like running text.

### Hierarchy
- **Display** (700, `clamp(56px, 11vw, 156px)`, 0.92, -0.04em, uppercase): the hero word *BOOKED* and nothing else.
- **Display Hero** (700, `--t-display-hero` = `clamp(48px, 9.5vw, 124px)`, 0.95, -0.04em, uppercase): the hero three-word service fragment `NAILS · LASHES · NAP`. Sized smaller than Display so all three words + separators fit on the hero viewport; not reused outside the hero.
- **Headline** (700, `clamp(40px, 6vw, 80px)`, 1.02, -0.035em): section titles. Two short lines max.
- **Title** (700, `clamp(22px, 2.4vw, 28px)`, 1.15, -0.02em): step and FAQ question titles, artist names.
- **Body** (400, 16px, 1.5): running prose. Max line length ~56ch.
- **Body-Large** (400, 19px, 1.5, -0.01em): lede paragraphs and pricing totals.
- **Mono** (500, 11px, 1, 0.18em, uppercase): micro-labels, table headers, captions, nav, skip link, step numerals.
- **Italic Accent** (Spectral italic 400, `clamp(22px, 3vw, 36px)`, 1.1, -0.01em): the whisper line — "with one tap", "Booked with one tap." Reserved for these two phrases plus equivalent editorial subtitles.
- **Footer Mark** (700, 48px, -0.04em): the NAP wordmark in the footer only. Sized larger than Title to anchor the dark ground; not reused as a heading.
- **Stats Value** (General Sans 700, `--t-stats-value` = `clamp(28px, 4vw, 44px)`, 1, -0.03em): the numeric values in the stats row (years, clients, location, hours). Larger than Title to land as deliberate ornaments; not reused outside the stats row.

### Named Rules
**The Whisper Rule.** Spectral italic is reserved for the editorial subtitle that follows a Display or Headline. It is never used for body, navigation, or supporting copy. Its scarcity is what gives it warmth.

**The Tight-By-Default Rule.** Display and Headline track tight (-0.04em / -0.035em). Mono tracks open (+0.18em). The two regimes never bleed into each other; one is sculpture, the other is measurement.

## Layout

A single-column mobile layout that becomes two- and three-column on desktop. The container holds to 1440px max width and 24px (mobile) / 48px (desktop) horizontal gutter. Sections are tall on purpose — `--space-9` (96px) on mobile, `--space-10` (128px) on desktop — so each fold carries deliberate negative space.

The hero is the only full-bleed exception: it uses `100svh` and a side-by-side grid (`5fr 7fr` text : image) above 900px. Below 900px, the hero stacks: text block on top (5/12 of the viewport by content), portrait anchored below. The how-it-works steps collapse to one column on mobile and split to four equal columns (separated by Hairline-Bone vertical rules) at 768px+. The artist grid is one-up on mobile, three-up at 768px. The FAQ list is one column on mobile and `1fr / 2fr` (question / answer) at 768px. The footer is one column on mobile and a `2fr 1fr 2fr` (brand / nav / CTA) grid at 768px.

A single `--space-8` (64px) maximum line length applies to all section heads via `max-width: 760px`. Lede copy maxes at 56ch.

Spacing rhythm runs `--space-1` (4px) → `--space-10` (128px) in double steps. Internal gaps within a block use 8/12/16/24; gaps between blocks use 48/64/96/128.

## Elevation & Depth

This system is flat by design. Surfaces carry no drop shadows except for the primary CTA, whose single soft bloom is treated as a signature, not as structural elevation.

### Shadow Vocabulary
- **CTA Bloom** (`box-shadow: 0 0 24px -2px rgba(232, 51, 78, 0.35)`): the resting glow under the signal-red CTA. The only ambient shadow in the system.
- **CTA Hover Bloom** (`box-shadow: 0 16px 36px -10px rgba(232, 51, 78, 0.65)`): paired with a 2px lift on hover/focus. This is the moment the CTA wakes up.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Depth appears only as a response to state (hover, focus) and only on the primary CTA. Hairlines and Ink-on-Bone contrast carry all other separation.

## Shapes

The form language is sharp. Every surface — buttons, images, figure wells — uses a single 4px corner radius. The radius is enough to read as designed and small enough to feel editorial rather than toy-like. Zero-radius elements (the skip link, hairline dividers) are the exception that confirms the rule.

Image figures in the artist grid use 4px corners and `4 / 5` aspect ratio. Hero portrait uses no corner radius — it bleeds to the edges. FAQ rows and pricing rows have zero radius; they are pure rectangles separated by hairlines.

## Components

### CTA (Primary)
- **Shape:** 4px corner radius (the system default).
- **Primary:** Signal Red (`#E8334E`) flat fill, Bone (`#F5F1EA`) text, 56px min-height, 24px horizontal padding, body-large General Sans 700, -0.01em tracking. Inline SVG arrow on the trailing edge (`M3 10h13M11 5l5 5-5 5`, square caps, miter joins). No border.
- **Hover / Focus:** lifts 2px (`translateY(-2px)`) and brightens its bloom (24px → 36px spread, opacity 0.35 → 0.65). Arrow slides 4px right. Transitions over 320ms with the standard ease. Focus-visible adds a 2px ink outline with 3px offset.
- **Signature:** the resting bloom is always on; the CTA never sits dark.

### Hairlines
- **Style:** 1px high, full-width within container, no margin or padding of their own.
- **Hairline (bone background):** `rgba(10,10,10,0.12)`. Reads as a quiet printed rule.
- **Hairline-Bone (ink background):** `rgba(245,241,234,0.18)`. Same role, inverted.
- **State:** none. Hairlines never gain or lose emphasis.

### Mono Labels (`.mono`)
- **Style:** JetBrains Mono 500, 11px, 0.18em tracking, uppercase, line-height 1.
- **Use:** every micro-label in the system — section metadata, step numerals, table column headers, captions, nav links, skip link. Two visual weights: full ink, or `--ink-50` / `--ink-70` for secondary metadata.
- **Restraint:** if a label needs more than five words, it is not a mono label.

### Artist Card (`.artist`)
- **Shape:** 4px corners on the image figure; hairline between card and row.
- **Background:** figure well is Ink (`#0A0A0A`); meta block sits on Bone.
- **Internal Padding:** `--space-2` between spec / name / blurb, `--space-2` between blurb and link.
- **Image:** `4 / 5` aspect, `object-fit: cover`, cropped to centered weight.
- **Link:** mono, ink, 1px underline. Hover color: Signal Red.

### Pricing Table (`.price-table`)
- **Style:** full-width table, no outer border, 1px hairline between rows, 1px ink rule under the header row.
- **Header:** mono 11px uppercase, `--ink-50`.
- **Service name:** General Sans 700, 17px.
- **Duration:** mono, ink-70.
- **From price:** General Sans 700, body-large (19px), right column for action.
- **Action link:** mono ink with 1px underline; hover color Signal Red.

### FAQ Item (`.faq-item`)
- **Style:** dt / dd pair separated by `--space-3` (mobile) or `--space-7` (desktop). 1px hairline top (and bottom on last row).
- **Question:** title (General Sans 700, `clamp(22px, 2.4vw, 28px)`).
- **Answer:** body in `--ink-70`, 17px, 1.55 line-height.

### Step Item (`.step`)
- **Style:** vertical stack — mono numeral, title, body. Mobile uses hairline-top separators between rows; desktop uses vertical Hairline-Bone rules between the 4-up columns (the first column drops the left rule).
- **Numeral:** Signal Red. The only ink section where the accent is reused in body copy.

### Skip Link
- **Style:** Bone text on Ink background, mono uppercase, sharp corners. Hidden offscreen at rest; slides to top-left on focus.
- **Purpose:** mandatory for WCAG 2.1 AA; the system's only offscreen-at-rest component.

### Nav Link
- **Style:** mono uppercase, `--ink-70`. Hover to full ink. Transitions over 180ms.
- **No underlines.** The system's links are color shifts, not decorated lines — except the artist-link and price-link, which earn their underline because they carry secondary action weight.

### Footer
- **Background:** Ink.
- **Grid:** `2fr 1fr 2fr` on desktop (brand / nav / CTA); single column on mobile.
- **Type:** oversized brand mark (48px), Spectral italic tagline in `--bone-70`, mono nav in Bone, mono metadata in `--bone-55`.

## Do's and Don'ts

### Do:
- **Do** use Signal Red sparingly — one element per fold. Each new use must displace an existing use, not add.
- **Do** set body text on contrast verified at AA against its surface (ink on bone, bone on ink).
- **Do** preserve `--space-9` and `--space-10` as section paddings. Sections that feel cramped have lost the negative-space doctrine.
- **Do** use mono micro-labels for any metadata, table column, caption, or step numeral.
- **Do** inline an SVG arrow on CTAs and any other "go forward" gesture. Never use Unicode arrows.
- **Do** honor `prefers-reduced-motion` — the BOOKED fragment settles instantly, the CTA bloom stays static, smooth scrolling is disabled.

### Don't:
- **Don't** introduce a second accent color. There is one voice; it speaks through Signal Red.
- **Don't** add an eyebrow / kicker label above a heading. This house refuses kickers; reintroducing one is a craft violation.
- **Don't** soften corners beyond 4px or round individual elements differently from the system default.
- **Don't** decorate with icon fonts, glyph icons, or Lucide-style outline icons. Ink lines and SVG arrows are the only marks allowed.
- **Don't** ship a section without an aria-label or aria-labelledby. Landmarks and headings carry the page for screen readers.
- **Don't** invent testimonials, reviews, or artist names. All copy and imagery on this surface is placeholder by intent — replace before any go-live.
- **Don't** reuse the hero BOOKED animation on any other element. The fragment is reserved for the first viewport and earns its drama by being singular.

## Motion

Motion is held to two signatures: the BOOKED fragment and the CTA wake.

The `fragment` keyframe drives each letter of the hero word from rest through a 1.2° rotation, a 3px lift, and a 35% → 45% clip-path inset at the bottom — settling on a fractured final state held by `animation-fill-mode: forwards`. The animation runs over 520ms per letter with 80ms stagger and a 600ms initial delay so the static render shows the fracture. Under `prefers-reduced-motion`, every animation and transition collapses to 0.001ms; the letters simply appear settled.

The CTA carries a 180ms color transition on hover and a 320ms lift + arrow slide. Hover and focus share the same treatment; the CTA never differentiates them by color, only by state.

Page-level `scroll-behavior: smooth` is enabled but neutralized under reduced motion.

## Accessibility

Skip link rendered offscreen and revealed on focus. Every section carries an `aria-labelledby` referencing its heading or an `aria-label`. The primary CTA is the page's first focusable action and is keyboard-reachable from the skip link. Hairlines are decorative (`<hr>` without roles). All interactive elements meet a 44×44 CSS-pixel minimum target via the CTA's 56px min-height and the same on artist / price links via padding. Body, headline, and mono text are checked against WCAG 2.1 AA on their respective surfaces (ink on bone and bone on ink both clear AA at the weights used). `prefers-reduced-motion` is honored globally via a `*,*::before,*::after` collapse of animation and transition duration.

## Responsive

Breakpoints observed: 768px (tablet — steps, artist grid, footer grid, FAQ columns); 900px (hero side-by-side). Container padding steps from `--space-5` (24px) to `--space-7` (48px) at 768px. Section padding steps from `--space-9` (96px) to `--space-10` (128px) at 768px. The hero uses `100svh` for full-viewport framing and adjusts its image aspect from `3/5` to full-bleed at 900px. Type scales via `clamp()` on display, headline, title, and italic-accent; nothing else is sized in viewport units.

## Asset Inventory

All shipping rasters carry provenance under `public/<name>.webp.json` (the prompt and timestamp used to generate them).

- **hero-artist.webp** (1216×2048, portrait 3:5, ink background). Role: hero portrait, dominant first-fold image. Provenance: editorial beauty, side-angle, black nitrile gloves + drill, near-black backdrop, matte finish.
- **artist-1.webp** (832×1024, 4:5, bone-tone backdrop). Role: Maya Reyes artist card. Provenance: nail file + cradled fingertips, dark apron over black linen, real working moment.
- **artist-2.webp** (832×1024, 4:5). Role: Jules Tan artist card. Provenance: lash isolation with tweezers, focused eye-level work.
- **artist-3.webp** (832×1024, 4:5). Role: Aisha Okafor artist card. Provenance: fine detail brush mid-stroke on a single nail.
- **ui-mock-flow.webp** (1024×1792). Role: synthetic UI mockup illustrating the four-step booking flow inside the how-it-works section. Captioned as placeholder — replace with real screen captures before launch.

## Open Decisions

The following are explicit placeholders carried into this build. They must be resolved before the landing page is shipped.

- **Hero portrait.** Regen reference comp is documented; the shipping image is editorial and side-angle as briefed. Sign-off on the final portrait before launch.
- **Artist images and names.** Maya Reyes / Jules Tan / Aisha Okafor are illustrative. Replace with real portfolio imagery and vetted artist bios before go-live (per PRODUCT.md, no fabricated artist credentials).
- **Pricing table.** Sampled ranges are illustrative. Finalize with real roster pricing.
- **FAQ copy.** Drafted to match voice; verify against legal / ops before launch.
- **Booking handoff.** `#book` is anchored to the footer; the live booking flow itself is a separate surface that must be wired before go-live.
- **City-specific copy.** "Open now in your city" assumes a single launch city; add geo handling as scope widens.
- **Favicon.** `public/favicon.svg` exists; final mark to be confirmed with brand.
