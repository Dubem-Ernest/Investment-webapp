import type { ReactNode } from "react";
import Link from "next/link";

/**
 * Fonts (add once in app/layout.tsx <head> or via next/font):
 *   https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600&display=swap
 */

const points = [
  {
    title: "Clear, simple plans",
    text: "See the term and target rate before you commit.",
  },
  {
    title: "Your dashboard, always",
    text: "Track every investment and its maturity date.",
  },
  {
    title: "Withdraw to your wallet",
    text: "Request payouts to an address you control.",
  },
];

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthShell({ title, subtitle, children }: Props) {
  return (
    <main className="grid min-h-screen grid-cols-1 bg-white font-['Inter',system-ui,sans-serif] lg:grid-cols-[1.05fr_1fr]">
      {/* Brand panel (hidden on small screens) */}
      <aside className="relative hidden overflow-hidden bg-black p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#b8f05c]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#f7f8f7]"
        >
          BitTrade<span className="text-emerald-500">.</span>
        </Link>

        <div className="relative">
          <h2 className="font-['Anton',Impact,'Arial_Narrow',sans-serif] text-5xl uppercase leading-[1.05] tracking-wide xl:text-6xl">
            Put your crypto
            <br />
            to <span className="text-[#b8f05c]">work.</span>
          </h2>

          <ul className="mt-10 space-y-5">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#b8f05c] text-[#0f3d38]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="m5 12 5 5 9-10" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm text-white/70">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative max-w-md text-xs leading-relaxed text-white/50">
          Investing involves risk, including the possible loss of the amount
          invested. Returns are not guaranteed.
        </p>
      </aside>

      {/* Form panel */}
      <section className="flex  items-center justify-center bg-[#f7f8f7] px-5 py-10 sm:px-8 lg:bg-white">
        <div className="w-full max-w-md">
          {/* Mobile brand */}
          <Link
          href="/"
          className="text-3xl lg:hidden font-bold ml-5 tracking-tight text-[#000100]"
        >
          BitTrade<span className="text-emerald-500">.</span>
        </Link>

          <div className="mt-9 rounded-3xl bg-white p-6 shadow-[0_8px_40px_-12px_rgba(15,61,56,0.18)] ring-1 ring-black/5 sm:p-9 lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0">
            <h1 className="text-3xl font-semibold tracking-tight text-[#0f3d38]">
              {title}
            </h1>
            <p className="mt-2 text-[15px] text-slate-500">{subtitle}</p>
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
