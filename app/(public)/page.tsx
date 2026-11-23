import Link from "next/link";
import FeaturesSection from "../../components/visitors_page/features-section";
import SpotlightSection from "../../components/visitors_page/spotlight-section";
import HowItWorksSection from "../../components/visitors_page/how-it-works-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            BitTrade<span className="text-emerald-500">.</span>
          </Link>

          {/* Navigation links */}
          <div className="hidden items-center gap-9 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600"
            >
              How it works
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-slate-600 hover:text-emerald-600"
            >
              About us
            </Link>
          </div>

          {/* Authentication actions */}
          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden text-sm font-semibold text-slate-700 hover:text-emerald-600 sm:block"
            >
              Log in
            </a>
            <a
              href="/register"
              className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-black px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Left: Hero content */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Your gateway to crypto investing
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl">
              Invest in crypto.
              <span className="block text-green-500">Build your future.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              Discover the world of digital assets, explore crypto opportunities
              and manage your portfolio with confidence. Your crypto investment
              journey starts here.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/register"
                className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
              >
                Get Started <span className="ml-2">→</span>
              </a>

              <a
                href="/register"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
              >
                Explore opportunities
              </a>
            </div>
            </div>

              <a
                href="#features"
                className="rounded-lg border border-slate-700 px-7 py-3.5 font-semibold text-white transition hover:bg-slate-900"
              >
                Explore Platform
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Explore digital assets. Understand the risks. Invest responsibly.
            </p>
          </div>

          {/* Right: Crypto portfolio visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-10 rounded-full bg-green-500/10 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-[#101510] p-6 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    Sample crypto portfolio
                  </p>
                  <h2 className="mt-2 text-3xl font-bold">$24,850.00</h2>
                </div>

                <div className="rounded-xl bg-green-500/10 px-3 py-2 text-sm font-semibold text-green-400">
                  +8.42%
                </div>
              </div>

              {/* Portfolio chart */}
              <div className="mt-8 flex h-36 items-end gap-2">
                {[
                  35, 48, 40, 58, 50, 68, 61, 78, 70, 88, 76, 95, 85, 100, 90,
                  110, 98, 120,
                ].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-md bg-green-500/30 transition-all hover:bg-green-400"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>

              <div className="mt-5 flex justify-between border-b border-white/10 pb-6 text-xs text-slate-500">
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>

              {/* Crypto assets */}
              <div className="mt-6">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-semibold">Popular assets</h3>
                  <span className="text-xs text-slate-500">Explore crypto</span>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-xl text-orange-400">
                        ₿
                      </div>
                      <div>
                        <p className="font-medium">Bitcoin</p>
                        <p className="text-xs text-slate-500">BTC</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$12,450.00</p>
                      <p className="text-xs text-green-400">+4.25%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/15 text-xl text-indigo-400">
                        Ξ
                      </div>
                      <div>
                        <p className="font-medium">Ethereum</p>
                        <p className="text-xs text-slate-500">ETH</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$8,200.00</p>
                      <p className="text-xs text-green-400">+2.81%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/15 text-lg text-purple-400">
                        ◎
                      </div>
                      <div>
                        <p className="font-medium">Solana</p>
                        <p className="text-xs text-slate-500">SOL</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$4,200.00</p>
                      <p className="text-xs text-green-400">+6.12%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <SpotlightSection />
      <HowItWorksSection />
    </main>
  );
}
