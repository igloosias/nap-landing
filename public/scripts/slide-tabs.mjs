/**
 * Sliding-cursor nav — vanilla JS equivalent of the SlideTabs React component.
 * Tracks hover on [data-nav-link] children, animates a single .nav-cursor pill
 * beneath them. On mouseleave of the container, snaps cursor back to the
 * data-active link. Respects prefers-reduced-motion.
 */

const container = document.querySelector("[data-slide-tabs]");
if (container) {
  const cursor = container.querySelector(".nav-cursor");
  const links = container.querySelectorAll("[data-nav-link]");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const placeCursor = (link, withTransition = true) => {
    if (!cursor || !link) return;
    const rect = link.getBoundingClientRect();
    const parentRect = container.getBoundingClientRect();
    const left = rect.left - parentRect.left + container.scrollLeft;
    cursor.style.transform = `translateX(${left}px)`;
    cursor.style.width = `${rect.width}px`;
    cursor.style.height = `${rect.height}px`;
    cursor.style.opacity = "1";
    cursor.dataset.transition = withTransition && !reduced ? "1" : "0";
  };

  const setActive = (link) => {
    links.forEach((l) => l.dataset.active = String(l === link));
  };

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      setActive(link);
      placeCursor(link, true);
    });
    link.addEventListener("focus", () => {
      setActive(link);
      placeCursor(link, false);
    });
  });

  container.addEventListener("mouseleave", () => {
    const active = container.querySelector('[data-nav-link][data-active="true"]') || links[0];
    if (active) {
      setActive(active);
      placeCursor(active, true);
    }
  });

  // Initial placement
  requestAnimationFrame(() => {
    const active = container.querySelector('[data-nav-link][data-active="true"]') || links[0];
    if (active) {
      setActive(active);
      placeCursor(active, false);
    }
  });

  // Recalculate on resize
  window.addEventListener("resize", () => {
    const active = container.querySelector('[data-nav-link][data-active="true"]') || links[0];
    if (active) placeCursor(active, false);
  }, { passive: true });
}