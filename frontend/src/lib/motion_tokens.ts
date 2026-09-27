/* ==============================================================================
   MOTION TOKENS & ANIMATION VARIANTS (motion-tokens.ts)
   ============================================================================== */
import { Variants, Transition } from "framer-motion";

export const TRANSITIONS: Record<string, Transition> = {
  smooth: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  gentle: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  stagger: 0.12 as any,
  pulse: {
    duration: 3,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  },
  float: {
    duration: 3.5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut",
  },
};

export const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const SLIDE_IN_RIGHT: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const SLIDE_IN_LEFT: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const FLOATING_ICON_VARIANTS: Variants = {
  animate: {
    y: [-2, 4, -2],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
