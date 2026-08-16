# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (greenfield; user picked framework + comp-first path).

Image-gen tooling: `muapi` CLI at `~/.local/bin/muapi` (`muapi image generate|edit|models`). Used by the comp-first workflow to produce hero comps and supporting imagery before code.

## Users

Beauty customers booking a nail and/or lash appointment on mobile or desktop. Primary intent: find a trusted local artist and lock a time slot in under a minute. Secondary: first-time visitors evaluating whether NAP is worth their attention versus continuing to scroll Instagram, Google Maps, or a personal referral.

## Product Purpose

NAP turns the scattered, slow process of finding a nail or lash artist into a single, fast booking flow: pick a service, pick an artist, pick a slot, confirm. Success is measured by completed bookings per visitor, not by time-on-page.

## Positioning

NAP is the fastest path from "I want my nails done this week" to a confirmed appointment with a vetted artist. The meaningful difference is not catalog breadth (Instagram already has that) but trust + speed: every artist is vetted, the booking flow is stripped to four decisions, and slot availability is real-time.

## Operating Context

Visitors browse on phones in the evening or on weekends while planning the next appointment. Re-booking is a strong repeat behavior; the same customer returns every 2-4 weeks for nails and every 3-6 weeks for lashes. Artists manage their own schedules and rely on NAP to fill open slots. Trust cues (artist portfolio, reviews, certification badges) matter more here than on a generic services marketplace.

## Capabilities and Constraints

Confirmed in scope for the landing page: hero with primary CTA, service overview (nails / lashes / both), how-it-works sequence, featured artists strip, social proof, FAQ, footer with contact. Booking flow itself lives off the landing page or in a follow-up surface.

Confirmed constraints: mobile-first layout, fast first paint (target under 1.5s on 4G), accessible (WCAG 2.1 AA), no fabricated testimonials, statistics, or artist names — copy and assets must come from the user before any go-live.

Undecided: live booking integration vs static form, payment handling, geo-localization scope (single city vs multi-city launch).

## Brand Commitments

Name: NAP. Voice: warm, confident, lightly playful — never cutesy, never clinical. Personality: treats the appointment as a small luxury the customer has earned. No logo, color, or font commitments recorded here (those belong to DESIGN.md once new-work establishes a visual world).

## Evidence on Hand

None. Greenfield project, no testimonials, screenshots, artist portraits, certifications, or press available yet. Future work must not invent these.

## Product Principles

1. Bookings per visitor beat vanity metrics.
2. Trust is earned by artist craft and real reviews, not by claims.
3. Mobile is the primary surface; desktop adapts.
4. Four decisions or fewer from landing to confirmed slot.
5. Restraint in copy and ornament — the appointment is the point.

## Accessibility & Inclusion

WCAG 2.1 AA minimum. Touch targets at least 44x44 CSS pixels. Color contrast checked against AA for body and interactive text. Forms labeled and error-described. Booking flow operable by keyboard and screen reader from day one. No accessibility barrier between landing and the booking handoff.