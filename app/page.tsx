import Link from "next/link";
import { GrainOverlay, Vignette } from "@/components/GrainOverlay";
import { Nav, TopBar, MarginRail } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Stamp, CircleStamp } from "@/components/Stamp";
import { VibeCard } from "@/components/VibeCard";
import { PoetsMarquee } from "@/components/Marquee";
import { GeneratorMock } from "@/components/GeneratorMock";
import { PoetsPenMock } from "@/components/PoetsPenMock";
import { Hoodie } from "@/components/Hoodie";
import { Tee } from "@/components/Tee";
import { VIBES, ROADMAP, PRICING } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <GrainOverlay opacity={0.32} />
      <Vignette />
      <MarginRail />

      <TopBar />
      <Nav />

      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative paper border-b border-ink/40">
        <div className="absolute inset-0 ledger opacity-30 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 pt-12 pb-20 md:pt-24 md:pb-32 grid md:grid-cols-12 gap-10 relative">
          {/* left — display headline */}
          <div className="md:col-span-8 relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="kicker text-oxblood">Folio 01</span>
              <span className="dotted-rule flex-1 max-w-[160px]" />
              <span className="kicker text-ink/60">an atelier, est. mmxxvi</span>
            </div>

            <h1 className="font-display italic tracking-press text-[2.6rem] xs:text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.2rem] leading-[0.92] text-ink animate-ink-bleed">
              An atelier
              <br />
              for the
              <br />
              <span className="text-oxblood">poet-maker</span>
              <span className="text-gilt-100">.</span>
            </h1>

            <p className="urdu text-2xl sm:text-3xl md:text-4xl text-ink-soft mt-6 md:mt-8 leading-loose max-w-2xl">
              شاعرِ ساز کے لیے ایک کارگاہ — جہاں غزل اور ٹی شرٹ ایک ہی میز پر بنتے ہیں۔
            </p>

            <p className="font-body text-[1.05rem] sm:text-[1.18rem] md:text-[1.32rem] leading-snug text-ink/85 mt-6 md:mt-8 max-w-xl dropcap">
              We bind cultural soul to ready-to-print apparel. Pick a vibe — Jaun Elia melancholy,
              Urdu ghazal classical, minimalist Sufi, monsoon noir — and the atelier returns you
              five DTF-ready graphics, three Instagram captions, a product description, and a
              mockup on the hoodie you'd actually wear.
            </p>

            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
              <Link href="/studio" className="btn-press">
                enter the studio
                <span aria-hidden>↦</span>
              </Link>
              <Link href="#aesthetic-engine" className="btn-ghost">
                see the presets
              </Link>
              <span className="kicker text-ink/55 ml-2 hidden sm:inline">no card · until you ship</span>
            </div>

            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4 md:gap-6">
              <Stamp label="EARLY BIRD" sub="open until week 08" rotate={-3} />
              <Stamp label="HAND-CURATED" sub="six presets" color="ink" rotate={2} />
              <div className="hidden lg:block kicker text-ink/55 max-w-[180px] leading-loose">
                a quarterly press for makers in karachi, lahore and the diaspora.
              </div>
            </div>
          </div>

          {/* right — vintage plate */}
          <div className="md:col-span-4 relative z-10 mt-8 md:mt-0 max-w-sm md:max-w-none mx-auto md:mx-0">
            <div className="relative paper border-2 border-ink p-5 sm:p-6 shadow-[10px_12px_0_0_rgba(26,19,16,0.18)]" style={{ transform: "rotate(2.4deg)" }}>
              <div className="kicker text-ink/60 border-b border-ink/40 pb-2 mb-4">
                Plate I · Frontispiece
              </div>
              <div className="aspect-[3/4] bg-oxblood relative overflow-hidden flex items-center justify-center">
                <svg viewBox="0 0 200 280" className="w-full h-full">
                  <rect width="200" height="280" fill="#5C1B1B" />
                  {/* arabesque frame */}
                  <rect x="12" y="12" width="176" height="256" fill="none" stroke="#B8943A" strokeWidth="0.6" />
                  <rect x="18" y="18" width="164" height="244" fill="none" stroke="#B8943A" strokeWidth="0.3" />
                  {/* large urdu glyph */}
                  <text x="100" y="130" textAnchor="middle" fill="#EDE0CC" fontFamily="serif" fontSize="78" fontStyle="italic">ﻏﺰﻝ</text>
                  <text x="100" y="170" textAnchor="middle" fill="#B8943A" fontFamily="serif" fontSize="14" fontStyle="italic">a private edition</text>
                  <text x="100" y="200" textAnchor="middle" fill="#EDE0CC" fontFamily="var(--font-jetbrains)" fontSize="6" letterSpacing="4">VINTAGE · AI · ATELIER</text>
                  <text x="100" y="250" textAnchor="middle" fill="#EDE0CC" fontFamily="serif" fontSize="9" fontStyle="italic" opacity="0.7">"there is a verse in everyone — we just press it."</text>
                  {/* small ornaments */}
                  <circle cx="100" cy="65" r="4" fill="#B8943A" />
                  <circle cx="100" cy="220" r="4" fill="#B8943A" />
                </svg>
              </div>
              <div className="flex items-end justify-between mt-4">
                <div className="kicker text-ink/60">PLATE · I</div>
                <div className="font-display italic text-ink">no. 001 / 100</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-6">
              <CircleStamp text="HAND PRESSED" inner="VBE" size={100} color="oxblood" className="sm:w-[130px] sm:h-[130px] w-[100px] h-[100px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── POETS MARQUEE ───────────────────────── */}
      <PoetsMarquee />

      {/* ───────────────────────── AESTHETIC ENGINE ───────────────────────── */}
      <section id="aesthetic-engine" className="relative paper border-b border-ink/40 py-16 sm:py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
            <div className="md:col-span-7">
              <div className="kicker text-oxblood mb-3">i. — the aesthetic engine</div>
              <h2 className="font-display italic text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem] lg:text-[4.6rem] leading-[0.95] tracking-press text-ink">
                Six cultural presets.
                <br />
                <span className="text-oxblood">Curated, not generated.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:pl-8 md:border-l border-ink/40">
              <p className="font-body italic text-[1.15rem] leading-snug text-ink/80">
                While the world's tools spit out the same plastic Midjourney pastiche, our engine
                is taught — by hand — the textures, palettes, and verses of the regions it serves.
                Pick a preset; the atelier knows what oxblood means when Jaun is the brief.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="dotted-rule flex-1" />
                <span className="font-display italic text-ink/60">six, for now.</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {VIBES.map((v, i) => (
              <VibeCard key={v.id} vibe={v} index={i} />
            ))}
          </div>

          <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 paper border border-dashed border-ink/40 p-5 md:p-6">
            <span className="font-display italic text-xl sm:text-2xl text-oxblood whitespace-nowrap">Bring your own.</span>
            <p className="font-body text-ink/80 max-w-2xl text-[0.98rem] sm:text-base">
              Studio subscribers can train a private preset on their archive — a particular
              grandmother's embroidery, a dead aunt's ghazal diary, a cassette cover from 1986.
              The engine learns the soul, not the surface.
            </p>
            <Link href="#pricing" className="btn-ghost md:ml-auto whitespace-nowrap">become a subscriber →</Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────── AI DESIGN GENERATOR ───────────────────────── */}
      <section className="relative paper border-b border-ink/40 py-16 sm:py-20 md:py-32 overflow-hidden">
        <div
          className="absolute -left-20 top-10 font-display italic text-[10rem] sm:text-[14rem] md:text-[18rem] text-ink/5 leading-none pointer-events-none select-none"
          aria-hidden
        >02</div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <div className="kicker text-oxblood mb-3">ii. — the design generator</div>
              <h2 className="font-display italic text-[2rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.4rem] leading-[0.95] tracking-press text-ink">
                Five proofs,
                <br />
                pressed at <span className="text-oxblood">300dpi</span>.
              </h2>
              <p className="font-body italic text-[1.1rem] mt-6 text-ink/80 leading-snug">
                Each run returns five DTF-ready graphics — print-resolution, transparent
                background, soft-proofed for cotton blends. Approve, regenerate, refine.
              </p>
              <ul className="mt-8 space-y-3 font-body text-ink/85">
                <li className="flex gap-3"><span className="kicker text-oxblood">·a</span> 4500×5400 px · 300dpi · transparent</li>
                <li className="flex gap-3"><span className="kicker text-oxblood">·b</span> Cotton, polyblend & garment-dye soft-proofs</li>
                <li className="flex gap-3"><span className="kicker text-oxblood">·c</span> Variation control: from "honour the brief" to "wander"</li>
                <li className="flex gap-3"><span className="kicker text-oxblood">·d</span> One-click handoff to a Karachi DTF print partner</li>
              </ul>
            </div>

            <div className="md:col-span-8">
              <GeneratorMock />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── POET'S PEN ───────────────────────── */}
      <section id="poets-pen" className="relative paper border-b border-ink/40 py-16 sm:py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-7 order-2 md:order-1">
              <PoetsPenMock />
            </div>
            <div className="md:col-span-5 order-1 md:order-2 md:pl-6">
              <div className="kicker text-oxblood mb-3">iii. — the poet's pen</div>
              <h2 className="font-display italic text-[2rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] leading-[0.95] tracking-press text-ink">
                Copywriting,
                <br />
                <span className="text-oxblood">in your tone.</span>
              </h2>
              <p className="font-body italic text-[1.15rem] mt-6 text-ink/80 leading-snug">
                Three captions, a product description, a story-tile script — all written in the
                emotional register you've picked. The Pen reads the verse before it reads the
                product.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 font-mono text-[0.72rem]">
                {["melancholic", "playful", "devotional", "wry", "bilingual", "press-formal"].map((t) => (
                  <div key={t} className="border border-ink/40 px-3 py-2 flex items-center justify-between">
                    <span>{t}</span>
                    <span className="text-oxblood">●</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── MOCKUP VISUALIZER ───────────────────────── */}
      <section id="mockup" className="relative paper border-b border-ink/40 py-16 sm:py-20 md:py-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-end mb-10 md:mb-12">
            <div className="md:col-span-7">
              <div className="kicker text-oxblood mb-3">iv. — the mockup visualizer</div>
              <h2 className="font-display italic text-[2rem] sm:text-[2.6rem] md:text-[3.4rem] lg:text-[4.2rem] leading-[0.95] tracking-press text-ink">
                See it on the
                <br />
                <span className="text-oxblood">garment you'd wear.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="font-body italic text-[1.1rem] text-ink/80 leading-snug">
                One-click placement onto hoodies, heavyweight tees, sweatshirts, and 5-panel caps.
                Soft fabric, accurate shadows, oxblood and cream colourways — the proof your customer
                will see before they pay.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="paper border border-ink/40 p-5 shadow-[6px_8px_0_0_rgba(26,19,16,0.18)]">
              <div className="kicker text-ink/60 mb-3 flex justify-between">
                <span>HOODIE · OXBLOOD</span><span>320GSM</span>
              </div>
              <Hoodie bodyColor="#3F1010" printText="ﺁﮦ" printSub="jaun elia" />
              <div className="kicker text-ink/60 mt-2">PLATE 04-A · DROP 01</div>
            </div>

            <div className="paper border border-ink/40 p-5 shadow-[6px_8px_0_0_rgba(26,19,16,0.18)]" style={{ transform: "rotate(-1.4deg)" }}>
              <div className="kicker text-ink/60 mb-3 flex justify-between">
                <span>TEE · PARCHMENT</span><span>240GSM</span>
              </div>
              <Tee
                bodyColor="#EDE0CC"
                printSvg={
                  <g>
                    <circle cx="80" cy="80" r="56" fill="none" stroke="#5C1B1B" strokeWidth="1" />
                    <text x="80" y="86" textAnchor="middle" fill="#5C1B1B" fontFamily="serif" fontSize="38" fontStyle="italic">ﺻﻮﻓﯽ</text>
                    <text x="80" y="158" textAnchor="middle" fill="#5C1B1B" fontFamily="var(--font-jetbrains)" fontSize="6" letterSpacing="4">MINIMALIST · VBE-003</text>
                  </g>
                }
              />
              <div className="kicker text-ink/60 mt-2">PLATE 04-B · DROP 01</div>
            </div>

            <div className="paper border border-ink/40 p-5 shadow-[6px_8px_0_0_rgba(26,19,16,0.18)]" style={{ transform: "rotate(1.6deg)" }}>
              <div className="kicker text-ink/60 mb-3 flex justify-between">
                <span>TEE · MONSOON BLACK</span><span>260GSM</span>
              </div>
              <Tee
                bodyColor="#1A1310"
                printSvg={
                  <g>
                    <g fill="none" stroke="#B8943A" strokeWidth="0.8">
                      <path d="M 10 60 Q 50 10 90 60 T 170 60" />
                      <path d="M 10 80 Q 50 30 90 80 T 170 80" opacity="0.6" />
                      <path d="M 10 100 Q 50 50 90 100 T 170 100" opacity="0.3" />
                    </g>
                    <text x="80" y="140" textAnchor="middle" fill="#EDE0CC" fontFamily="serif" fontSize="22" fontStyle="italic">monsoon, again.</text>
                    <text x="80" y="158" textAnchor="middle" fill="#EDE0CC" fontFamily="var(--font-jetbrains)" fontSize="6" letterSpacing="4">VBE-006 · KARACHI</text>
                  </g>
                }
              />
              <div className="kicker text-ink/60 mt-2">PLATE 04-C · DROP 01</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── COMPETITIVE EDGE ───────────────────────── */}
      <section className="relative bg-ink text-parchment-100 border-b border-ink/40 py-16 sm:py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent 0 18px, rgba(184,148,58,0.2) 18px 19px)",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-2 flex justify-center">
            <CircleStamp text="THE EDGE · THE EDGE" inner="✦" size={120} color="gilt" />
          </div>
          <div className="md:col-span-10">
            <div className="kicker text-gilt-50 mb-3">a marginal note</div>
            <p className="font-display italic text-[1.6rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[3.2rem] leading-[1.1] tracking-press">
              While the rest use generic AI, we are <span className="text-gilt-50">pre-loaded</span> with
              cultural memory. A button reading <span className="text-gilt-50">"Jaun Elia Melancholy"</span> already
              knows what deep red means, which torn paper to choose, which couplet to whisper into
              the seam. <span className="text-parchment-100/60">That specific, curated knowledge —</span>
              that is what makes this <span className="text-gilt-50">ours</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────── ROADMAP / PRESS SCHEDULE ───────────────────────── */}
      <section id="roadmap" className="relative paper border-b border-ink/40 py-16 sm:py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="mb-10 md:mb-14">
            <div className="kicker text-oxblood mb-3">v. — the press schedule</div>
            <h2 className="font-display italic text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem] lg:text-[4.4rem] leading-[0.95] tracking-press text-ink">
              An eight-week run.
            </h2>
            <p className="urdu text-xl sm:text-2xl text-ink-soft mt-4">آٹھ ہفتوں کا ایک طویل خواب</p>
          </div>

          <div className="border-t-2 border-b-2 border-ink relative">
            {ROADMAP.map((r, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-8 border-b border-ink/30 last:border-b-0 py-5 sm:py-7 hover:bg-parchment-50/60 transition-colors"
              >
                <div className="col-span-12 md:col-span-2 kicker text-oxblood">{r.week}</div>
                <div className="col-span-7 md:col-span-3 font-display italic text-[1.4rem] sm:text-[1.7rem] md:text-[2rem] text-ink leading-none">
                  {r.focus}
                </div>
                <div className="col-span-12 md:col-span-5 font-body text-[1rem] sm:text-[1.1rem] text-ink/85 italic order-last md:order-none">
                  {r.deliverable}
                </div>
                <div className="col-span-5 md:col-span-2 flex justify-end">
                  <Stamp label={r.stamp} rotate={(i % 2 === 0 ? -1 : 1) * 5} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <span className="kicker text-ink/60">Beta cohort:</span>
            <span className="font-display italic text-ink text-xl">10 Karachi DTF sellers · free in exchange for a notebook of feedback.</span>
          </div>
        </div>
      </section>

      {/* ───────────────────────── PRICING / SUBSCRIPTION TICKETS ───────────────────────── */}
      <section id="pricing" className="relative paper border-b border-ink/40 py-16 sm:py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-10 md:mb-14">
            <div className="md:col-span-7">
              <div className="kicker text-oxblood mb-3">vi. — become a subscriber</div>
              <h2 className="font-display italic text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem] lg:text-[4.4rem] leading-[0.95] tracking-press text-ink">
                Tear off a ticket.
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="font-body italic text-[1.1rem] text-ink/80 leading-snug">
                Cancel any time the muse leaves you. All plans include hand-pressed templates, the
                press-vendor handoff, and unlimited mockups. Pakistan-local and international
                checkout (Stripe).
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PRICING.map((p, i) => (
              <div
                key={p.name}
                className={`relative paper border-2 ${p.accent ? "border-oxblood bg-oxblood text-parchment-100 sm:col-span-2 md:col-span-1" : "border-ink/50"} p-6 sm:p-7 flex flex-col shadow-[8px_10px_0_0_rgba(26,19,16,0.18)]`}
                style={{ transform: p.accent ? "translateY(-12px)" : `rotate(${i === 0 ? -0.8 : 0.8}deg)` }}
              >
                {/* perforated edge */}
                <div className={`absolute left-0 right-0 top-12 h-px ${p.accent ? "border-t border-dashed border-parchment-100/50" : "border-t border-dashed border-ink/40"}`} />
                {p.stamp && (
                  <div className="absolute -top-4 -right-4">
                    <Stamp label={p.stamp} color="gilt" rotate={6} />
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div>
                    <div className={`kicker ${p.accent ? "text-gilt-50" : "text-oxblood"}`}>plan · {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="font-display italic text-[2rem] leading-none mt-1">{p.name}</h3>
                    <div className={`font-body italic mt-1 ${p.accent ? "text-parchment-100/75" : "text-ink/60"}`}>
                      {p.tag}
                    </div>
                  </div>
                  <div className={`kicker ${p.accent ? "text-parchment-100/70" : "text-ink/50"}`}>no. {1000 + i}</div>
                </div>

                <div className="mt-8 md:mt-10 flex items-baseline gap-2 flex-wrap">
                  <span className="font-display italic text-[2.6rem] sm:text-[3rem] md:text-[3.4rem] leading-none">{p.price}</span>
                  <span className={`font-body ${p.accent ? "text-parchment-100/70" : "text-ink/60"}`}>{p.cadence}</span>
                </div>

                <ul className="mt-8 space-y-2.5 flex-1">
                  {p.feats.map((f) => (
                    <li key={f} className="flex gap-3 font-body">
                      <span className={`mt-2 inline-block w-2 h-2 ${p.accent ? "bg-gilt-50" : "bg-oxblood"} flex-shrink-0`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/studio"
                  className={`mt-8 text-center font-display italic text-lg py-3 border ${
                    p.accent
                      ? "border-parchment-100 text-parchment-100 hover:bg-parchment-100 hover:text-oxblood"
                      : "border-ink text-ink hover:bg-ink hover:text-parchment-100"
                  } transition`}
                >
                  begin →
                </Link>

                <div className={`mt-4 kicker text-center ${p.accent ? "text-parchment-100/55" : "text-ink/45"}`}>
                  THIS TICKET ADMITS ONE MAKER
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── CLOSING COUPLET ───────────────────────── */}
      <section className="relative paper py-20 sm:py-24 md:py-32 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="kicker text-oxblood mb-5 md:mb-6">colophon</div>
          <p className="font-display italic text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.6rem] leading-[1.1] tracking-press text-ink">
            "we are not selling tools.
            <br />
            we are <span className="text-oxblood">opening a press</span> —
            <br />
            and reserving you a chair."
          </p>
          <p className="urdu text-2xl sm:text-3xl text-ink-soft mt-6 md:mt-8">— کارگاہ کی طرف سے</p>
          <Link href="/studio" className="btn-press mt-10 md:mt-12 inline-flex">
            enter the studio
            <span aria-hidden>↦</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
