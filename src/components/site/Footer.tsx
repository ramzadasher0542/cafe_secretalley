"use client";

import { Coffee, Heart } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/cafe-data";

export function Footer() {
  return (
    <footer className="espresso-texture text-cream pt-16 pb-10 relative overflow-hidden">
      {/* Marquee */}
      <div className="absolute top-0 inset-x-0 overflow-hidden border-b border-cream/10 py-3 bg-sun text-espresso">
        <div className="marquee">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center font-display text-sm sm:text-base tracking-widest uppercase">
              {[
                "Micro-roasted coffee",
                "All-day brunch",
                "Turkish eggs",
                "Brownie shake",
                "Mango lassi",
                "Curated cocktails",
                "Hidden in Kandy",
              ].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="px-6">{t}</span>
                  <Coffee className="w-4 h-4" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand — with logo */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-cyan/40">
                <img
                  src="/images-optimized/logo-nav.webp"
                  alt="Cafe Secret Alley logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-display text-2xl text-sun">SECRET ALLEY</div>
                <div className="font-chalk text-base text-cream/70 -mt-1">kandy · sri lanka</div>
              </div>
            </div>
            <p className="mt-4 text-cream/70 max-w-md text-sm leading-relaxed">
              A vibrant modern Australian–Sri Lankan fusion café hidden in the heart of Kandy.
              Micro-roasted specialty coffee, all-day brunch, and curated cocktails.
            </p>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-cyan text-espresso px-5 py-2.5 rounded-full font-bold text-sm hover:bg-sun transition-colors"
            >
              Get Directions →
            </a>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-widest text-cyan mb-4">Explore</div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/70 hover:text-sun transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-widest text-cyan mb-4">Visit</div>
            <address className="not-italic text-cream/70 text-sm leading-relaxed">
              {CONTACT.address}
              <br />
              <br />
              {CONTACT.hours}
              <br />
              <a href={`tel:${CONTACT.phoneIntl}`} className="hover:text-sun transition-colors">
                {CONTACT.phone}
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} Cafe Secret Alley. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-cyan fill-cyan" /> in Kandy
          </div>
        </div>
      </div>
    </footer>
  );
}
