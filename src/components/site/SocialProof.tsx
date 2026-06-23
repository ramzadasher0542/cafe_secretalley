"use client";

import { motion } from "framer-motion";
import { Star, Clock, Quote } from "lucide-react";
import { CONTACT } from "@/lib/cafe-data";

const REVIEWS = [
  {
    name: "Nethmi P.",
    text: "Found this little gem by accident and ended up staying 3 hours. The flat white was unreal and the brownie shake is dangerous. Will be back tomorrow.",
    role: "Local Guide · 47 reviews",
  },
  {
    name: "James W.",
    text: "Best coffee in Kandy, hands down. The alleyway feels like a slice of Melbourne. Turkish eggs were perfect — runny yolk, chilli butter, proper sourdough.",
    role: "Visited from Australia",
  },
  {
    name: "Aisha R.",
    text: "Came for brunch, stayed for the vibe. The sunshine walls and street art make every corner Instagrammable. The mango lassi is a must.",
    role: "Travel blogger",
  },
];

export function SocialProof() {
  const pct = (CONTACT.rating / 5) * 100;
  return (
    <section id="reviews" className="relative py-20 sm:py-28 lg:py-32 bg-street overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sunshine/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sunshine/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="font-chalk text-3xl sm:text-4xl text-sunshine">kandy loves us</div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-cream mt-1 leading-[0.95]">
              LOVED BY
              <br />
              <span className="text-sunshine">KANDY</span>
            </h2>

            <div className="mt-10 inline-flex flex-col items-start bg-cream/5 backdrop-blur-md border border-cream/15 rounded-3xl p-6 sm:p-8">
              <div className="flex items-end gap-4">
                <div className="font-display text-6xl sm:text-7xl text-sunshine leading-none">
                  {CONTACT.rating.toFixed(1)}
                </div>
                <div className="pb-2">
                  <div className="text-cream/60 text-sm font-bold tracking-widest uppercase">
                    / 5.0
                  </div>
                  <div className="text-cream font-bold text-lg">Star Rating</div>
                </div>
              </div>

              <div className="mt-3 relative inline-block">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="w-7 h-7 text-cream/20" strokeWidth={1.5} />
                  ))}
                </div>
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        className="w-7 h-7 text-sunshine fill-sunshine"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 text-cream/80 text-lg">
                <span className="font-bold text-cream">{CONTACT.reviewCount.toLocaleString()}+</span>{" "}
                Google Reviews
              </div>

              <div className="mt-5 inline-flex items-center gap-2 bg-sunshine text-chalk px-4 py-2 rounded-full font-bold text-sm">
                <Clock className="w-4 h-4" />
                People typically spend {CONTACT.avgStay} here!
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            {REVIEWS.map((r, i) => (
              <motion.blockquote
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-cream rounded-2xl p-6 sm:p-7 shadow-xl"
              >
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-sunshine fill-sunshine" />
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="w-4 h-4 text-sunshine fill-sunshine" />
                  ))}
                </div>
                <p className="text-chalk text-base sm:text-lg leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                <footer className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-street grid place-items-center text-sunshine font-display text-base">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-chalk">{r.name}</div>
                    <div className="text-xs text-wood">{r.role}</div>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
