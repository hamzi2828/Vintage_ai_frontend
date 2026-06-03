"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrainOverlay, Vignette } from "@/components/GrainOverlay";
import { Stamp } from "@/components/Stamp";
import { Hoodie } from "@/components/Hoodie";
import { Tee } from "@/components/Tee";
import { VIBES } from "@/lib/data";

const TONES = ["melancholic", "playful", "devotional", "wry", "bilingual", "press-formal"];
const GARMENTS = ["Hoodie", "Tee", "Sweatshirt", "5-Panel"];
const VARIATIONS = ["honour", "drift", "wander"];

export default function StudioPage() {
  const [vibeId, setVibeId] = useState(VIBES[0].id);
  const [tone, setTone] = useState("melancholic");
  const [variation, setVariation] = useState("honour");
  const [brief, setBrief] = useState(
    "drop 02 — three colourways. tone: late-night, cigarette in hand, calls unanswered."
  );
  const [garment, setGarment] = useState("Hoodie");
  const [activeProof, setActiveProof] = useState(0);
  const [generating, setGenerating] = useState(false);

  const vibe = useMemo(() => VIBES.find((v) => v.id === vibeId)!, [vibeId]);

  const proofs = useMemo(() => {
    return [0, 1, 2, 3, 4].map((i) => ({
      id: i,
      tone: vibe.palette[i % vibe.palette.length],
      label: vibe.motifs[i % vibe.motifs.length],
    }));
  }, [vibe]);

  const captions = useMemo(() => {
    const tones: Record<string, string[]> = {
      melancholic: [
        `iss tee pe ek ghazal hai, jo abhi tak likhi nahi gayi. ${vibe.name.split(" ")[0]} drop ends sunday, friend.`,
        `for the ones who hum ${vibe.name.split(" ")[0]} under their breath on the rickshaw home — drop 02 lives now.`,
        `worn at midnight, ironed before fajr. a small batch from the atelier.`,
      ],
      playful: [
        `imagine wearing your favourite couplet. now stop imagining. drop 02 is here.`,
        `we put a ghazal on a hoodie. somewhere, ${vibe.name.split(" ")[0]} is laughing.`,
        `for the maker who can't decide between art school and a bus stop tea — both, please.`,
      ],
      devotional: [
        `ek raqs, ek roshni, ek tee. small batch, hand-pressed, devotional in stitch.`,
        `the verse stays close to the heart, where it was always meant to be sewn.`,
        `made slow. worn slower. a quiet offering for drop 02.`,
      ],
      wry: [
        `the perfect tee for telling people you read poetry without actually telling them.`,
        `we asked the AI for ${vibe.name}. it asked us if we'd eaten. drop 02 — soft launch.`,
        `oxblood. cotton. one couplet. zero need to explain yourself.`,
      ],
      bilingual: [
        `${vibe.couplet.line1} — wear it. drop 02 lives.`,
        `ek verse, ek tee, ek shaam — drop 02 from the atelier.`,
        `pre-order khulā hai. press closes sunday raat.`,
      ],
      "press-formal": [
        `Drop 02 of the Vintage AI atelier is now open for pre-order. Limited press of 100.`,
        `A small-batch edition, hand-pressed in Karachi, featuring the ${vibe.name} preset.`,
        `Subscribers receive priority access. Press closes Sunday, midnight PST.`,
      ],
    };
    return tones[tone] ?? tones.melancholic;
  }, [tone, vibe]);

  const description = useMemo(
    () =>
      `Heavyweight 320gsm ${garment.toLowerCase()}, garment-dyed in two rounds of ${vibe.palette[0] === "#3F1010" || vibe.palette[0] === "#5C1B1B" ? "oxblood" : "deep ink"}. The DTF print carries one ${vibe.name.split(" ")[0]} verse across the chest — set in our hand-lettered Nastaliq. Made in Korangi, packed with a bookmark.`,
    [vibe, garment]
  );

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => setGenerating(false), 1400);
  };

  return (
    <main className="relative min-h-screen paper">
      <GrainOverlay opacity={0.28} />
      <Vignette />

      {/* ─── Top bar ─── */}
      <header className="sticky top-0 z-40 border-b-2 border-ink bg-parchment-100/95 backdrop-blur">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-5 md:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3 flex-wrap">
          <Link href="/" className="flex items-baseline gap-2 sm:gap-3">
            <span className="font-display italic text-xl sm:text-2xl text-ink">
              Vintage <span className="text-oxblood">AI</span>
              <span className="text-gilt-100">.</span>
            </span>
            <span className="kicker text-ink/60 hidden sm:inline">/ studio</span>
          </Link>
          <div className="hidden lg:flex items-center gap-2">
            <span className="kicker text-ink/60">RUN</span>
            <span className="font-mono text-ink text-sm">#00418</span>
            <span className="kicker text-ink/40 mx-2">·</span>
            <span className="kicker text-ink/60">SEAT</span>
            <span className="font-mono text-ink text-sm">usman@ucademy</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            <span className="kicker text-ink/60 hidden sm:inline">42 / 100</span>
            <button className="btn-ghost hidden sm:inline-flex">save folio</button>
            <button onClick={handleGenerate} className="btn-press !py-2 !px-3 sm:!px-4 !text-sm">
              {generating ? "pressing…" : "press →"}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-5 md:px-8 py-5 sm:py-6 grid grid-cols-12 gap-4 sm:gap-5">
        {/* ─── LEFT: BRIEF PANEL ─── */}
        <aside className="col-span-12 lg:col-span-3 paper border border-ink/40 p-4 sm:p-5 shadow-[4px_6px_0_0_rgba(26,19,16,0.15)] self-start lg:sticky lg:top-[88px]">
          <div className="kicker text-oxblood mb-1">i. the brief</div>
          <h2 className="font-display italic text-2xl text-ink leading-none">Composer</h2>
          <div className="dotted-rule mt-4 mb-4" />

          {/* VIBE */}
          <label className="kicker text-ink/70 block mb-2">a. cultural preset</label>
          <div className="grid grid-cols-2 gap-2">
            {VIBES.map((v) => (
              <button
                key={v.id}
                onClick={() => setVibeId(v.id)}
                className={`text-left px-2.5 py-2 border transition-all ${
                  vibeId === v.id
                    ? "bg-oxblood text-parchment-100 border-oxblood"
                    : "border-ink/40 hover:border-ink"
                }`}
              >
                <div className={`kicker ${vibeId === v.id ? "text-gilt-50" : "text-ink/55"} text-[0.55rem]`}>
                  {v.serial}
                </div>
                <div className="font-display italic text-[0.95rem] leading-tight">
                  {v.name.split(" ").slice(0, 2).join(" ")}
                </div>
              </button>
            ))}
          </div>

          {/* PALETTE PREVIEW */}
          <div className="mt-4">
            <div className="kicker text-ink/70 mb-1.5">b. palette in use</div>
            <div className="flex border border-ink/30">
              {vibe.palette.map((c, i) => (
                <div
                  key={i}
                  className="flex-1 h-9 relative group"
                  style={{ background: c, borderRight: i < 3 ? "1px solid rgba(26,19,16,0.25)" : "none" }}
                >
                  <span className="absolute inset-x-0 bottom-0 kicker text-[0.5rem] text-parchment-100 mix-blend-difference text-center pb-1">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* TONE */}
          <div className="mt-5">
            <div className="kicker text-ink/70 mb-1.5">c. tone of voice</div>
            <div className="flex flex-wrap gap-1.5">
              {TONES.map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`kicker px-2 py-1 border transition ${
                    tone === t
                      ? "bg-ink text-parchment-100 border-ink"
                      : "border-ink/40 text-ink/75 hover:border-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* VARIATION */}
          <div className="mt-5">
            <div className="kicker text-ink/70 mb-1.5">d. variation</div>
            <div className="grid grid-cols-3 gap-1.5">
              {VARIATIONS.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariation(v)}
                  className={`kicker py-1.5 border transition ${
                    variation === v
                      ? "bg-oxblood text-parchment-100 border-oxblood"
                      : "border-ink/40 text-ink/75 hover:border-ink"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
            <div className="mt-2 h-1 bg-parchment-300">
              <div
                className="h-full bg-oxblood transition-all"
                style={{
                  width:
                    variation === "honour" ? "30%" : variation === "drift" ? "60%" : "90%",
                }}
              />
            </div>
          </div>

          {/* BRIEF TEXT */}
          <div className="mt-5">
            <div className="kicker text-ink/70 mb-1.5">e. the brief</div>
            <textarea
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              rows={4}
              className="w-full bg-parchment-50 border border-ink/40 p-3 font-display italic text-ink text-[1rem] leading-snug focus:outline-none focus:border-oxblood"
            />
          </div>

          {/* GARMENT */}
          <div className="mt-5">
            <div className="kicker text-ink/70 mb-1.5">f. garment for proof</div>
            <div className="grid grid-cols-2 gap-1.5">
              {GARMENTS.map((g) => (
                <button
                  key={g}
                  onClick={() => setGarment(g)}
                  className={`kicker py-1.5 border transition ${
                    garment === g
                      ? "bg-ink text-parchment-100 border-ink"
                      : "border-ink/40 text-ink/75 hover:border-ink"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="dotted-rule my-5" />
          <button
            onClick={handleGenerate}
            className="btn-press w-full justify-center"
          >
            {generating ? "the press is running…" : "press the run →"}
          </button>
          <p className="kicker text-ink/45 text-center mt-3">
            COST · 1 RUN · 5 PROOFS · 3 CAPTIONS
          </p>
        </aside>

        {/* ─── CENTER: CANVAS ─── */}
        <section className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-5">
          {/* run header */}
          <div className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.15)]">
            <div className="px-5 py-3 border-b border-ink/40 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <span className="block w-2.5 h-2.5 rounded-full bg-oxblood" />
                <span className="block w-2.5 h-2.5 rounded-full bg-gilt" />
                <span className="block w-2.5 h-2.5 rounded-full bg-teal-forgotten" />
                <span className="kicker text-ink/60 ml-2">
                  /proof-sheet / {vibe.id} / {tone}
                </span>
              </div>
              <Stamp label={generating ? "PRESSING" : "READY"} rotate={-3} color={generating ? "gilt" : "oxblood"} />
            </div>

            {/* selected proof — large */}
            <div className="p-4 sm:p-5 grid grid-cols-12 gap-4 sm:gap-5">
              <div className="col-span-12 md:col-span-7">
                <div className="kicker text-ink/60 mb-2">PROOF · {String(activeProof + 1).padStart(2, "0")} / 05</div>
                <motion.div
                  key={`${vibe.id}-${activeProof}-${generating}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                  className="relative aspect-square border border-ink/40 overflow-hidden"
                  style={{
                    background: `linear-gradient(160deg, ${proofs[activeProof].tone} 0%, #1A1310 100%)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-10 text-center">
                    {vibe.urdu && (
                      <div className="urdu text-parchment-100 text-5xl sm:text-7xl md:text-8xl leading-none mb-3 sm:mb-4">
                        {vibe.urdu}
                      </div>
                    )}
                    <div className="font-display italic text-parchment-100 text-lg sm:text-2xl md:text-3xl leading-snug max-w-md">
                      "{vibe.couplet.line1}"
                    </div>
                    <div className="mt-3 kicker text-parchment-100/70">
                      {vibe.serial} · {proofs[activeProof].label} · {variation}
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 kicker text-parchment-100/60">
                    4500×4500 · 300DPI · DTF-READY
                  </div>
                </motion.div>

                {/* proof actions */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <button className="btn-ghost">↓ export PNG</button>
                  <button className="btn-ghost">↻ regenerate</button>
                  <button className="btn-ghost">✶ favourite</button>
                  <button className="btn-ghost">→ send to printer</button>
                </div>
              </div>

              {/* thumbnail strip */}
              <div className="col-span-12 md:col-span-5">
                <div className="kicker text-ink/60 mb-2">FIVE PROOFS · this run</div>
                <div className="grid grid-cols-2 gap-2">
                  {proofs.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => setActiveProof(i)}
                      className={`relative aspect-square border-2 transition ${
                        activeProof === i ? "border-oxblood" : "border-ink/30 hover:border-ink"
                      }`}
                      style={{
                        background: `linear-gradient(160deg, ${p.tone} 0%, #1A1310 100%)`,
                      }}
                    >
                      <span className="absolute top-1 left-1.5 kicker text-parchment-100/80 text-[0.5rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute bottom-1 right-1.5 kicker text-parchment-100/80 text-[0.5rem]">
                        {p.label}
                      </span>
                    </button>
                  ))}
                  <div className="aspect-square border-2 border-dashed border-ink/40 flex items-center justify-center text-ink/60 font-display italic">
                    + add
                  </div>
                </div>

                {/* meters */}
                <div className="mt-4 space-y-2 font-mono text-[0.7rem]">
                  <div className="flex justify-between"><span>preset fidelity</span><span>0.92</span></div>
                  <div className="h-1 bg-parchment-300"><div className="h-full bg-oxblood" style={{ width: "92%" }} /></div>
                  <div className="flex justify-between"><span>print-readiness</span><span>0.98</span></div>
                  <div className="h-1 bg-parchment-300"><div className="h-full bg-teal-forgotten" style={{ width: "98%" }} /></div>
                  <div className="flex justify-between"><span>cultural register</span><span>0.88</span></div>
                  <div className="h-1 bg-parchment-300"><div className="h-full bg-gilt" style={{ width: "88%" }} /></div>
                </div>
              </div>
            </div>
          </div>

          {/* MOCKUP — center bottom */}
          <div className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.15)] p-4 sm:p-5">
            <div className="flex items-start sm:items-center justify-between gap-3 mb-3 flex-wrap">
              <div>
                <div className="kicker text-oxblood">iii. the mockup visualizer</div>
                <h3 className="font-display italic text-xl sm:text-2xl text-ink leading-tight mt-1">
                  the proof on the {garment.toLowerCase()}
                </h3>
              </div>
              <div className="flex gap-1.5">
                {["#3F1010", "#1A1310", "#EDE0CC", "#3A5A56"].map((c) => (
                  <button
                    key={c}
                    className="w-7 h-7 border border-ink/40"
                    style={{ background: c }}
                    aria-label={`colour ${c}`}
                  />
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 items-end">
              <div className="bg-parchment-50 border border-ink/30 p-3 sm:p-4 max-w-sm mx-auto sm:max-w-none">
                {garment === "Hoodie" ? (
                  <Hoodie bodyColor={vibe.palette[0]} printText={vibe.urdu?.[0] || "ﺁﮦ"} printSub={vibe.id} printColor={vibe.palette[3]} />
                ) : (
                  <Tee
                    bodyColor={vibe.palette[3]}
                    printSvg={
                      <g>
                        <text x="80" y="86" textAnchor="middle" fill={vibe.palette[0]} fontFamily="serif" fontSize="42" fontStyle="italic">
                          {vibe.urdu || "آہ"}
                        </text>
                        <text x="80" y="148" textAnchor="middle" fill={vibe.palette[0]} fontFamily="var(--font-jetbrains)" fontSize="6" letterSpacing="4">
                          {vibe.serial}
                        </text>
                      </g>
                    }
                  />
                )}
              </div>
              <div className="space-y-2">
                <div className="kicker text-ink/60">specs</div>
                <div className="font-body text-ink text-[1rem] leading-snug">
                  {description}
                </div>
                <div className="pt-3 border-t border-dashed border-ink/40 grid grid-cols-2 gap-2 font-mono text-[0.7rem]">
                  <div><span className="text-ink/50">FABRIC</span> 320gsm cotton</div>
                  <div><span className="text-ink/50">PRESS</span> DTF · transparent</div>
                  <div><span className="text-ink/50">SIZES</span> S — XXL</div>
                  <div><span className="text-ink/50">MADE</span> Korangi, Karachi</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── RIGHT: POET'S PEN ─── */}
        <aside className="col-span-12 lg:col-span-3 space-y-4 sm:space-y-5">
          <div className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.15)] p-5 ruled">
            <div className="kicker text-oxblood mb-1">ii. the poet's pen</div>
            <h2 className="font-display italic text-2xl text-ink leading-none">Copy, in your tone</h2>
            <div className="dotted-rule my-3" />

            <div className="kicker text-ink/60 mb-2">tone · {tone}</div>

            <AnimatePresence mode="popLayout">
              {captions.map((c, i) => (
                <motion.div
                  key={`${tone}-${i}`}
                  layout
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="mb-4"
                >
                  <div className="kicker text-ink/55 mb-1">caption · {String(i + 1).padStart(2, "0")}</div>
                  <p className="font-display italic text-[1.05rem] leading-snug text-ink">
                    "{c}"
                  </p>
                  <div className="flex gap-2 mt-2">
                    <button className="kicker text-[0.55rem] border border-ink/40 px-1.5 py-0.5 hover:bg-ink hover:text-parchment-100 transition">copy</button>
                    <button className="kicker text-[0.55rem] border border-ink/40 px-1.5 py-0.5 hover:bg-ink hover:text-parchment-100 transition">↻</button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <div className="dotted-rule my-3" />

            <div className="kicker text-ink/60 mb-2">product description</div>
            <p className="font-body italic text-ink/85 text-[1rem] leading-snug">
              {description}
            </p>

            <div className="mt-4 flex gap-2">
              <button className="btn-ghost flex-1 justify-center !text-[0.6rem]">↻ regenerate all</button>
              <button className="btn-ghost flex-1 justify-center !text-[0.6rem]">↓ export .txt</button>
            </div>
          </div>

          <div className="paper border border-ink/40 p-5 bg-ink text-parchment-100 shadow-[4px_6px_0_0_rgba(26,19,16,0.15)]">
            <div className="kicker text-gilt-50 mb-2">iv. handoff</div>
            <h3 className="font-display italic text-xl leading-none">to a press</h3>
            <p className="font-body italic text-parchment-100/80 text-sm mt-2">
              One-click handoff to a verified Karachi DTF printer. Files, sizes, count, address.
            </p>
            <button className="btn-ghost mt-4 w-full justify-center !text-parchment-100 !border-parchment-100/60 hover:!bg-parchment-100 hover:!text-ink">
              send to print partner →
            </button>
          </div>
        </aside>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-5 md:px-8 py-5 sm:py-6 border-t border-ink/30 mt-6 sm:mt-8 flex flex-wrap items-center gap-3 justify-between">
        <span className="kicker text-ink/55 text-[0.55rem] sm:text-[0.62rem]">VINTAGE-AI ATELIER · MMXXVI · KARACHI</span>
        <span className="font-display italic text-ink/70 text-sm sm:text-base hidden md:inline">
          "the press is open, friend — pull up a chair."
        </span>
        <Link href="/" className="kicker text-ink/55 hover:text-oxblood text-[0.55rem] sm:text-[0.62rem]">← back to the front page</Link>
      </div>
    </main>
  );
}
