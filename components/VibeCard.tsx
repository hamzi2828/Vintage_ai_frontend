"use client";

import { motion } from "framer-motion";
import { Vibe } from "@/lib/data";

export function VibeCard({ vibe, index }: { vibe: Vibe; index: number }) {
  const rotate = (index % 2 === 0 ? -1 : 1) * (0.6 + (index % 3) * 0.4);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ rotate: 0, y: -6, transition: { duration: 0.4 } }}
      style={{ transform: `rotate(${rotate}deg)` }}
      className="paper relative grain border border-ink/40 shadow-[6px_8px_0_0_rgba(26,19,16,0.18)] p-5 sm:p-6 flex flex-col"
    >
      {/* card header — like a library card */}
      <div className="relative z-10 flex items-start justify-between gap-3 border-b border-ink/40 pb-3">
        <div className="min-w-0">
          <div className="kicker text-ink/60 text-[0.55rem] sm:text-[0.62rem]">{vibe.serial} · {vibe.era}</div>
          <h3 className="font-display italic text-[1.35rem] sm:text-[1.5rem] md:text-[1.65rem] leading-tight text-ink mt-1">
            {vibe.name}
          </h3>
        </div>
        {vibe.urdu && (
          <div className="urdu text-xl sm:text-2xl text-oxblood leading-none mt-1 flex-shrink-0">{vibe.urdu}</div>
        )}
      </div>

      {/* palette swatches */}
      <div className="relative z-10 flex mt-4 border border-ink/30">
        {vibe.palette.map((c, i) => (
          <div
            key={i}
            className="flex-1 h-7"
            style={{ background: c, borderRight: i < 3 ? "1px solid rgba(26,19,16,0.25)" : "none" }}
            title={c}
          />
        ))}
      </div>

      <div className="relative z-10 mt-4 font-display italic text-[1.05rem] leading-snug text-ink-soft">
        "{vibe.couplet.line1}<br />
        {vibe.couplet.line2}"
      </div>

      <p className="relative z-10 mt-4 font-body text-[0.98rem] text-ink/80 leading-snug">
        {vibe.blurb}
      </p>

      <div className="relative z-10 mt-5 pt-3 border-t border-dashed border-ink/40 flex flex-wrap gap-1.5">
        {vibe.motifs.map((m) => (
          <span
            key={m}
            className="kicker text-[0.56rem] text-ink/70 border border-ink/30 px-1.5 py-0.5"
          >
            {m}
          </span>
        ))}
      </div>

      {/* corner stamp number */}
      <div
        className="absolute top-3 right-3 z-10 font-display italic text-oxblood/30 text-[3.5rem] leading-none pointer-events-none"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* punch holes left margin */}
      <div className="absolute left-2 top-8 bottom-8 w-2 flex flex-col justify-between pointer-events-none">
        <span className="block w-2 h-2 rounded-full bg-ink/15" />
        <span className="block w-2 h-2 rounded-full bg-ink/15" />
        <span className="block w-2 h-2 rounded-full bg-ink/15" />
      </div>
    </motion.article>
  );
}
