import { ShieldCheck, ChartNoAxesCombined, Wallet, Globe } from "lucide-react";

const features = [
  {
    icon: ChartNoAxesCombined,
    title: "Smart Crypto Investing",
    description:
      "Explore digital assets and investment opportunities while making informed decisions about your financial future.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Keep security at the forefront of your investment journey with transparency and responsible asset management.",
  },
  {
    icon: Wallet,
    title: "Portfolio Management",
    description:
      "Track your investments, monitor portfolio performance and stay on top of your financial activity.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description:
      "Explore digital assets and blockchain-powered opportunities across the global crypto ecosystem.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Why choose us
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Everything you need to navigate crypto.
          </h2>

          <p className="mt-4 leading-7 text-slate-500">
            A platform designed to help you explore, manage and understand your
            crypto investment journey.
          </p>
        </div>

        {/* Mobile slider, static grid on desktop */}
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="min-w-[85%] snap-start rounded-2xl border border-slate-800 bg-black p-7 transition hover:border-green-500/40 hover:shadow-lg md:min-w-0"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-xs leading-6 text-slate-400">
          Investing in stocks, ETFs and commodities carries risks. Conduct your
          own research before concluding a transaction.
        </p>
      </div>
    </section>
  );
}
