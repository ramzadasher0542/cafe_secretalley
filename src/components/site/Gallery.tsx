"use client";

import { motion } from "framer-motion";
import { Instagram, Heart, ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/lib/cafe-data";

type Tile = {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
  wide?: boolean;
};

const TILES: Tile[] = [
  {
    src: "/images-optimized/hero-exterior.webp",
    alt: "Outdoor blue wall with large yellow SECRET text at Cafe Secret Alley",
    caption: "the blue & yellow wall",
    tall: true,
  },
  {
    src: "/images-optimized/hero-interior.webp",
    alt: "Bright yellow cafe interior with wooden accents",
    caption: "the sunshine room",
  },
  {
    src: "/images-optimized/alley-minions.webp",
    alt: "Colorful artsy alleyway with vibrant street art",
    caption: "the alleyway",
    wide: true,
  },
  {
    src: "/images-optimized/foreign-women.webp",
    alt: "Visitor enjoying coffee at Cafe Secret Alley",
    caption: "good company",
  },
  {
    src: "/images-optimized/coffee-cake.webp",
    alt: "Coffee and cake served at Cafe Secret Alley",
    caption: "coffee + cake = love",
    tall: true,
  },
  {
    src: "/images-optimized/sl-women.webp",
    alt: "Friends relaxing inside Cafe Secret Alley",
    caption: "stay a while",
  },
  {
    src: "/images-optimized/baby-visit.webp",
    alt: "Family visit at Cafe Secret Alley in Kandy",
    caption: "kandy moments",
  },
  {
    src: "/images-optimized/chalkboard.webp",
    alt: "Chalkboard menu at Cafe Secret Alley",
    caption: "today&rsquo;s menu",
    wide: true,
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 sm:py-28 lg:py-32 bg-cream overflow-hidden">
      <div className="absolute top-12 -left-32 w-72 h-72 rounded-full bg-street/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 -right-32 w-72 h-72 rounded-full bg-sunshine/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="font-chalk text-3xl sm:text-4xl text-wood">come hang out</div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-street mt-1">
            THE <span className="paint-underline">VIBE</span>
          </h2>
          <p className="font-chalk text-xl sm:text-2xl text-street/60 mt-4">
            alley art · sunshine walls · slow mornings
          </p>
        </div>

        <div className="masonry columns-2 lg:columns-3 xl:columns-4">
          {TILES.map((t, i) => (
            <motion.figure
              key={t.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeOut" }}
              className="polaroid group relative"
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                className={`w-full object-cover rounded-sm ${
                  t.tall ? "aspect-[3/4]" : t.wide ? "aspect-[4/3]" : "aspect-square"
                }`}
              />
              <figcaption className="absolute bottom-2 left-0 right-0 text-center font-chalk text-base sm:text-lg text-chalk">
                {t.caption}
              </figcaption>
              <div className="absolute inset-x-3 top-3 bottom-12 bg-chalk/0 group-hover:bg-chalk/30 transition-colors rounded-sm" />
            </motion.figure>
          ))}
        </div>

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
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-5 bg-street text-cream rounded-3xl px-8 py-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all max-w-2xl"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 grid place-items-center shadow-lg">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <div className="font-chalk text-2xl text-sunshine">
                Follow me and more hidden places...
              </div>
              <div className="font-display text-base text-cream/90 mt-1 flex items-center gap-2">
                @cafesecretalley
                <span className="inline-flex items-center gap-1 text-sunshine">
                  <Heart className="w-3.5 h-3.5 fill-sunshine" />
                  {CONTACT.instagramFollowers} followers
                </span>
                <ArrowUpRight className="w-4 h-4 text-sunshine" />
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
