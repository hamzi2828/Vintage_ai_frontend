"use client";

import { POETS } from "@/lib/data";

export function PoetsMarquee() {
  const items = [...POETS, ...POETS, ...POETS];
  return (
    <section className="relative border-y-2 border-ink/60 bg-oxblood text-parchment-100 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-oxblood to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-oxblood to-transparent pointer-events-none" />
      <div className="flex whitespace-nowrap animate-ticker py-4 sm:py-6">
        {items.map((p, i) => (
          <span
            key={i}
            className="font-display italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none px-5 sm:px-8 flex items-center gap-5 sm:gap-8"
          >
            {p}
            <span className="text-gilt-50 text-xl sm:text-3xl" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
