"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { MENU, CONTACT } from "@/lib/cafe-data";

const TAG_STYLES: Record<string, string> = {
  signature: "bg-sunshine text-chalk",
  veg: "bg-green-600 text-cream",
  spicy: "bg-red-600 text-cream",
  new: "bg-street text-cream",
};

export function MenuSection() {
  return (
    <section id="menu" className="relative py-20 sm:py-28 lg:py-32 chalkboard overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-8 bg-sunshine">
        <svg className="absolute -bottom-1 inset-x-0 w-full h-4 text-sunshine" viewBox="0 0 1200 20" preserveAspectRatio="none">
          <path
            d="M0,0 L1200,0 L1200,10 C1100,18 1050,4 950,12 C850,20 780,4 680,14 C580,24 520,4 420,12 C320,20 250,4 150,14 C100,18 50,8 0,12 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="font-chalk text-3xl sm:text-4xl text-sunshine">today&rsquo;s specials</div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-cream mt-1">
            THE <span className="text-sunshine">MENU</span>
          </h2>
          <p className="font-chalk text-xl sm:text-2xl text-cream/70 mt-4">
            written on the wall · served with a smile
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MENU.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            >
              <div className="relative h-full rounded-3xl border-2 border-cream/15 bg-chalk/60 backdrop-blur-sm p-6 sm:p-7 hover:border-sunshine/40 transition-colors">
                <div className="mb-5 pb-4 border-b border-dashed border-cream/20">
                  <h3 className="font-display text-2xl sm:text-3xl text-sunshine tracking-wide">
                    {cat.title}
                  </h3>
                  <p className="font-chalk text-lg text-cream/60 mt-1">{cat.subtitle}</p>
                </div>

                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item.name} className="group/item">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-cream text-base sm:text-lg group-hover/item:text-sunshine transition-colors">
                          {item.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-cream/30 translate-y-[-3px]" />
                        {item.price && (
                          <span className="font-display text-base sm:text-lg text-sunshine whitespace-nowrap">
                            {item.price}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
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
                          <span className="font-chalk text-base text-cream/55">{item.note}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="absolute -top-2 -right-2 font-chalk text-sunshine/30 text-4xl rotate-12 select-none pointer-events-none">
                  ✦
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="font-chalk text-xl sm:text-2xl text-cream/70 mb-6">
            Prices are in LKR. A 10% service charge applies.
          </p>
          <a
            href={CONTACT.ubereats}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sunshine text-chalk px-8 py-4 rounded-full font-display text-base sm:text-lg tracking-wide shadow-[0_8px_0_0_#C18A0A] hover:shadow-[0_4px_0_0_#C18A0A] hover:translate-y-1 transition-all"
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
