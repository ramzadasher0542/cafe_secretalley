"use client";

import { Coffee, Heart } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/cafe-data";

export function Footer() {
  return (
    <footer className="bg-chalk text-cream pt-16 pb-10 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 overflow-hidden border-b border-cream/10 py-3 bg-sunshine text-chalk">
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
          <div className="md:col-span-5">
            <div className="font-display text-2xl text-sunshine">SECRET ALLEY</div>
            <div className="font-chalk text-xl text-cream/70 -mt-1">kandy · sri lanka</div>
            <p className="mt-4 text-cream/70 max-w-md text-sm leading-relaxed">
              A vibrant modern Australian–Sri Lankan fusion café hidden in the heart of Kandy.
              Micro-roasted specialty coffee, all-day brunch, and curated cocktails.
            </p>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-sunshine text-chalk px-5 py-2.5 rounded-full font-bold text-sm hover:bg-sunshine-deep transition-colors"
            >
              Get Directions →
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-widest text-sunshine mb-4">Explore</div>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/70 hover:text-sunshine transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-widest text-sunshine mb-4">Visit</div>
            <address className="not-italic text-cream/70 text-sm leading-relaxed">
              {CONTACT.address}
              <br />
              <br />
              {CONTACT.hours}
              <br />
              <a href={`tel:${CONTACT.phoneIntl}`} className="hover:text-sunshine transition-colors">
                {CONTACT.phone}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} Cafe Secret Alley. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-sunshine fill-sunshine" /> in Kandy
          </div>
        </div>
      </div>
    </footer>
  );
}
