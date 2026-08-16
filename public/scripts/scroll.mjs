/**
 * Sticky mobile bottom-sheet CTA.
 * Shows after scrollY > 400px. Hides at top. Mobile only via CSS.
 * Uses passive scroll for perf; rAF-throttled.
 *
 * Also toggles `.is-scrolled` on <body> after 80px for nav backdrop blur.
 *
 * Drives parallax: any element with [data-parallax] inside the hero translates
 * at 0.4× scroll speed, clamped to the visible portion of the hero.
 * Disabled when prefers-reduced-motion: reduce.
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

    if (bar) {
      const visible = y > 400;
      bar.classList.toggle("is-visible", visible);
      bar.setAttribute("aria-hidden", visible ? "false" : "true");
    }
    document.body.classList.toggle("is-scrolled", y > 80);

    if (!reduced && parallaxEls.length) {
      const vh = window.innerHeight;
      for (const el of parallaxEls) {
        const rect = el.getBoundingClientRect();
        const elTop = rect.top + y;
        const elBottom = elTop + rect.height;
        // Max offset: min(20% viewport, 30% element height) — works for tall and short heroes.
        const maxOffset = Math.min(vh * 0.2, rect.height * 0.3);
        if (y < elTop) {
          el.style.setProperty("--parallax-y", "0px");
        } else if (y > elBottom) {
          el.style.setProperty("--parallax-y", `${-maxOffset}px`);
        } else {
          const progress = (y - elTop) / rect.height; // 0..1 while in view
          el.style.setProperty("--parallax-y", `${-progress * maxOffset}px`);
        }
      }
    }

    ticking = false;
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
