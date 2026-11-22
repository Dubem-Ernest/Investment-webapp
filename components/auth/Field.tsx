"use client";

import { useState, type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const EyeIcon = ({ off }: { off: boolean }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {off ? (
      <>
        <path d="M3 3l18 18" />
        <path d="M10.6 6.1A9.8 9.8 0 0 1 12 6c5 0 8.5 4 9.5 6a12.7 12.7 0 0 1-2.6 3.3" />
        <path d="M6.6 6.7A12.9 12.9 0 0 0 2.5 12c1 2 4.5 6 9.5 6a9.7 9.7 0 0 0 4-.9" />
        <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
      </>
    ) : (
      <>
        <path d="M2.5 12c1-2 4.5-6 9.5-6s8.5 4 9.5 6c-1 2-4.5 6-9.5 6s-8.5-4-9.5-6z" />
        <circle cx="12" cy="12" r="3" />
      </>
    )}
  </svg>
);

export default function Field({ label, error, id, type = "text", className = "", ...rest }: Props) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputId = id ?? rest.name;
  const errorId = `${inputId}-error`;

  return (
    <div>
      <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <div className="relative">
        <input
          id={inputId}
          type={isPassword && show ? "text" : type}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`h-12 w-full rounded-xl border bg-white px-4 text-[15px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-slate-200 hover:border-slate-300 focus:border-[#0f3d38] focus:ring-[#0f3d38]/10"
          } ${isPassword ? "pr-12" : ""} ${className}`}
          {...rest}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:text-[#0f3d38]"
          >
            <EyeIcon off={show} />
          </button>
        )}
      </div>

      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
  