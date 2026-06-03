"use client";

import Link from "next/link";
import { useState } from "react";
import { DashShell } from "@/components/DashShell";
import { MAKER_NAV, STATUS_TONE } from "@/lib/nav";
import { FOLIOS, ME } from "@/lib/dashData";

const EXTRA = [
  { id: "FO-00407", title: "Truck-Art Drop · No. 03", vibe: "Truck-Art Maximal", serial: "VBE-005", proofs: 5, status: "drafting", updated: "3 weeks ago", cover: "#B8943A", glyph: "ﭨ" },
  { id: "FO-00403", title: "Ghazal Mehfil · II", vibe: "Urdu Ghazal Classical", serial: "VBE-002", proofs: 5, status: "shipped", updated: "a month ago", cover: "#5C1B1B", glyph: "ﻏ" },
  { id: "FO-00399", title: "Whirling Folio · I", vibe: "Minimalist Sufi", serial: "VBE-003", proofs: 3, status: "archived", updated: "a month ago", cover: "#3A5A56", glyph: "ﺻ" },
];

const ALL = [...FOLIOS, ...EXTRA];

export default function MakerFoliosPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [status, setStatus] = useState<string>("All");
  const filtered = status === "All" ? ALL : ALL.filter((f) => f.status === status);

  return (
    <DashShell variant="maker" nav={MAKER_NAV} who={ME.name} whoSub={ME.handle} badge={`PLAN · ${ME.plan.toUpperCase()}`}>
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">ii. — the bookshelf</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            Your folios.
          </h1>
          <Link href="/studio" className="btn-press">
            + new folio
            <span aria-hidden>↦</span>
          </Link>
        </div>
        <p className="font-body italic text-ink/70 mt-2">
          {ALL.length} folios kept at your desk. {ALL.filter(f=>f.status==='ready-for-press').length} ready for press, {ALL.filter(f=>f.status==='drafting' || f.status==='regenerating').length} still drying.
        </p>
      </header>

      {/* toolbar */}
      <div className="mb-6 flex flex-wrap gap-3 items-center">
        <div className="flex flex-wrap gap-1">
          {["All", "ready-for-press", "drafting", "shipped", "regenerating", "archived"].map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`kicker px-2.5 py-2 border ${
                status === s ? "bg-ink text-parchment-100 border-ink" : "border-ink/40 hover:bg-parchment-50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="ml-auto flex border border-ink">
          <button onClick={() => setView("grid")} className={`kicker px-3 py-2 ${view === "grid" ? "bg-ink text-parchment-100" : "text-ink/70"}`}>grid</button>
          <button onClick={() => setView("list")} className={`kicker px-3 py-2 border-l border-ink ${view === "list" ? "bg-ink text-parchment-100" : "text-ink/70"}`}>list</button>
        </div>
      </div>

      {view === "grid" ? (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((f, i) => (
            <Link
              key={f.id}
              href="/studio"
              className="paper border-2 border-ink/40 shadow-[5px_7px_0_0_rgba(26,19,16,0.14)] hover:border-ink transition-all group"
              style={{ transform: `rotate(${(i % 2 ? 0.4 : -0.4)}deg)` }}
            >
              <div
                className="aspect-[4/5] flex items-center justify-center text-parchment-100 relative overflow-hidden"
                style={{ background: `linear-gradient(160deg, ${f.cover} 0%, #1A1310 100%)` }}
              >
                <div className="font-display italic text-7xl">{f.glyph}</div>
                <span className="absolute top-3 left-3 kicker text-parchment-100/75">{f.id}</span>
                <span className={`absolute top-3 right-3 kicker px-2 py-1 ${STATUS_TONE[f.status]}`}>{f.status}</span>
                <span className="absolute bottom-3 left-3 kicker text-parchment-100/75">{f.proofs} proofs</span>
              </div>
              <div className="p-4">
                <div className="kicker text-ink/55">{f.vibe}</div>
                <div className="font-display italic text-[1.15rem] text-ink leading-tight mt-1 group-hover:text-oxblood transition">{f.title}</div>
                <div className="font-body italic text-ink/65 text-sm mt-2">{f.updated}</div>
              </div>
            </Link>
          ))}
          <Link
            href="/studio"
            className="aspect-[4/5] border-2 border-dashed border-ink/40 flex flex-col items-center justify-center hover:border-ink hover:bg-parchment-100/50 transition"
          >
            <span className="font-display italic text-6xl text-ink/55">+</span>
            <span className="font-display italic text-ink mt-2">open a new folio</span>
          </Link>
        </section>
      ) : (
        <section className="border-2 border-ink">
          {filtered.map((f) => (
            <Link
              key={f.id}
              href="/studio"
              className="grid grid-cols-12 gap-4 items-center px-5 py-4 border-b border-ink/25 last:border-b-0 hover:bg-parchment-100/60"
            >
              <div
                className="col-span-1 w-12 h-12 flex items-center justify-center text-parchment-100 font-display italic text-2xl"
                style={{ background: f.cover }}
              >
                {f.glyph}
              </div>
              <div className="col-span-4">
                <div className="font-display italic text-[1.15rem] text-ink">{f.title}</div>
                <div className="kicker text-ink/50 mt-0.5">{f.id}</div>
              </div>
              <div className="col-span-3 font-body italic text-ink/85">{f.vibe}</div>
              <div className="col-span-1 font-mono text-ink">{f.proofs}</div>
              <div className="col-span-2"><span className={`kicker px-2 py-1 ${STATUS_TONE[f.status]}`}>{f.status}</span></div>
              <div className="col-span-1 text-right font-body italic text-ink/65 text-sm">{f.updated}</div>
            </Link>
          ))}
        </section>
      )}
    </DashShell>
  );
}
