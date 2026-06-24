"use client";

import { useEffect, useState, useCallback } from "react";
import { CONTACT } from "@/lib/cafe-data";
import "./Hero.css";

const SLIDES = [
  {
    src: "/images-optimized/dashboardpic1.webp",
    alt: "Cafe Secret Alley — vibrant alley with street art and warm lighting",
  },
  {
    src: "/images-optimized/dashboardpic2.webp",
    alt: "Cafe Secret Alley — cozy interior with specialty coffee",
  },
  {
    src: "/images-optimized/dashboardpic3.webp",
    alt: "Cafe Secret Alley — the colorful alley entrance",
  },
];

const INTERVAL = 6000;

export function Hero() {
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((prev) => (prev + 1) % SLIDES.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="top" className="hero">
      {/* Background image layer — crossfade stack */}
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.src}
          className={`hero__slide ${idx === active ? "hero__slide--active" : ""}`}
          aria-hidden={idx !== active}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="hero__image"
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Overlay layer */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Content layer — static, never changes */}
      <div className="hero__content">
        <div className="hero__inner">
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            <span className="hero__badge-text">SECRET ALLEY</span>
          </div>

          {/* Headline */}
          <h1 className="hero__headline">
            KANDY&rsquo;S BEST
            <br />
            KEPT SECRET
          </h1>

          {/* Description */}
          <p className="hero__description">
            Vibrant modern Australian–Sri Lankan fusion with specialty coffee
            and unforgettable brunch.
          </p>

          {/* Buttons */}
          <div className="hero__actions">
            <a href="#menu" className="hero__btn hero__btn--primary">
              Explore Menu
            </a>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--secondary"
            >
              Find The Alley
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
