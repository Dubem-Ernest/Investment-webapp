"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthShell from "../../../components/auth/AuthShell";
import Field from "../../../components/auth/Field";

type Errors = {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
  terms?: string;
};

// Returns 0-4. Simple, client-side only; the server must enforce its own rules.
function passwordScore(pw: string): number {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const strengthLabels = ["Too weak", "Weak", "Fair", "Good", "Strong"];
const strengthColors = ["bg-slate-200", "bg-red-400", "bg-amber-400", "bg-lime-500", "bg-emerald-600"];

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const score = useMemo(() => passwordScore(password), [password]);

  function validate(): Errors {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email address.";
    if (password.length < 8) e.password = "Use at least 8 characters.";
    else if (score < 3) e.password = "Add upper and lower case letters, a number or a symbol.";
    if (confirm !== password) e.confirm = "Passwords do not match.";
    if (!terms) e.terms = "You must accept the terms to continue.";
    return e;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    setFormError("");

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Could not create your account.");
      }

      router.push("/dashboard");
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell title="Create your account" subtitle="Start in minutes. No hidden steps.">
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        {formError && (
          <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {formError}
          </div>
        )}

        <Field
          label="Full name"
          name="name"
          autoComplete="name"
          placeholder="Jane Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />

        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <div>
          <Field
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          {password && (
            <div className="mt-2.5" aria-live="polite">
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      i <= score ? strengthColors[score] : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-1.5 text-xs text-slate-500">
                Strength: <span className="font-medium text-slate-700">{strengthLabels[score]}</span>
              </p>
            </div>
          )}
        </div>

        <Field
          label="Confirm password"
          name="confirm"
          type="password"
          autoComplete="new-password"
          placeholder="Re-enter your password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          error={errors.confirm}
        />

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate-600">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 accent-[#0f3d38]"
            />
            <span>
              I agree to the{" "}
              <Link href="/terms" className="font-medium text-[#0f3d38] hover:underline">
                Terms
              </Link>
              ,{" "}
              <Link href="/privacy" className="font-medium text-[#0f3d38] hover:underline">
                Privacy Policy
              </Link>{" "}
              and understand that investing carries risk, including loss of capital.
            </span>
          </label>
          {errors.terms && (
            <p role="alert" className="mt-1.5 text-sm text-red-600">
              {errors.terms}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-[#0f3d38] text-[15px] font-semibold text-white transition hover:bg-[#0b2f2b] focus:outline-none focus:ring-4 focus:ring-[#0f3d38]/20 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Creating account…
            </span>
          ) : (
            "Create account"
          )}
        </button>

        <p className="pt-2 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#0f3d38] hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}