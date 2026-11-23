import type { PackageCardProps } from "@/components/packages/PackageCard";

export type InvestmentPackage = Omit<PackageCardProps, "ctaHref"> & {
  /** Used in URLs, e.g. /dashboard/invest?plan=growth */
  slug: string;
};

// Placeholder plans. Replace with your real offering or load from your database.
export const packages: InvestmentPackage[] = [
  {
    slug: "starter",
    name: "Starter",
    description: "A short plan to get familiar with how investing works.",
    minInvestment: 1000,
    durationDays: 30,
    returnPercent: 30,
    features: [
      "Plan length: 30 days",
      "Track progress on your dashboard",
      "Request withdrawal at maturity",
      "Email support",
    ],
    ctaLabel: "Start with Starter",
  },
  {
    slug: "growth",
    name: "Growth",
    description: "A balanced plan for investors building over a few months.",
    minInvestment: 2500,
    durationDays: 30,
    returnPercent: 40,
    features: [
      "Plan length: 1 months",
      "Track progress on your dashboard",
      "Request withdrawal at maturity",
      "Priority support",
    ],
    popular: true,
    ctaLabel: "Choose Growth",
  },
  {
    slug: "premium",
    name: "Premium",
    description: "A longer plan for larger, patient investments.",
    minInvestment: 4000,
    durationDays: 30,
    returnPercent: 50,
    features: [
      "Plan length: 1 months",
      "Track progress on your dashboard",
      "Request withdrawal at maturity",
      "Dedicated support",
    ],
    ctaLabel: "Choose Premium",
  },
];

export function getPackage(slug: string | undefined) {
  return packages.find((p) => p.slug === slug);
}

/** Where a package button sends the visitor: log in first, then continue. */
export function loginUrlFor(slug: string) {
  const next = `/dashboard/invest?plan=${slug}`;
  return `/login?next=${encodeURIComponent(next)}`;
}