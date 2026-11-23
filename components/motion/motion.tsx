"use client";

import type { ReactNode } from "react";
import { motion, MotionConfig, type Variants } from "framer-motion";

/**
 * Small, reusable animation helpers. They are client components, so the pages
 * that use them can stay Server Components.
 */

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Wrap the page once. Users who prefer reduced motion get no movement. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  /** true = animate when scrolled into view, false = animate on page load */
  inView?: boolean;
};

export function FadeIn({
  children,
  className,
  delay = 0,
  x = 0,
  y = 24,
  inView = false,
}: FadeInProps) {
  const trigger = inView
    ? {
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, margin: "-80px" },
      }
    : { animate: { opacity: 1, x: 0, y: 0 } };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      transition={{ duration: 0.7, delay, ease }}
      {...trigger}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/** Children wrapped in <StaggerItem> appear one after another. */
export function Stagger({
  children,
  className,
  inView = false,
}: {
  children: ReactNode;
  className?: string;
  inView?: boolean;
}) {
  const trigger = inView
    ? { whileInView: "show", viewport: { once: true, margin: "-60px" } }
    : { animate: "show" };

  return (
    <motion.div className={className} variants={container} initial="hidden" {...trigger}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/** Gentle up-and-down floating loop. */
export function Float({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Lift on hover, press on tap. Wrap a <Link> or button. */
export function Pressable({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className ?? "inline-block"}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

/** Chart bars that grow up from zero as they scroll into view. */
export function AnimatedBars({ heights }: { heights: number[] }) {
  return (
    <div className="mt-8 flex h-36 items-end gap-2" aria-hidden="true">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-md bg-green-500/30 transition-colors hover:bg-green-400"
          initial={{ height: 0 }}
          whileInView={{ height: h }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.04, ease }}
        />
      ))}
    </div>
  );
}