import PackageCard from "./PackageCard";
import { FadeIn, Stagger, StaggerItem } from "../motion/motion";
import { loginUrlFor, packages } from "@/lib/packages";

export default function PackagesSection() {
  return (
    <section id="packages" className="bg-black px-6 py-24 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeIn inView className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">
            Investment packages
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            Pick the plan that fits your goals
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400">
            Compare plan lengths, minimum amounts and target returns before you
            invest.
          </p>
        </FadeIn>

        <Stagger
          inView
          className="grid grid-cols-1 gap-6 pt-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {packages.map(({ slug, ...pkg }) => (
            <StaggerItem key={slug} className="h-full">
              {/* Clicking sends the visitor to log in, then on to the invest page */}
              <PackageCard {...pkg} ctaHref={loginUrlFor(slug)} />
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-6 text-slate-500">
          Figures shown are illustrative targets, not guarantees. Returns can
          be lower than shown, and you may lose some or all of the amount you
          invest. Only invest money you can afford to lose.
        </p>
      </div>
    </section>
  );
}