"use client";

import { motion } from "framer-motion";

export function GeneratorMock() {
  const tiles = [
    { id: 1, label: "ek aurat", tone: "#5C1B1B" },
    { id: 2, label: "ash & verse", tone: "#3F1010" },
    { id: 3, label: "the broken kursi", tone: "#7A2A2A" },
    { id: 4, label: "smoke", tone: "#2C211B" },
    { id: 5, label: "qalam", tone: "#534239" },
  ];

  return (
    <div className="paper border border-ink/40 relative shadow-[8px_10px_0_0_rgba(26,19,16,0.15)] p-4 sm:p-5 md:p-7">
      {/* window chrome — like a printer's proof sheet */}
      <div className="flex items-center justify-between border-b border-ink/40 pb-3 mb-4 sm:mb-5 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="block w-2.5 h-2.5 rounded-full bg-oxblood flex-shrink-0" />
          <span className="block w-2.5 h-2.5 rounded-full bg-gilt flex-shrink-0" />
          <span className="block w-2.5 h-2.5 rounded-full bg-teal-forgotten flex-shrink-0" />
          <span className="kicker text-ink/60 ml-2 sm:ml-3 truncate text-[0.55rem] sm:text-[0.62rem]">/atelier/proof-sheet — jaun.elia</span>
        </div>
        <span className="kicker text-ink/50 flex-shrink-0 text-[0.55rem] sm:text-[0.62rem]">RUN #00417</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        {tiles.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative aspect-[3/4] border border-ink/40 overflow-hidden flex items-end p-3"
            style={{
              background: `linear-gradient(160deg, ${t.tone} 0%, #1A1310 100%)`,
            }}
          >
            <div className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' /></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
              }}
            />
            {/* abstract poetic mark */}
            <svg className="absolute inset-0 m-auto opacity-80" viewBox="0 0 100 100" width="70%">
              {i === 0 && (
                <g fill="none" stroke="#EDE0CC" strokeWidth="0.6">
                  <circle cx="50" cy="50" r="30" />
                  <path d="M20 50 Q50 10 80 50 T140 50" />
                </g>
              )}
              {i === 1 && (
                <text x="50" y="55" textAnchor="middle" fill="#EDE0CC" fontFamily="serif" fontSize="42" fontStyle="italic">ﺁﮦ</text>
              )}
              {i === 2 && (
                <g fill="none" stroke="#B8943A" strokeWidth="0.6">
                  <rect x="20" y="20" width="60" height="60" />
                  <line x1="20" y1="20" x2="80" y2="80" />
                </g>
              )}
              {i === 3 && (
                <g fill="#EDE0CC" opacity="0.85">
                  <circle cx="35" cy="40" r="2" />
                  <circle cx="60" cy="55" r="3" />
                  <circle cx="50" cy="70" r="1.5" />
                  <path d="M20 80 Q40 60 50 75 T80 70" stroke="#EDE0CC" strokeWidth="0.5" fill="none" />
                </g>
              )}
              {i === 4 && (
                <g fill="none" stroke="#EDE0CC" strokeWidth="0.6">
                  <path d="M30 20 L30 70 Q30 80 40 80 L70 80" />
                  <path d="M30 20 L70 20" strokeDasharray="2 2" />
                </g>
              )}
            </svg>
            <div className="relative z-10 font-display italic text-parchment-100 text-sm">
              <div className="kicker text-[0.55rem] text-parchment-100/70">VBE-001 · DTF</div>
              <div className="mt-0.5">{t.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* meter row */}
      <div className="mt-5 grid sm:grid-cols-3 gap-3 sm:gap-4 font-mono text-[0.7rem] text-ink/80">
        <div className="border border-ink/30 px-3 py-2">
          <div className="kicker text-ink/50">vibe</div>
          <div className="font-display not-italic text-base text-ink">Jaun Elia Melancholy</div>
        </div>
        <div className="border border-ink/30 px-3 py-2">
          <div className="kicker text-ink/50">resolution</div>
          <div className="font-display not-italic text-base text-ink">4500 × 5400 · 300dpi</div>
        </div>
        <div className="border border-ink/30 px-3 py-2 flex items-center justify-between">
          <div>
            <div className="kicker text-ink/50">status</div>
            <div className="font-display not-italic text-base text-ink">ready for press</div>
          </div>
          <span className="kicker bg-oxblood text-parchment-100 px-2 py-1">EXPORT</span>
        </div>
      </div>
    </div>
  );
}
