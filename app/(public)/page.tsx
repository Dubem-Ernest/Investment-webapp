import Link from "next/link";
import PackagesSection from "../../components/packages/PackagesSection";
import FeaturesSection from "../../components/visitors_page/features-section";
import SpotlightSection from "../../components/visitors_page/spotlight-section";
import HowItWorksSection from "../../components/visitors_page/how-it-works-section";
import {
  AnimatedBars,
  FadeIn,
  Float,
  MotionProvider,
  Pressable,
  Stagger,
  StaggerItem,
} from "../../components/motion/motion";

const chartHeights = [
  35, 48, 40, 58, 50, 68, 61, 78, 70, 88, 76, 95, 85, 100, 90, 110, 98, 120,
];

export default function Home() {
  return (
    <MotionProvider>
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Header slides down on load */}
        <FadeIn y={-20}>
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
                <Link
                  href="/login"
                  className="hidden text-sm font-semibold text-slate-700 hover:text-emerald-600 sm:block"
                >
                  Log in
                </Link>
                <Pressable>
                  <Link
                    href="/register"
                    className="block rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                  >
                    Get Started
                  </Link>
                </Pressable>
              </div>
            </nav>
          </header>
        </FadeIn>

        <section className="relative overflow-hidden bg-black px-6 py-24 text-white lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            {/* Left: Hero content, staggered entrance */}
            <Stagger>
              <StaggerItem>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Your gateway to crypto investing
                </div>
              </StaggerItem>

              <StaggerItem>
                <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl">
                  Invest in crypto.
                  <span className="block text-green-500">
                    Build your future.
                  </span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
                  Discover the world of digital assets, explore crypto
                  opportunities and manage your portfolio with confidence. Your
                  crypto investment journey starts here.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Pressable>
                    <Link
                      href="/register"
                      className="block rounded-lg bg-green-500 px-7 py-3.5 font-semibold text-black transition-colors hover:bg-green-400"
                    >
                      Get Started <span className="ml-2">→</span>
                    </Link>
                  </Pressable>

                  <Pressable>
                    <Link
                      href="#features"
                      className="block rounded-lg border border-slate-700 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-slate-900"
                    >
                      Explore Platform
                    </Link>
                  </Pressable>
                </div>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-8 text-sm text-slate-500">
                  Explore digital assets. Understand the risks. Invest
                  responsibly.
                </p>
              </StaggerItem>
            </Stagger>

            {/* Right: portfolio card slides in, then floats gently */}
            <FadeIn
              x={48}
              y={0}
              delay={0.35}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="absolute -inset-10 rounded-full bg-green-500/10 blur-3xl" />

              <Float>
                <div className="relative rounded-3xl border border-white/10 bg-[#101510] p-6 shadow-2xl sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        Sample crypto portfolio
                      </p>
                      <p className="mt-2 text-3xl font-bold">$24,850.00</p>
                    </div>

                    <div className="rounded-xl bg-green-500/10 px-3 py-2 text-sm font-semibold text-green-400">
                      +8.42%
                    </div>
                  </div>

                  {/* Bars grow from zero */}
                  <AnimatedBars heights={chartHeights} />

                  <div className="mt-5 flex justify-between border-b border-white/10 pb-6 text-xs text-slate-500">
                    <span>MON</span>
                    <span>TUE</span>
                    <span>WED</span>
                    <span>THU</span>
                    <span>FRI</span>
                    <span>SAT</span>
                    <span>SUN</span>
                  </div>

                  {/* Crypto assets, rows appear one by one */}
                  <div className="mt-6">
                    <div className="mb-5 flex items-center justify-between">
                      <h3 className="font-semibold">Popular assets</h3>
                      <span className="text-xs text-slate-500">
                        Explore crypto
                      </span>
                    </div>

                    <Stagger inView className="space-y-5">
                      <StaggerItem>
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
                      </StaggerItem>

                      <StaggerItem>
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
                      </StaggerItem>

                      <StaggerItem>
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
                      </StaggerItem>
                    </Stagger>
                  </div>
                </div>
              </Float>
            </FadeIn>
          </div>
        </section>

        {/* Lower sections fade up as they scroll into view */}
        <FadeIn inView>
          <FeaturesSection />
        </FadeIn>
        <FadeIn inView>
          <SpotlightSection />
        </FadeIn>
        <FadeIn inView>
          <HowItWorksSection />
        </FadeIn>

        <PackagesSection />
      </main>
    </MotionProvider>

    
  );
}
