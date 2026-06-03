"use client";

import { useState } from "react";
import { DashShell } from "@/components/DashShell";
import { Stamp } from "@/components/Stamp";
import { MAKER_NAV } from "@/lib/nav";
import { ME } from "@/lib/dashData";
import { ARCHIVE, COLLECTIONS, ArchiveItem } from "@/lib/makerExtras";

const KINDS = ["All", "scan", "couplet", "swatch", "reference"] as const;

export default function MakerArchivePage() {
  const [kind, setKind] = useState<(typeof KINDS)[number]>("All");
  const [tag, setTag] = useState<string>("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [open, setOpen] = useState<ArchiveItem | null>(null);

  const allTags = Array.from(new Set(ARCHIVE.map((a) => a.tag)));
  const list = ARCHIVE.filter(
    (a) => (kind === "All" || a.kind === kind) && (tag === "All" || a.tag === tag)
  );

  return (
    <DashShell variant="maker" nav={MAKER_NAV} who={ME.name} whoSub={ME.handle} badge={`PLAN · ${ME.plan.toUpperCase()}`}>
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">vii. — your private library</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            The archive.
          </h1>
          <button className="btn-press !py-2.5 !px-4 !text-sm">+ add to archive</button>
        </div>
        <p className="font-body italic text-ink/70 mt-2 max-w-2xl">
          A drawer for what feeds your work — scans, couplets, swatches, references. Use it to train a private preset, or just to remember.
        </p>
      </header>

      {/* MINI STATS */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <Mini label="items in drawer" value={`${ARCHIVE.length}`} sub="across all kinds" />
        <Mini label="scans" value={`${ARCHIVE.filter(a=>a.kind==='scan').length}`} sub="hand-pressed" />
        <Mini label="couplets" value={`${ARCHIVE.filter(a=>a.kind==='couplet').length}`} sub="for the Poet's Pen" />
        <Mini label="collections" value={`${COLLECTIONS.length}`} sub="curated bundles" accent="ink" />
      </section>

      <div className="grid lg:grid-cols-12 gap-5">
        {/* COLLECTIONS RAIL */}
        <aside className="lg:col-span-3 space-y-4 self-start">
          <div className="paper border border-ink/40 shadow-[3px_4px_0_0_rgba(26,19,16,0.12)] p-4">
            <div className="kicker text-oxblood mb-2">your collections</div>
            <div className="space-y-2">
              {COLLECTIONS.map((c) => (
                <button key={c.id} className="w-full text-left flex items-center gap-3 p-2 border border-ink/20 hover:border-ink/50 transition">
                  <div className="w-10 h-10 flex items-center justify-center text-parchment-100 font-display italic flex-shrink-0" style={{ background: c.primary }}>
                    {c.count}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display italic text-ink leading-tight truncate">{c.name}</div>
                    <div className="kicker text-ink/55">{c.id}</div>
                  </div>
                </button>
              ))}
              <button className="w-full p-3 border-2 border-dashed border-ink/40 kicker text-ink/65 hover:border-ink hover:text-ink">
                + new collection
              </button>
            </div>
          </div>

          <div className="paper border border-ink/40 shadow-[3px_4px_0_0_rgba(26,19,16,0.12)] p-4">
            <div className="kicker text-oxblood mb-2">tags</div>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setTag("All")}
                className={`kicker px-2 py-1 border ${tag === "All" ? "bg-ink text-parchment-100 border-ink" : "border-ink/40 text-ink/75"}`}
              >
                all
              </button>
              {allTags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={`kicker px-2 py-1 border ${tag === t ? "bg-ink text-parchment-100 border-ink" : "border-ink/40 text-ink/75"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="paper border-2 border-oxblood bg-oxblood text-parchment-100 p-4 shadow-[4px_6px_0_0_rgba(26,19,16,0.18)] relative">
            <Stamp label="MEHFIL ONLY" color="gilt" rotate={5} className="absolute -top-3 -right-3" />
            <div className="kicker text-gilt-50">train a private preset</div>
            <div className="font-display italic text-xl leading-tight mt-1">
              Feed this archive to the engine.
            </div>
            <p className="font-body italic text-parchment-100/85 mt-2 text-sm">
              We'll tune a private preset on the items you've curated. Mehfil plan, runs in the night.
            </p>
            <button className="mt-4 w-full font-display italic py-2 border border-parchment-100 hover:bg-parchment-100 hover:text-oxblood transition text-sm">
              upgrade & train →
            </button>
          </div>
        </aside>

        {/* MAIN */}
        <section className="lg:col-span-9">
          {/* toolbar */}
          <div className="flex flex-wrap gap-2 mb-5">
            <div className="flex gap-1 flex-wrap">
              {KINDS.map((k) => (
                <button
                  key={k}
                  onClick={() => setKind(k)}
                  className={`kicker px-2.5 py-2 border ${kind === k ? "bg-oxblood text-parchment-100 border-oxblood" : "border-ink/40 hover:bg-parchment-50"}`}
                >
                  {k}
                </button>
              ))}
            </div>
            <div className="ml-auto flex gap-2">
              <input
                type="search"
                placeholder="search…"
                className="bg-parchment-50 border border-ink/40 px-3 py-2 font-display italic text-ink focus:outline-none focus:border-oxblood w-40"
              />
              <div className="flex border border-ink">
                <button onClick={() => setView("grid")} className={`kicker px-3 py-2 ${view === "grid" ? "bg-ink text-parchment-100" : "text-ink/70"}`}>grid</button>
                <button onClick={() => setView("list")} className={`kicker px-3 py-2 border-l border-ink ${view === "list" ? "bg-ink text-parchment-100" : "text-ink/70"}`}>list</button>
              </div>
            </div>
          </div>

          {view === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {list.map((a, i) => (
                <button
                  key={a.id}
                  onClick={() => setOpen(a)}
                  className="text-left paper border-2 border-ink/40 hover:border-ink shadow-[4px_6px_0_0_rgba(26,19,16,0.14)] group transition"
                  style={{ transform: `rotate(${(i % 3 - 1) * 0.5}deg)` }}
                >
                  <div
                    className="aspect-[4/5] flex items-end p-4 text-parchment-100 relative overflow-hidden"
                    style={{ background: `linear-gradient(160deg, ${a.color} 0%, #1A1310 100%)` }}
                  >
                    {a.glyph && (
                      <div className="absolute inset-0 flex items-center justify-center font-display italic text-[6rem] opacity-50">
                        {a.glyph}
                      </div>
                    )}
                    {a.kind === "couplet" && a.caption && (
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="font-display italic text-parchment-100 text-lg text-center leading-snug">
                          "{a.caption}"
                        </div>
                      </div>
                    )}
                    {a.kind === "swatch" && (
                      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                        <div style={{ background: a.color }} />
                        <div style={{ background: a.color, opacity: 0.7 }} />
                        <div style={{ background: a.color, opacity: 0.5 }} />
                        <div style={{ background: a.color, opacity: 0.3 }} />
                      </div>
                    )}
                    <span className="absolute top-3 left-3 kicker bg-parchment-100/90 text-ink px-2 py-1">{a.kind}</span>
                    <span className="absolute top-3 right-3 kicker text-parchment-100/80">{a.id}</span>
                  </div>
                  <div className="p-3">
                    <div className="font-display italic text-ink text-[1.05rem] leading-tight group-hover:text-oxblood transition">{a.title}</div>
                    <div className="flex justify-between mt-1.5">
                      <span className="kicker text-ink/55">#{a.tag}</span>
                      <span className="kicker text-ink/45">{a.added}</span>
                    </div>
                  </div>
                </button>
              ))}
              <button className="aspect-[4/5] sm:aspect-auto border-2 border-dashed border-ink/40 flex flex-col items-center justify-center hover:border-ink hover:bg-parchment-100/50 transition min-h-[260px]">
                <span className="font-display italic text-6xl text-ink/55">+</span>
                <span className="font-display italic text-ink mt-2">add to archive</span>
                <span className="kicker text-ink/55 mt-1">scan · couplet · swatch · ref</span>
              </button>
            </div>
          ) : (
            <div className="border-2 border-ink">
              {list.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setOpen(a)}
                  className="w-full text-left grid grid-cols-[60px_2fr_1fr_1fr_1fr] gap-4 items-center px-4 py-3 border-b border-ink/25 last:border-b-0 hover:bg-parchment-100/60"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-parchment-100 font-display italic text-xl" style={{ background: a.color }}>
                    {a.glyph || a.kind[0].toUpperCase()}
                  </div>
                  <div>
                    <div className="font-display italic text-ink">{a.title}</div>
                    <div className="kicker text-ink/55 mt-0.5">{a.id}</div>
                  </div>
                  <div className="kicker text-ink/65">{a.kind}</div>
                  <div className="kicker text-oxblood">#{a.tag}</div>
                  <div className="kicker text-ink/55 text-right">{a.added}</div>
                </button>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* DETAIL DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setOpen(null)} />
          <div className="relative bg-parchment-100 w-full max-w-md border-l-2 border-ink overflow-y-auto paper">
            <div
              className="p-6 text-parchment-100 relative aspect-[4/5] flex items-end"
              style={{ background: `linear-gradient(160deg, ${open.color} 0%, #1A1310 100%)` }}
            >
              {open.glyph && (
                <div className="absolute inset-0 flex items-center justify-center font-display italic text-[8rem] opacity-50">{open.glyph}</div>
              )}
              {open.kind === "couplet" && open.caption && (
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="font-display italic text-parchment-100 text-2xl text-center leading-snug">"{open.caption}"</div>
                </div>
              )}
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 kicker bg-parchment-100 text-ink px-2 py-1">close ×</button>
              <div className="relative kicker">{open.id} · {open.kind}</div>
            </div>
            <div className="p-5">
              <h3 className="font-display italic text-2xl text-ink leading-tight">{open.title}</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="kicker bg-oxblood text-parchment-100 px-2 py-1">#{open.tag}</span>
                <span className="kicker border border-ink/40 px-2 py-1">{open.kind}</span>
                <span className="kicker text-ink/55">{open.added}</span>
              </div>
              {open.source && (
                <div className="mt-4">
                  <div className="kicker text-ink/55">source</div>
                  <div className="font-body italic text-ink">{open.source}</div>
                </div>
              )}
              {open.caption && open.kind !== "couplet" && (
                <div className="mt-4">
                  <div className="kicker text-ink/55">caption</div>
                  <div className="font-body italic text-ink">{open.caption}</div>
                </div>
              )}
              <div className="mt-5 pt-4 border-t border-dashed border-ink/30 space-y-2">
                <button className="btn-ghost w-full justify-center">add to collection</button>
                <button className="btn-ghost w-full justify-center">use in studio →</button>
                <button className="kicker w-full border border-oxblood text-oxblood py-2 hover:bg-oxblood hover:text-parchment-100">remove from archive</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashShell>
  );
}

function Mini({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: "ink" }) {
  const cls = accent === "ink" ? "bg-ink text-parchment-100 border-ink" : "border-ink/40";
  return (
    <div className={`paper border-2 p-3 sm:p-4 ${cls}`}>
      <div className={`kicker ${accent ? "text-gilt-50" : "text-oxblood"}`}>{label}</div>
      <div className="font-display italic text-[2rem] leading-none mt-1">{value}</div>
      <div className={`kicker mt-1 ${accent ? "text-parchment-100/65" : "text-teal-forgotten"}`}>{sub}</div>
    </div>
  );
}
