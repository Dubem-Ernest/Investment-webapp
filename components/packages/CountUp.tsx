"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Props = {
  value: number;
  duration?: number;
  decimals?: number;
  /** Custom formatter, e.g. for currency. Overrides `decimals`. */
  format?: (n: number) => string;
};

/**
 * Counts from 0 up to `value` the first time it scrolls into view.
 * Shows the final value straight away for users who prefer reduced motion.
 */
export default function CountUp({
  value,
  duration = 1.4,
  decimals = 0,
  format,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const controls = animate(0, value, {
      duration,
      ease,
      onUpdate: setDisplay,
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value, duration]);

  return <span ref={ref}>{format ? format(display) : display.toFixed(decimals)}</span>;
}