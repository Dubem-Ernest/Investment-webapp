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
    minInvestment: 100,
    durationDays: 30,
    returnPercent: 2,
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
    minInvestment: 500,
    durationDays: 90,
    returnPercent: 6,
    features: [
      "Plan length: 3 months",
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
    minInvestment: 2000,
    durationDays: 180,
    returnPercent: 15,
    features: [
      "Plan length: 6 months",
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