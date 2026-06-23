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
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-chalk">
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
          <div className="absolute inset-0 bg-gradient-to-t from-chalk/85 via-chalk/25 to-chalk/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-chalk/70 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex flex-col justify-center pt-24 pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-sunshine text-chalk px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-chalk animate-pulse" />
            Kandy · Sri Lanka
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream leading-[0.92] tracking-tight">
            Kandy&rsquo;s Best
            <br />
            Kept <span className="text-sunshine">Secret</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-cream/90 max-w-2xl leading-relaxed font-medium">
            A vibrant modern Australian–Sri Lankan fusion café hidden in the heart of the city.
            <span className="text-sunshine font-bold"> Specialty coffee</span>,
            <span className="text-sunshine font-bold"> all-day brunch</span>, and
            <span className="text-sunshine font-bold"> curated cocktails</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 bg-sunshine text-chalk px-7 py-4 rounded-full font-display text-base tracking-wide shadow-[0_8px_0_0_#C18A0A] hover:shadow-[0_4px_0_0_#C18A0A] hover:translate-y-1 transition-all"
            >
              <Coffee className="w-5 h-5" />
              Explore Menu
            </a>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-cream/10 backdrop-blur-md text-cream border-2 border-cream/60 px-7 py-4 rounded-full font-display text-base tracking-wide hover:bg-cream hover:text-chalk transition-all"
            >
              <MapPin className="w-5 h-5" />
              Find the Alley
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 text-cream/80">
            <div className="font-chalk text-2xl text-sunshine">{SLIDES[i].caption}</div>
            <div className="h-px flex-1 bg-cream/30 max-w-[80px]" />
            <div className="font-chalk text-lg">{SLIDES[i].sub}</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-4 sm:right-8 z-20 flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-11 h-11 rounded-full border-2 border-cream/60 text-cream grid place-items-center hover:bg-sunshine hover:text-chalk hover:border-sunshine transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="font-display text-cream text-sm tracking-widest">
          <span className="text-sunshine">{String(i + 1).padStart(2, "0")}</span>
          <span className="mx-1 opacity-50">/</span>
          <span>{String(SLIDES.length).padStart(2, "0")}</span>
        </div>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-11 h-11 rounded-full border-2 border-cream/60 text-cream grid place-items-center hover:bg-sunshine hover:text-chalk hover:border-sunshine transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-8 left-4 sm:left-8 z-20 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-8 bg-sunshine" : "w-3 bg-cream/50"
            }`}
          />
        ))}
      </div>

      <a
        href="#story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1 text-cream/70 hover:text-sunshine transition-colors"
        aria-label="Scroll to story"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
