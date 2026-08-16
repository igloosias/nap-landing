/**
 * Collapsible category toggle for the menu section.
 * Click the picture → expand/collapse the pricing list below.
 * Native <details> would also work, but a custom button gives us
 * better control over the visual cue (CTA overlay on the image).
 * Respects prefers-reduced-motion.
 */

const triggers = document.querySelectorAll("[data-collapsible-trigger]");
if (triggers.length) {
  triggers.forEach((trigger) => {
    const controlsId = trigger.getAttribute("aria-controls");
    const body = controlsId ? document.getElementById(controlsId) : null;
    if (!body) return;

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      const next = !isOpen;
      trigger.setAttribute("aria-expanded", String(next));
      trigger.classList.toggle("is-open", next);
      body.hidden = !next;
      body.classList.toggle("is-open", next);
    });
  });
}