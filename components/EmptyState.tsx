import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  title?: string;
  message?: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: ReactNode;
};

const DefaultIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-10 w-10"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    <path d="M9 13h6" />
  </svg>
);

export default function EmptyState({
  title = "Nothing to view here",
  message = "There is no content on this page yet. Check back soon.",
  actionLabel = "Back to home",
  actionHref = "/",
  icon = <DefaultIcon />,
}: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f8f7] px-5 py-10 font-['Inter',system-ui,sans-serif]">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-[0_8px_40px_-12px_rgba(15,61,56,0.18)] ring-1 ring-black/5 sm:p-10">
        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-[#0f3d38]/5 text-[#0f3d38]">
          {icon}
        </div>

        <h1 className="text-2xl font-semibold tracking-tight text-[#0f3d38] sm:text-3xl">
          {title}
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{message}</p>

        <Link
          href={actionHref}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-[#0f3d38] px-6 text-[15px] font-semibold text-white transition hover:bg-[#0b2f2b] focus:outline-none focus:ring-4 focus:ring-[#0f3d38]/20"
        >
          {actionLabel}
        </Link>
      </div>
    </main>
  );
}