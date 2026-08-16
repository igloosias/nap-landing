/**
 * Sticky mobile bottom-sheet CTA.
 * Shows after scrollY > 400px. Hides at top. Mobile only via CSS.
 * Uses passive scroll for perf; rAF-throttled.
 *
 * Also toggles `.is-scrolled` on <body> after 80px for nav backdrop blur.
 *
 * Drives parallax: any element with [data-parallax] inside the hero translates
 * at 0.4× scroll speed, clamped within the hero bounds. Disabled when
 * prefers-reduced-motion: reduce.
 */

const bar = document.querySelector("[data-sticky-cta]");
const parallaxEls = document.querySelectorAll("[data-parallax]");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let ticking = false;

const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;

    if (bar) bar.classList.toggle("is-visible", y > 400);
    document.body.classList.toggle("is-scrolled", y > 80);

    if (!reduced && parallaxEls.length) {
      for (const el of parallaxEls) {
        const rect = el.getBoundingClientRect();
        const heroTop = rect.top + y;
        const heroHeight = rect.height;
        const offset = Math.max(0, Math.min(y * 0.4, heroHeight * 0.15));
        if (y < heroTop) {
          el.style.setProperty("--parallax-y", "0px");
        } else {
          el.style.setProperty("--parallax-y", `${-offset}px`);
        }
      }
    }

    ticking = false;
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();