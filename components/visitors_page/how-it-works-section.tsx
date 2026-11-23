
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Sign up to create your free account and begin your investment journey.",
    image:
      "https://www.bitpanda.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F176646%2F600x661%2Fdd7a20b468%2Fmc-3822-260907_website-home-page_visual-updates_global_register_original-dimensions_extra-space-at-top.png&w=3840&q=75",
  },
  {
    number: "02",
    title: "Verify",
    description:
      "Verify your identity with one of our trusted verification partners.",
    image:
      "https://www.bitpanda.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F176646%2F600x661%2Fa1892e4129%2Fmc-3822-260907_website-home-page_visual-updates_global_verify_original-dimensions_extra-space-at-top.png&w=3840&q=75",
  },
  {
    number: "03",
    title: "Deposit",
    description:
      "Deposit funds securely using convenient and reliable payment options.",
    image:
      "https://www.bitpanda.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F176646%2F600x661%2F5b505cd1aa%2Fmc-3822-260907_website-home-page_visual-updates_global_trade_original-dimensions_extra-space-at-top.png&w=3840&q=75",
  },
  {
    number: "04",
    title: "Trade",
    description:
      "Buy, sell and swap digital assets whenever the market is open.",
    image:
      "https://www.bitpanda.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F176646%2F600x661%2Fea0780e04e%2Fmc-3822-260907_website-home-page_visual-updates_global_deposit_original-dimensions_extra-space-at-top.png&w=3840&q=75",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#101510] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-shadow-white md:text-5xl">
            Get started in minutes
          </h2>

          <p className="mt-5 text-base leading-7 text-shadow-white">
            Start your crypto investment journey in four simple steps.
            Create an account, verify your identity, fund your wallet
            and explore the digital asset market.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => (
            <article key={step.number} className="group">

              {/* Image */}
              <div className="relative aspect-[6/6.61] overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  src={step.image}
                  alt={`${step.title} step illustration`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Step details */}
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-black">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-lg bg-green-500 px-8 py-4 font-semibold text-black transition hover:bg-green-400"
          >
            Get started
          </Link>
        </div>

      </div>
    </section>
  );
}
