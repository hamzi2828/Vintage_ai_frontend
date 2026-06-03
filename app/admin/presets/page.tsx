"use client";

import { useState } from "react";
import { DashShell } from "@/components/DashShell";
import { Stamp } from "@/components/Stamp";
import { ADMIN_NAV } from "@/lib/nav";
import { VIBES } from "@/lib/data";
import { PRESET_USE } from "@/lib/dashData";
import { PRESET_PROMPTS } from "@/lib/moreData";

export default function AdminPresetsPage() {
  const [activeId, setActiveId] = useState(VIBES[0].id);
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(VIBES.map((v) => [v.id, v.id !== "truck-art"]))
  );

  const active = VIBES.find((v) => v.id === activeId)!;
  const usage = PRESET_USE.find((p) => p.id === active.serial);
  const prompts = PRESET_PROMPTS[active.serial] || PRESET_PROMPTS["VBE-001"];

  return (
    <DashShell variant="admin" nav={ADMIN_NAV} who="Atelier Desk" whoSub="admin · house" badge="ADMINISTRATOR">
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">iii. — the cultural memory</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            Presets, <span className="text-oxblood">our edge.</span>
          </h1>
          <button className="btn-press !py-2.5 !px-4 !text-sm">+ train a new preset</button>
        </div>
        <p className="font-body italic text-ink/70 mt-2 max-w-2xl">
          Six presets in the catalogue. Each is a small library — references, prompts, palette, motifs. Edit them with care; this is where the soul lives.
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-5">
        {/* LEFT — GRID */}
        <aside className="lg:col-span-5 xl:col-span-4 space-y-3">
          <div className="kicker text-ink/65 px-1">the catalogue · {VIBES.length} pressed</div>
          {VIBES.map((v) => {
            const u = PRESET_USE.find((p) => p.id === v.serial);
            const isActive = activeId === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveId(v.id)}
                className={`w-full text-left paper border-2 p-4 shadow-[3px_4px_0_0_rgba(26,19,16,0.12)] transition-all ${
                  isActive ? "border-oxblood" : "border-ink/40 hover:border-ink"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-parchment-100 font-display italic text-2xl flex-shrink-0"
                    style={{ background: v.palette[0] }}
                  >
                    {v.urdu?.[0] || "ﺁ"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="kicker text-ink/55">{v.serial} · {v.era}</div>
                    <div className="font-display italic text-[1.1rem] text-ink leading-tight">{v.name}</div>
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span className="kicker text-ink/65">{u?.runs.toLocaleString() || 0} runs</span>
                      <span
                        className={`kicker px-1.5 py-0.5 ${
                          enabled[v.id] ? "bg-teal-forgotten text-parchment-100" : "bg-parchment-300 text-ink/65"
                        }`}
                      >
                        {enabled[v.id] ? "live" : "draft"}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEnabled((prev) => ({ ...prev, [v.id]: !prev[v.id] }));
                    }}
                    className={`relative w-10 h-5 transition flex-shrink-0 ${
                      enabled[v.id] ? "bg-oxblood" : "bg-parchment-300"
                    }`}
                    aria-label="toggle"
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 bg-parchment-100 transition-all ${
                        enabled[v.id] ? "left-[22px]" : "left-0.5"
                      }`}
                    />
                  </button>
                </div>
              </button>
            );
          })}

          <button className="w-full p-5 border-2 border-dashed border-ink/40 font-display italic text-ink/70 hover:border-ink hover:text-ink transition">
            + train a private preset
          </button>
        </aside>

        {/* RIGHT — EDITOR */}
        <section className="lg:col-span-7 xl:col-span-8 space-y-5">
          {/* header card */}
          <div className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] overflow-hidden">
            <div
              className="relative p-6 text-parchment-100"
              style={{ background: `linear-gradient(135deg, ${active.palette[0]} 0%, #1A1310 100%)` }}
            >
              <div className="absolute inset-3 border border-parchment-100/30 pointer-events-none" />
              <div className="kicker text-parchment-100/70">{active.serial} · {active.era}</div>
              <h2 className="font-display italic text-4xl mt-1 leading-tight">{active.name}</h2>
              {active.urdu && <div className="urdu text-3xl mt-2 text-parchment-100/85">{active.urdu}</div>}
              <p className="font-display italic mt-3 text-parchment-100/90 max-w-md">
                "{active.couplet.line1}"
              </p>
              <div className="absolute top-4 right-4">
                <Stamp label={enabled[active.id] ? "LIVE" : "DRAFT"} color="gilt" rotate={4} />
              </div>
            </div>

            <div className="p-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Field label="runs · total">{usage?.runs.toLocaleString() || 0}</Field>
              <Field label="share">{Math.round((usage?.share || 0) * 100)}%</Field>
              <Field label="palette · 4 swatches">
                <div className="flex mt-1">
                  {active.palette.map((c, i) => (
                    <div key={i} className="flex-1 h-5 border border-ink/30" style={{ background: c }} />
                  ))}
                </div>
              </Field>
              <Field label="motifs">{active.motifs.length}</Field>
            </div>
          </div>

          {/* prompt engineering */}
          <div className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5">
            <div className="flex items-end justify-between mb-3 flex-wrap gap-2">
              <div>
                <div className="kicker text-oxblood">prompt engineering</div>
                <h3 className="font-display italic text-xl text-ink leading-none mt-1">the recipe</h3>
              </div>
              <div className="flex gap-2">
                <button className="kicker border border-ink/40 px-2 py-1.5">↻ test bench</button>
                <button className="kicker bg-ink text-parchment-100 border border-ink px-2 py-1.5">save</button>
              </div>
            </div>

            <label className="kicker text-ink/65 block mb-1.5">a. positive prompt</label>
            <textarea
              defaultValue={prompts.positive}
              rows={3}
              className="w-full bg-parchment-50 border border-ink/40 p-3 font-mono text-ink text-sm focus:outline-none focus:border-oxblood"
            />

            <label className="kicker text-ink/65 block mb-1.5 mt-4">b. negative prompt</label>
            <textarea
              defaultValue={prompts.negative}
              rows={2}
              className="w-full bg-parchment-50 border border-ink/40 p-3 font-mono text-ink text-sm focus:outline-none focus:border-oxblood"
            />

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div>
                <label className="kicker text-ink/65 block mb-1.5">c. temperature</label>
                <input type="range" min="0" max="100" defaultValue="32" className="w-full accent-oxblood" />
                <div className="flex justify-between kicker text-ink/55"><span>honour</span><span>wander</span></div>
              </div>
              <div>
                <label className="kicker text-ink/65 block mb-1.5">d. model</label>
                <select className="w-full bg-parchment-50 border border-ink/40 px-3 py-2 font-display italic text-ink focus:outline-none focus:border-oxblood">
                  <option>flux-pro · 1.1</option>
                  <option>flux-dev</option>
                  <option>dall-e 3</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="kicker text-ink/65 block mb-2">e. reference archive · {prompts.refs.length} files</label>
              <div className="grid grid-cols-3 gap-2">
                {prompts.refs.map((r) => (
                  <div key={r} className="border border-ink/30 p-2 text-center">
                    <div className="aspect-square bg-parchment-300 mb-1 flex items-center justify-center font-display italic text-ink/60">{r.split(".").pop()?.toUpperCase()}</div>
                    <div className="kicker text-ink/65 truncate">{r}</div>
                  </div>
                ))}
                <button className="border-2 border-dashed border-ink/40 p-2 text-center font-display italic text-ink/60 hover:border-ink hover:text-ink">
                  + upload reference
                </button>
              </div>
            </div>
          </div>

          {/* motifs editor */}
          <div className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5">
            <div className="kicker text-oxblood">motifs · the vocabulary</div>
            <h3 className="font-display italic text-xl text-ink leading-none mt-1">words the engine knows</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {active.motifs.map((m) => (
                <span key={m} className="kicker border border-ink/40 px-2 py-1 flex items-center gap-1.5">
                  {m}
                  <button className="text-oxblood">×</button>
                </span>
              ))}
              <button className="kicker border border-dashed border-ink/40 px-2 py-1 text-ink/65 hover:border-ink hover:text-ink">+ add motif</button>
            </div>
          </div>
        </section>
      </div>
    </DashShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border border-ink/25 p-2.5">
      <div className="kicker text-ink/55">{label}</div>
      <div className="font-display italic text-ink text-xl mt-0.5">{children}</div>
    </div>
  );
}
