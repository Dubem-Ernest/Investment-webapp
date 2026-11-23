"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import CountUp from "./CountUp";

export type PackageCardProps = {
  name: string;
  description: string;
  /** Minimum amount to invest, in the given currency */
  minInvestment: number;
  currency?: string;
  /** Length of the plan in days */
  durationDays: number;
  /** Target return over the full term, as a percentage (e.g. 6 means 6%) */
  returnPercent: number;
  features: string[];
  popular?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

function formatMoney(value: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatDuration(days: number) {
  if (days % 30 === 0) {
    const months = days / 30;
    return `${months} month${months > 1 ? "s" : ""}`;
  }
  return `${days} days`;
}

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const glow = [
  "0 0 40px -20px rgba(34,197,94,0.35)",
  "0 0 70px -12px rgba(34,197,94,0.65)",
  "0 0 40px -20px rgba(34,197,94,0.35)",
];

export default function PackageCard({
  name,
  description,
  minInvestment,
  currency = "USD",
  durationDays,
  returnPercent,
  features,
  popular = false,
  ctaLabel = "Choose plan",
  ctaHref = "/register",
}: PackageCardProps) {
  const exampleTotal = minInvestment + (minInvestment * returnPercent) / 100;
  const money = (n: number) => formatMoney(n, currency);

  return (
    <motion.article
      className={`relative flex h-full flex-col rounded-3xl border p-7 sm:p-8 ${
        popular
          ? "border-green-500/60 bg-[#0d150f]"
          : "border-white/10 bg-[#101510] hover:border-green-500/30"
      }`}
      // Hover: lift the card with a spring
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 22 },
      }}
      // Popular card: slow pulsing glow
      animate={
        popular
          ? {
              boxShadow: glow,
              transition: {
                boxShadow: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              },
            }
          : undefined
      }
    >
      {popular && (
        <div className="absolute inset-x-0 -top-3 flex justify-center">
          <motion.span
            className="rounded-full bg-green-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-black"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            Most popular
          </motion.span>
        </div>
      )}

      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>

      {/* Minimum investment counts up */}
      <div className="mt-6">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Minimum investment
        </p>
        <p className="mt-1 text-4xl font-bold tracking-tight text-white">
          <CountUp value={minInvestment} format={money} />
        </p>
      </div>

      {/* Term and target return */}
      <dl className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-white/5 p-4">
          <dt className="text-xs text-slate-500">Plan length</dt>
          <dd className="mt-1 font-semibold text-white">
            {formatDuration(durationDays)}
          </dd>
        </div>
        <div className="rounded-2xl bg-green-500/10 p-4">
          <dt className="text-xs text-green-300/70">Target return</dt>
          <dd className="mt-1 font-semibold text-green-400">
            <CountUp
              value={returnPercent}
              decimals={Number.isInteger(returnPercent) ? 0 : 1}
            />
            %
          </dd>
        </div>
      </dl>

      {/* Worked example */}
      <div className="mt-4 rounded-2xl border border-dashed border-white/10 p-4 text-sm">
        <p className="text-slate-400">
          Example: invest{" "}
          <span className="font-medium text-white">{money(minInvestment)}</span>{" "}
          and, if the target is met, receive about{" "}
          <span className="font-semibold text-green-400">
            <CountUp value={exampleTotal} format={money} />
          </span>{" "}
          after {formatDuration(durationDays)}.
        </p>
      </div>

      {/* Features slide in one by one */}
      <motion.ul
        className="mt-6 flex-1 space-y-3"
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {features.map((feature) => (
          <motion.li
            key={feature}
            variants={listItem}
            className="flex items-start gap-3 text-sm text-slate-300"
          >
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-green-500/15 text-green-400">
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 12 5 5 9-10" />
              </svg>
            </span>
            {feature}
          </motion.li>
        ))}
      </motion.ul>

      {/* Button: press effect, moving arrow, shimmer on the popular plan */}
      <motion.div className="mt-8" whileTap={{ scale: 0.97 }}>
        <Link
          href={ctaHref}
          className={`group relative block overflow-hidden rounded-xl px-6 py-3.5 text-center font-semibold transition-colors ${
            popular
              ? "bg-green-500 text-black hover:bg-green-400"
              : "border border-slate-700 text-white hover:bg-slate-900"
          }`}
        >
          {popular && (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: ["-100%", "400%"] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
            />
          )}
          <span className="relative">
            {ctaLabel}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
      </motion.div>
    </motion.article>
  );
}