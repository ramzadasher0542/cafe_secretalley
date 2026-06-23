"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Wallet, Facebook, Instagram, ShoppingBag, Navigation } from "lucide-react";
import { CONTACT } from "@/lib/cafe-data";

export function VisitUs() {
  const cards = [
    {
      icon: MapPin,
      label: "Find Us",
      lines: [CONTACT.address],
      action: { href: CONTACT.mapsUrl, text: "Open in Google Maps" },
      accent: "bg-sun text-espresso",
    },
    {
      icon: Clock,
      label: "Opening Hours",
      lines: ["Open Daily", "7:00 AM – 9:00 PM"],
      accent: "bg-cyan text-espresso",
    },
    {
      icon: Phone,
      label: "Call to Book",
      lines: [CONTACT.phone],
      action: { href: `tel:${CONTACT.phoneIntl}`, text: "Tap to call" },
      accent: "bg-mint text-espresso",
    },
    {
      icon: Wallet,
      label: "Price Range",
      lines: [CONTACT.priceRange, "per person"],
      accent: "bg-espresso text-cream",
    },
  ];

  return (
    <section id="visit" className="relative py-20 sm:py-28 lg:py-32 bg-cream overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-cyan/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-sun/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="font-chalk text-3xl sm:text-4xl text-wood">come say hi</div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-espresso mt-1">
            VISIT <span className="paint-underline paint-underline-cyan">US</span>
          </h2>
          <p className="font-chalk text-xl sm:text-2xl text-espresso/60 mt-4">
            tucked away on E L Senanayake Veediya
          </p>
        </div>

        {/* Info cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-cream-2 rounded-3xl p-6 shadow-md border border-espresso/8 hover:shadow-xl hover:-translate-y-1 hover:border-cyan/40 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${c.accent} grid place-items-center mb-4 shadow-sm`}>
                <c.icon className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-wood mb-2">
                {c.label}
              </div>
              {c.lines.map((l) => (
                <div key={l} className="text-espresso font-semibold leading-snug">
                  {l}
                </div>
              ))}
              {c.action && (
                <a
                  href={c.action.href}
                  target={c.action.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-cyan-deep hover:text-sun-deep transition-colors"
                >
                  {c.action.text}
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map + social split */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl border-4 border-cream-2 min-h-[400px] relative bg-cyan/10"
          >
            <iframe
              title="Cafe Secret Alley location on Google Maps"
              src={CONTACT.mapsEmbed}
              className="w-full h-full min-h-[400px] absolute inset-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          {/* Social + booking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl espresso-texture text-cream p-7 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="font-chalk text-2xl text-sun">stay connected</div>
              <h3 className="font-display text-2xl sm:text-3xl mt-1">FOLLOW THE ALLEY</h3>
              <p className="text-cream/70 mt-3 text-sm leading-relaxed">
                Daily specials, secret menu drops, and behind-the-counter moments.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-cream/10 hover:bg-cyan hover:text-espresso transition-colors rounded-2xl px-4 py-3.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 grid place-items-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">Instagram</div>
                  <div className="text-xs opacity-70">@cafesecretalley · {CONTACT.instagramFollowers}</div>
                </div>
              </a>

              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-cream/10 hover:bg-cyan hover:text-espresso transition-colors rounded-2xl px-4 py-3.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 grid place-items-center">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">Facebook</div>
                  <div className="text-xs opacity-70">/cafesecretalley</div>
                </div>
              </a>

              <a
                href={CONTACT.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-cream/10 hover:bg-cyan hover:text-espresso transition-colors rounded-2xl px-4 py-3.5 group"
              >
                <div className="w-10 h-10 rounded-full bg-green-600 grid place-items-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">UberEats</div>
                  <div className="text-xs opacity-70">Order delivery in Kandy</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
