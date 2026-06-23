"use client";

import { useEffect, useState } from "react";
import { Menu, X, Coffee } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/cafe-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.06)] py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="Cafe Secret Alley home">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-street grid place-items-center shadow-md group-hover:rotate-6 transition-transform">
              <Coffee className="w-5 h-5 text-sunshine" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-sunshine border-2 border-cream" />
          </div>
          <div className="leading-none">
            <div className="font-display text-[15px] sm:text-base text-street tracking-wide">
              SECRET ALLEY
            </div>
            <div className="font-chalk text-sm text-wood -mt-0.5">kandy · est. hidden</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3.5 py-2 text-sm font-semibold text-street/80 hover:text-street transition-colors rounded-full hover:bg-sunshine/30"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={CONTACT.ubereats}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-street text-cream px-4 py-2 rounded-full text-sm font-bold hover:bg-street-deep transition-colors shadow-sm"
          >
            Order on UberEats
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-grid place-items-center w-10 h-10 rounded-full bg-street text-sunshine shadow-sm"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-[64px] z-40 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-cream/98 backdrop-blur-md h-full px-6 py-8 flex flex-col gap-2 overflow-y-auto">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-display text-street border-b border-street/10 pb-4 pt-2 hover:text-wood transition-colors"
            >
              <span className="font-chalk text-sunshine-deep text-xl mr-2">0{i + 1}.</span>
              {l.label}
            </a>
          ))}
          <a
            href={CONTACT.ubereats}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 bg-sunshine text-chalk text-center py-4 rounded-2xl font-display text-lg shadow-md"
          >
            Order on UberEats →
          </a>
          <a
            href={`tel:${CONTACT.phoneIntl}`}
            className="text-center text-wood font-semibold pt-2"
          >
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
