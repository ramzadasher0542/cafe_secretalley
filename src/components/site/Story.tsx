"use client";

import { motion } from "framer-motion";
import { Leaf, Coffee, Music, Clock } from "lucide-react";

export function Story() {
  return (
    <section id="story" className="relative py-20 sm:py-28 lg:py-32 bg-cream overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sunshine/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-street/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-20">
          <div className="font-chalk text-3xl sm:text-4xl text-wood">our little story</div>
          <h2 className="font-display text-4xl sm:text-6xl text-street mt-1">
            The <span className="paint-underline">Secret Alley</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl rotate-[-2deg]">
                <img
                  src="/images-optimized/dashboard.webp"
                  alt="Wooden counter with chalkboard menu and pineapple decor at Cafe Secret Alley"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-street/30 via-transparent to-sunshine/20 mix-blend-multiply" />
              </div>

              <div className="absolute -bottom-10 -right-6 sm:-right-10 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-xl rotate-[4deg] border-4 border-cream float-medium">
                <img
                  src="/images-optimized/chalkboard.webp"
                  alt="Chalkboard menu showing Americano for 350 LKR"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>

              <div className="absolute -top-6 -left-4 sm:-left-8 bg-sunshine text-chalk rounded-full w-24 h-24 sm:w-28 sm:h-28 grid place-items-center text-center shadow-xl rotate-[-8deg] float-slow">
                <div>
                  <div className="font-display text-2xl sm:text-3xl leading-none">350</div>
                  <div className="font-chalk text-xs sm:text-sm -mt-1">LKR · Americano</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6"
          >
            <p className="text-xl sm:text-2xl text-street font-medium leading-relaxed">
              Secret Alley is a modern Australian–Sri Lankan fusion café tucked away in Kandy&rsquo;s
              colorful streets. We serve{" "}
              <span className="bg-sunshine/40 px-1.5 rounded">micro-roasted specialty coffee</span>{" "}
              alongside all-day breakfast, brunch, lunch, and dinner.
            </p>
            <p className="mt-5 text-base sm:text-lg text-street/70 leading-relaxed">
              From our chalkboard menus to our vibrant walls, we invite you to grab a seat, enjoy the
              tunes, and stay a while. Come for the coffee, stay for the alley.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Coffee, label: "Micro-roasted", sub: "In-house beans" },
                { icon: Leaf, label: "All-day brunch", sub: "7am – close" },
                { icon: Music, label: "Good tunes", sub: "Always on" },
                { icon: Clock, label: "Stay a while", sub: "No rush" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="bg-white rounded-2xl p-4 border border-street/10 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
                >
                  <f.icon className="w-5 h-5 text-street mb-2" />
                  <div className="font-bold text-sm text-street">{f.label}</div>
                  <div className="text-xs text-wood mt-0.5">{f.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
