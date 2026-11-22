import Image from "next/image";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export default function SpotlightSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="text-2xl font-bold uppercase tracking-widest text-green-600 md:text-3xl">
            More than an investment platform
          </p>

          <h2 className="mt-4 text-xl font-semibold text-slate-900 md:text-2xl">
            Discover more ways to grow your crypto journey.
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Spotlight card */}
          <article className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-2xl border border-slate-800 bg-black p-7 text-white md:grid-cols-2 md:p-10">
            {/* Text content */}
            <div>
              <p className="text-sm font-medium text-green-400">
                Discover new opportunities
              </p>

              <h3 className="mt-5 text-3xl font-bold leading-tight">
                New stars on the crypto horizon.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Discover emerging digital assets and explore promising crypto
                projects beyond the mainstream. Find new opportunities as you
                build your crypto investment journey.
              </p>

              <a
                href="/register"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
              >
                Explore opportunities
                <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Image */}
            <div className="relative flex min-h-[260px] items-center justify-center">
              <div className="absolute h-64 w-64 rounded-full bg-green-500/20 blur-[90px]" />

              <Image
                src="https://www.bitpanda.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F176646%2F2048x2048%2F60b89be56c%2Fbitpanda_spotlight_product_2025_redshift_main_main_camera2_mp14-m1p-08094_2025-07-17_10-20-55_-1.png&w=3840&q=75"
                alt="Glowing crypto spotlight"
                width={500}
                height={500}
                className="relative z-10 h-auto w-full max-w-[340px] object-contain"
              />
            </div>
          </article>

          {/* Security card */}
          <article className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-2xl border border-slate-800 bg-black p-7 text-white md:grid-cols-2 md:p-10">
            {/* Text content */}
            <div>
              <p className="text-sm font-medium text-green-400">
                Your security matters
              </p>

              <h3 className="mt-5 text-3xl font-bold leading-tight">
                Best-in-Class Security
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Our ISO27001 certification shows our commitment to the best
                security standards.
              </p>
            </div>

            {/* Security illustration */}
            <div className="flex min-h-[260px] items-center justify-center">
              <div className="flex h-64 w-64 items-center justify-center rounded-full border border-green-500/20 bg-green-500/5 shadow-[0_0_70px_rgba(34,197,94,0.12)]">
                <div className="flex h-44 w-44 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
                  <ShieldCheck
                    size={90}
                    strokeWidth={1.2}
                    className="text-green-500"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
