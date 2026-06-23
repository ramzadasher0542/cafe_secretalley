"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { MENU, CONTACT } from "@/lib/cafe-data";

const TAG_STYLES: Record<string, string> = {
  signature: "bg-sun text-espresso",
  veg: "bg-mint text-espresso",
  spicy: "bg-[#C8362A] text-cream",
  new: "bg-cyan text-espresso",
};

/**
 * Bento box grid — asymmetric layout.
 * Caffeine Supply spans 2 rows (tall left card).
 * To restructure, edit the className strings on each motion.div below.
 */
export function MenuSection() {
  // Find each category once for the bento layout
  const caffeine = MENU.find((c) => c.id === "caffeine-supply")!;
  const smoothie = MENU.find((c) => c.id === "smoothie-bowls")!;
  const breakfast = MENU.find((c) => c.id === "all-day-breakfast")!;
  const cakes = MENU.find((c) => c.id === "cakes-and-bakes")!;
  const drinks = MENU.find((c) => c.id === "drinks")!;

  const renderCard = (cat: typeof caffeine, accent: string) => (
    <div className="relative h-full rounded-3xl slate-texture p-6 sm:p-7 overflow-hidden hover:border-cyan/40 transition-colors border border-cream/10">
      {/* Category header */}
      <div className="mb-5 pb-4 border-b border-dashed border-cream/20 relative z-10">
        <h3 className="font-display text-2xl sm:text-3xl tracking-wide" style={{ color: accent }}>
          {cat.title}
        </h3>
        <p className="font-chalk text-lg text-cream/65 mt-1">{cat.subtitle}</p>
      </div>

      {/* Items */}
      <ul className="space-y-4 relative z-10">
        {cat.items.map((item) => (
          <li key={item.name} className="group/item">
            <div className="flex items-baseline gap-2">
              <span className="font-chalk text-lg sm:text-xl text-cream group-hover/item:text-sun transition-colors">
                {item.name}
              </span>
              <span className="flex-1 border-b border-dotted border-cream/30 translate-y-[-3px]" />
              {item.price && (
                <span className="font-display text-lg text-sun whitespace-nowrap">
                  {item.price}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              {item.tag && (
                <span
                  className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    TAG_STYLES[item.tag]
                  }`}
                >
                  {item.tag}
                </span>
              )}
              {item.note && (
                <span className="font-script text-base text-cream/55">{item.note}</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Corner doodle */}
      <div className="absolute -top-2 -right-2 font-chalk text-sun/30 text-4xl rotate-12 select-none pointer-events-none">
        ✦
      </div>
    </div>
  );

  return (
    <section id="menu" className="relative py-20 sm:py-28 lg:py-32 espresso-texture overflow-hidden">
      {/* Top edge — dripping paint in cyan */}
      <div className="absolute top-0 inset-x-0 h-8 bg-cyan">
        <svg className="absolute -bottom-1 inset-x-0 w-full h-4 text-cyan" viewBox="0 0 1200 20" preserveAspectRatio="none">
          <path
            d="M0,0 L1200,0 L1200,10 C1100,18 1050,4 950,12 C850,20 780,4 680,14 C580,24 520,4 420,12 C320,20 250,4 150,14 C100,18 50,8 0,12 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="font-chalk text-3xl sm:text-4xl text-sun">today&rsquo;s specials</div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-cream mt-1">
            THE <span className="text-cyan">MENU</span>
          </h2>
          <p className="font-chalk text-xl sm:text-2xl text-cream/70 mt-4">
            written on the wall · served with a smile
          </p>
        </div>

        {/* Bento box grid — asymmetric, Caffeine Supply spans 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[minmax(220px,auto)]">
          {/* Caffeine Supply — spans 2 rows on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-1 lg:row-span-2"
          >
            {renderCard(caffeine, "#42D2E0")}
          </motion.div>

          {/* Smoothie Bowls — top middle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            {renderCard(smoothie, "#FEF852")}
          </motion.div>

          {/* All Day Breakfast — top right (wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            {renderCard(breakfast, "#83E3B3")}
          </motion.div>

          {/* Cakes & Bakes — bottom middle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-1"
          >
            {renderCard(cakes, "#FEF852")}
          </motion.div>

          {/* Drinks — bottom right (wide) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            {renderCard(drinks, "#42D2E0")}
          </motion.div>
        </div>

        {/* Footer note + CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="font-chalk text-xl sm:text-2xl text-cream/70 mb-6">
            Prices are in LKR. A 10% service charge applies.
          </p>
          <a
            href={CONTACT.ubereats}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sun text-espresso px-8 py-4 rounded-full font-display text-base sm:text-lg tracking-wide shadow-[0_8px_0_0_#C8B500] hover:shadow-[0_4px_0_0_#C8B500] hover:translate-y-1 transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Order on UberEats
          </a>
          <p className="font-chalk text-base text-cream/50 mt-4">
            or just walk in — we&rsquo;ll brew you something nice
          </p>
        </div>
      </div>
    </section>
  );
}
