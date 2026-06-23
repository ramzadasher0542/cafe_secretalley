"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin, ArrowDown, Coffee } from "lucide-react";
import { CONTACT } from "@/lib/cafe-data";

const SLIDES = [
  {
    src: "/images-optimized/dashboardpic1.webp",
    alt: "Cafe Secret Alley — hero image 1",
    caption: "The Yellow & Blue Wall",
    sub: "Find the door. Slide in.",
  },
  {
    src: "/images-optimized/dashboardpic2.webp",
    alt: "Cafe Secret Alley — hero image 2",
    caption: "The Interior",
    sub: "Sunshine on the inside too.",
  },
  {
    src: "/images-optimized/dashboardpic3.webp",
    alt: "Cafe Secret Alley — hero image 3",
    caption: "The Alley",
    sub: "Street art, music, and good coffee.",
  },
];

export function Hero() {
  const [i, setI] = useState(0);

  const next = useCallback(() => setI((p) => (p + 1) % SLIDES.length), []);
  const prev = useCallback(() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-espresso">
      {/* === Slides === — NO dark overlays; vibrant photos stay untouched */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.src}
            alt={s.alt}
            className="w-full h-full object-cover"
            style={{
              transform: i === idx ? "scale(1.08)" : "scale(1.0)",
              transition: "transform 6s ease-out",
            }}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* === Content === — text floats on a premium frosted glass card, NO image dimming */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex flex-col justify-center pt-24 pb-28">
        <div className="max-w-2xl">
          {/* Premium Glassmorphic Card */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-[32px] p-8 sm:p-12 shadow-[0_8px_32px_rgba(26,18,11,0.2),inset_0_1px_0_rgba(255,255,255,0.4)] hover-lift">
            {/* Logo prominently featured */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/30 shadow-lg">
                <img
                  src="/images-optimized/logo-nav.webp"
                  alt="Cafe Secret Alley logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-display text-lg text-white text-shadow-soft tracking-wide">SECRET ALLEY</div>
                <div className="font-chalk text-sm text-sun text-shadow-soft">kandy · est. hidden</div>
              </div>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-sun text-espresso px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-espresso animate-pulse" />
              Kandy · Sri Lanka
            </div>

            {/* Headline — white text on glass for maximum contrast without darkening image */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white leading-[0.92] tracking-tight text-shadow-strong">
              Kandy&rsquo;s Best
              <br />
              Kept <span className="text-cyan">Secret</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-white/90 max-w-xl leading-relaxed font-medium text-shadow-soft">
              A vibrant modern Australian–Sri Lankan fusion café hidden in the heart of the city.{" "}
              <span className="font-bold text-sun">Specialty coffee</span>,{" "}
              <span className="font-bold text-cyan-glow">all-day brunch</span>, and{" "}
              <span className="font-bold text-sun">curated cocktails</span>.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#menu"
                className="group inline-flex items-center justify-center gap-2 bg-espresso text-cream px-7 py-4 rounded-full font-display text-base tracking-wide shadow-lg hover:bg-cyan hover:text-espresso hover:-translate-y-1 transition-all duration-300"
              >
                <Coffee className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Explore Menu
              </a>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-cyan text-espresso px-7 py-4 rounded-full font-display text-base tracking-wide shadow-lg hover:bg-sun hover:-translate-y-1 transition-all duration-300"
              >
                <MapPin className="w-5 h-5" />
                Find the Alley
              </a>
            </div>
          </div>

          {/* Caption strip — uses text-shadow for legibility (no overlays) */}
          <div className="mt-6 flex items-center gap-4 text-cream text-shadow-soft">
            <div className="font-chalk text-2xl text-sun">{SLIDES[i].caption}</div>
            <div className="h-px flex-1 bg-cream/40 max-w-[80px]" />
            <div className="font-chalk text-lg">{SLIDES[i].sub}</div>
          </div>
        </div>
      </div>

      {/* Slider controls (desktop) */}
      <div className="absolute bottom-8 right-4 sm:right-8 z-20 flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-11 h-11 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-cream grid place-items-center hover:bg-sun hover:text-espresso transition-colors shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="font-display text-cream text-sm tracking-widest text-shadow-soft">
          <span className="text-sun">{String(i + 1).padStart(2, "0")}</span>
          <span className="mx-1 opacity-60">/</span>
          <span>{String(SLIDES.length).padStart(2, "0")}</span>
        </div>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-11 h-11 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-cream grid place-items-center hover:bg-sun hover:text-espresso transition-colors shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide dots (mobile) */}
      <div className="absolute bottom-8 left-4 sm:left-8 z-20 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-8 bg-sun" : "w-3 bg-cream/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <a
        href="#story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1 text-cream/85 hover:text-sun transition-colors text-shadow-soft"
        aria-label="Scroll to story"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
