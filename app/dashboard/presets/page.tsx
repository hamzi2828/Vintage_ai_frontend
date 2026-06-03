"use client";

import Link from "next/link";
import { useState } from "react";
import { DashShell } from "@/components/DashShell";
import { Stamp } from "@/components/Stamp";
import { MAKER_NAV } from "@/lib/nav";
import { VIBES } from "@/lib/data";
import { ME } from "@/lib/dashData";
import { VibeCard } from "@/components/VibeCard";

export default function MakerPresetsPage() {
  const [favourites, setFavourites] = useState<string[]>(["jaun-elia", "minimalist-sufi"]);
  const toggleFav = (id: string) =>
    setFavourites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  return (
    <DashShell variant="maker" nav={MAKER_NAV} who={ME.name} whoSub={ME.handle} badge={`PLAN · ${ME.plan.toUpperCase()}`}>
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">iii. — the cultural library</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            Presets at your <span className="text-oxblood">disposal.</span>
          </h1>
        </div>
        <p className="font-body italic text-ink/70 mt-2 max-w-2xl">
          All six cultural presets are included with your <span className="text-oxblood">{ME.plan}</span> plan. Pin the ones you press the most.
        </p>
      </header>

      {/* FAVOURITES */}
      {favourites.length > 0 && (
        <section className="mb-10">
          <div className="kicker text-oxblood mb-3">your pinned · {favourites.length}</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {VIBES.filter((v) => favourites.includes(v.id)).map((v, i) => (
              <div key={v.id} className="relative">
                <VibeCard vibe={v} index={i} />
                <button
                  onClick={() => toggleFav(v.id)}
                  className="absolute top-3 left-3 z-20 kicker bg-oxblood text-parchment-100 px-2 py-1"
                >
                  ★ pinned
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ALL */}
      <section>
        <div className="kicker text-ink/65 mb-3">the catalogue · {VIBES.length}</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {VIBES.filter((v) => !favourites.includes(v.id)).map((v, i) => (
            <div key={v.id} className="relative">
              <VibeCard vibe={v} index={i} />
              <button
                onClick={() => toggleFav(v.id)}
                className="absolute top-3 left-3 z-20 kicker bg-parchment-100 border border-ink text-ink px-2 py-1 hover:bg-ink hover:text-parchment-100 transition"
              >
                ☆ pin
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PRIVATE PRESET CTA */}
      <section className="mt-12 paper border-2 border-oxblood bg-oxblood text-parchment-100 p-8 shadow-[6px_8px_0_0_rgba(26,19,16,0.18)] relative">
        <div className="absolute -top-3 -right-3">
          <Stamp label="MEHFIL ONLY" sub="private editions" color="gilt" rotate={6} />
        </div>
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <div className="kicker text-gilt-50">bring your own</div>
            <h2 className="font-display italic text-3xl sm:text-4xl mt-1 leading-tight">
              Train a private preset on your own archive.
            </h2>
            <p className="font-body italic text-parchment-100/85 mt-4">
              A grandmother's embroidery, a dead aunt's ghazal diary, a cassette cover from 1986. The engine learns the soul, not the surface. Available on the Mehfil plan.
            </p>
          </div>
          <div className="space-y-3">
            <Link href="/dashboard/subscription" className="block text-center font-display italic py-3 border border-parchment-100 hover:bg-parchment-100 hover:text-oxblood transition">
              upgrade to Mehfil →
            </Link>
            <button className="block w-full text-center kicker text-parchment-100/70 hover:text-parchment-100">
              read about private presets
            </button>
          </div>
        </div>
      </section>
    </DashShell>
  );
}
