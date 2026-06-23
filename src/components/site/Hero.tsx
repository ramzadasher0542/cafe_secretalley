"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin, ArrowDown, Coffee } from "lucide-react";
import { CONTACT } from "@/lib/cafe-data";

const SLIDES = [
  {
    src: "/images-optimized/hero-exterior.webp",
    alt: "Outdoor blue wall with large yellow SECRET text at Cafe Secret Alley",
    caption: "The Yellow & Blue Wall",
    sub: "Find the door. Slide in.",
  },
  {
    src: "/images-optimized/hero-interior.webp",
    alt: "Bright yellow cafe interior with wooden accents",
    caption: "The Interior",
    sub: "Sunshine on the inside too.",
  },
  {
    src: "/images-optimized/alley-minions.webp",
    alt: "Colorful artsy alleyway with vibrant street art at Cafe Secret Alley",
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

      {/* === Content === — text floats on a frosted glass card, NO image dimming */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex flex-col justify-center pt-24 pb-28">
        <div className="max-w-2xl">
          {/* Glass card */}
          <div className="glass rounded-[28px] p-7 sm:p-10 hover-lift">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-sun text-espresso px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-espresso animate-pulse" />
              Kandy · Sri Lanka
            </div>

            {/* Headline — dark text on the light glass card = readable without dimming image */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-espresso leading-[0.92] tracking-tight">
              Kandy&rsquo;s Best
              <br />
              Kept <span className="text-cyan-deep">Secret</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg text-espresso/85 max-w-xl leading-relaxed font-medium">
              A vibrant modern Australian–Sri Lankan fusion café hidden in the heart of the city.{" "}
              <span className="font-bold text-espresso">Specialty coffee</span>,{" "}
              <span className="font-bold text-espresso">all-day brunch</span>, and{" "}
              <span className="font-bold text-espresso">curated cocktails</span>.
            </p>

            {/* CTAs — hover-lift on primary */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
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
          className="w-11 h-11 rounded-full glass text-cream grid place-items-center hover:bg-sun hover:text-espresso transition-colors"
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
          className="w-11 h-11 rounded-full glass text-cream grid place-items-center hover:bg-sun hover:text-espresso transition-colors"
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
