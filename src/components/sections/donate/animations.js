/**
 * Shared Framer Motion variants + scroll utilities for the Donate page.
 * Keeping these centralized avoids re-declaring the same easing/timing
 * curves in every section component.
 */

export const EASE = [0.22, 1, 0.36, 1];

/** Fade + rise, used for generic content blocks and headings. */
export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Content sliding in from the left — used for the impact illustration. */
export const slideInLeft = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Content sliding in from the right — used for the impact copy block. */
export const slideInRight = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Scale up from nothing — used for the hero QR card on load. */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE, delay: 0.15 },
  },
};

/** Parent wrapper that staggers its children in. */
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Individual staggered child item. */
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Circular progress ring draw-in, driven by strokeDashoffset. */
export const ringDraw = (circumference, progress) => ({
  hidden: { strokeDashoffset: circumference },
  visible: {
    strokeDashoffset: circumference - (progress / 100) * circumference,
    transition: { duration: 1.1, ease: EASE, delay: 0.2 },
  },
});

export const viewportOnce = { once: true, amount: 0.3 };

/**
 * Smoothly scrolls to a section by id. Prefers a Lenis instance exposed
 * globally by the app shell (window.lenis) so the motion matches the
 * rest of the site's smooth-scroll feel; falls back to native scroll.
 */
export function scrollToId(id, offset = -80) {
  if (typeof window === "undefined") return;
  const target = document.getElementById(id);
  if (!target) return;

  if (window.lenis && typeof window.lenis.scrollTo === "function") {
    window.lenis.scrollTo(target, { offset });
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
}
