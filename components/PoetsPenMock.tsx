"use client";

import { motion } from "framer-motion";

const lines = [
  {
    label: "instagram caption · i",
    body: "iss tee pe ek ghazal hai, jo abhi tak likhi nahi gayi. pre-order ends sunday, friend.",
  },
  {
    label: "instagram caption · ii",
    body: "for the ones who hum Jaun under their breath on the rickshaw home — drop 02 lives now.",
  },
  {
    label: "product description",
    body: "Heavyweight 320gsm hoodie, garment-dyed in two rounds of oxblood. The DTF print quietly carries one Jaun couplet across the chest — set in our hand-lettered Nastaliq. Made in Korangi, packed with a bookmark.",
  },
];

export function PoetsPenMock() {
  return (
    <div className="relative ruled paper border border-ink/40 shadow-[8px_10px_0_0_rgba(26,19,16,0.15)] p-5 sm:p-6 md:p-10">
      {/* typewriter top bar */}
      <div className="absolute -top-3 left-8 right-8 h-3 bg-ink rounded-sm flex items-center justify-center">
        <div className="flex gap-1.5">
          {Array.from({ length: 22 }).map((_, i) => (
            <span key={i} className="block w-0.5 h-1.5 bg-parchment-100/60" />
          ))}
        </div>
      </div>

      <div className="kicker text-ink/60 mb-4">FOLIO 02 — THE POET'S PEN, A WORKING DRAFT</div>

      {lines.map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.18, duration: 0.7 }}
          className="mb-6"
        >
          <div className="kicker text-oxblood mb-1">{l.label}</div>
          <p className="font-display italic text-[1.15rem] sm:text-[1.3rem] md:text-[1.55rem] leading-snug text-ink">
            "{l.body}"
            <span className="inline-block w-2.5 h-5 ml-1 bg-ink animate-flicker align-middle" aria-hidden />
          </p>
        </motion.div>
      ))}

      <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-dashed border-ink/40">
        <span className="kicker border border-ink/40 px-2 py-1">tone · melancholic</span>
        <span className="kicker border border-ink/40 px-2 py-1">register · informal urdu-english</span>
        <span className="kicker border border-ink/40 px-2 py-1">length · short</span>
        <span className="kicker bg-ink text-parchment-100 px-2 py-1">↻ regenerate</span>
      </div>
    </div>
  );
}
