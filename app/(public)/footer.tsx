"use client";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FiSend, FiMessageCircle } from "react-icons/fi";

const footerLinks = [
  {
    title: "Invest",
    links: [
      { label: "Cryptocurrencies", href: "#" },
      { label: "Crypto Indices", href: "#" },
      { label: "Stocks & ETFs", href: "#" },
      { label: "Metals", href: "#" },
      { label: "Switch to our platform", href: "#" },
      { label: "Buy Bitcoin (BTC)", href: "#" },
      { label: "Buy Ethereum (ETH)", href: "#" },
      { label: "Buy XRP (XRP)", href: "#" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Cryptocurrency", href: "#" },
      { label: "Investing", href: "#" },
      { label: "Financial planning", href: "#" },
      { label: "Blockchain", href: "#" },
      { label: "Crypto security", href: "#" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Cash Plus", href: "#" },
      { label: "Staking", href: "#" },
      { label: "Community", href: "#" },
      { label: "Savings plan", href: "#" },
      { label: "Card", href: "#" },
      { label: "Tell-a-friend", href: "#" },
      { label: "Affiliate programme", href: "#" },
      { label: "Creators programme", href: "#" },
    ],
  },
];

const companyLinks = [
  { label: "Company", href: "#" },
  { label: "About us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Press", href: "#" },
  { label: "Public policy", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Help", href: "#" },
];

const legalLinks = [
  { label: "Legal notice", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Terms & policies", href: "#" },
  { label: "Whistleblower", href: "#" },
  { label: "Complaints", href: "#" },
  { label: "Bug bounty", href: "#" },
  { label: "Cookie settings", href: "#" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#103f35] px-3 pb-3 pt-3">
      <div className="overflow-hidden rounded-xl bg-black text-white">
        {/* Main footer */}
        <div className="px-8 py-16 md:px-12 lg:px-14 lg:py-20">
          {/* Brand */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight"
          >
            <span className="text-3xl text-green-400">B</span>
            <span>BitTrade.</span>
          </Link>

          {/* Main columns */}
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {/* Invest, Learn, Features */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="mb-6 text-lg font-semibold">{section.title}</h3>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300 transition hover:text-green-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* App downloads */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">Get the app</h3>

              <div className="flex flex-wrap gap-3 lg:flex-col xl:flex-row">
                {/* Google Play */}
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg border border-slate-700 px-4 py-3 transition hover:border-white"
                >
                  <span className="text-2xl text-green-400">▶</span>
                  <span className="leading-tight">
                    <span className="block text-[10px] text-slate-400">
                      GET IT ON
                    </span>
                    <span className="text-sm font-medium">Google Play</span>
                  </span>
                </Link>

                {/* App Store */}
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg border border-slate-700 px-4 py-3 transition hover:border-white"
                >
                  <span className="text-2xl">●</span>
                  <span className="leading-tight">
                    <span className="block text-[10px] text-slate-400">
                      Download on the
                    </span>
                    <span className="text-sm font-medium">App Store</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Company navigation and social media */}
          <div className="mt-20 flex flex-col justify-between gap-8 border-t border-slate-800 pt-8 lg:flex-row lg:items-center">
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <Link href="#" aria-label="Facebook">
                <FaFacebookF
                  size={18}
                  className="transition hover:text-green-400"
                />
              </Link>

              <Link href="#" aria-label="X">
                <span className="text-lg transition hover:text-green-400">
                  𝕏
                </span>
              </Link>

              <Link href="#" aria-label="Telegram">
                <FiSend size={18} className="transition hover:text-green-400" />
              </Link>

              <Link href="#" aria-label="Reddit">
                <FiMessageCircle
                  size={18}
                  className="transition hover:text-green-400"
                />
              </Link>

              <Link href="#" aria-label="LinkedIn">
                <FaLinkedinIn
                  size={18}
                  className="transition hover:text-green-400"
                />
              </Link>

              <Link href="#" aria-label="YouTube">
                <FaYoutube
                  size={18}
                  className="transition hover:text-green-400"
                />
              </Link>

              <Link href="#" aria-label="Instagram">
                <FaInstagram
                  size={18}
                  className="transition hover:text-green-400"
                />
              </Link>
            </div>
          </div>

          {/* Legal links */}
          <div className="mt-10 flex flex-col gap-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="shrink-0 text-sm text-slate-300">
              © {new Date().getFullYear()} Vault. All rights reserved.
            </p>
          </div>

          {/* Press logos */}
          <div className="mt-16 flex flex-wrap items-center gap-10 border-t border-slate-800 pt-10 text-slate-400">
            <span className="text-xl font-bold tracking-tight">Bloomberg</span>

            <span className="text-lg font-black tracking-tight">
              TechCrunch
            </span>

            <span className="text-xl font-black tracking-tight">CNBC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
