/**
 * Scroll-driven motion grammar.
 * One IntersectionObserver. Sections entering viewport trigger:
 *   - hairline draw-in (scaleX 0 → 1 from left)
 *   - mono labels fade in (80ms delay)
 *   - heading word stagger (60ms per word via .word spans)
 * Respects prefers-reduced-motion: reduce — content visible immediately.
 */

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!REDUCED && "IntersectionObserver" in window) {
  const targets = document.querySelectorAll("[data-reveal]");
  if (targets.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );
    targets.forEach((el) => io.observe(el));
  }
} else {
  // Reduced motion or no IO: ensure everything is visible
  document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-revealed"));
}