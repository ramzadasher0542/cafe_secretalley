"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/cafe-data";
import { GALLERY_TILES } from "@/lib/gallery-data";

/**
 * Masonry gallery — CSS column-based layout with varying heights.
 * NO B&W filters — vibrant Kandy colors stay completely untouched.
 * Premium hover:scale-105 micro-interaction on every image.
 *
 * To add photos: edit /src/lib/gallery-data.ts (instructions.md explains how)
 */
export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 sm:py-28 lg:py-32 bg-cream overflow-hidden">
      <div className="absolute top-12 -left-32 w-72 h-72 rounded-full bg-cyan/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -right-32 w-72 h-72 rounded-full bg-sun/25 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="font-chalk text-3xl sm:text-4xl text-wood">come hang out</div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-espresso mt-1">
            THE <span className="paint-underline">VIBE</span>
          </h2>
          <p className="font-chalk text-xl sm:text-2xl text-espresso/60 mt-4">
            alley art · sunshine walls · slow mornings
          </p>
        </div>

        {/* Masonry layout — columns with varying heights, vibrant full-color images */}
        <div className="masonry columns-2 lg:columns-3 xl:columns-4">
          {GALLERY_TILES.map((t, i) => (
            <motion.figure
              key={t.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group bg-espresso mb-3"
            >
              {/* Image — full vibrant color, hover:scale-105 micro-interaction */}
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className={`w-full object-cover hover:scale-105 transition-transform duration-500 ease-out ${
                  t.tall ? "aspect-[3/4]" : t.wide ? "aspect-[4/3]" : "aspect-square"
                }`}
              />
              {/* Soft cream-to-transparent gradient at bottom for caption — NOT a dark overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-espresso/50 to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-3 left-0 right-0 text-center font-chalk text-base sm:text-lg text-cream text-shadow-soft px-2">
                {t.caption}
              </figcaption>
              {/* Corner accent on hover */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 grid place-items-center">
                <ArrowUpRight className="w-4 h-4 text-espresso" />
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-5 bg-espresso text-cream rounded-3xl px-8 py-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all max-w-2xl"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 grid place-items-center shadow-lg">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <div className="font-chalk text-2xl text-sun">
                Follow me and more hidden places...
              </div>
              <div className="font-display text-base text-cream/90 mt-1 flex items-center gap-2 flex-wrap">
                @cafesecretalley
                <span className="inline-flex items-center gap-1 text-cyan">
                  <Heart className="w-3.5 h-3.5 fill-cyan" />
                  {CONTACT.instagramFollowers} followers
                </span>
                <ArrowUpRight className="w-4 h-4 text-cyan" />
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
