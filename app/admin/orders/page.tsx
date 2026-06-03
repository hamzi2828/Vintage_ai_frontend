"use client";

import { useState } from "react";
import { DashShell } from "@/components/DashShell";
import { Bars } from "@/components/Charts";
import { ADMIN_NAV, STATUS_TONE } from "@/lib/nav";
import { PRINT_QUEUE } from "@/lib/dashData";
import { PARTNERS } from "@/lib/moreData";

const STAGES = [
  { id: "awaiting-art", label: "Awaiting Art", color: "#B8943A" },
  { id: "queued", label: "Queued", color: "#1A1310" },
  { id: "in-press", label: "At the Press", color: "#5C1B1B" },
  { id: "shipped", label: "Shipped", color: "#3A5A56" },
];

const EXTENDED_QUEUE = [
  ...PRINT_QUEUE,
  { id: "PO-1046", maker: "@truckart.co", partner: "Pindi Print House", units: 50, garment: "Tee · Monsoon Black", status: "in-press" },
  { id: "PO-1047", maker: "@monsoon.kch", partner: "Lyari DTF Co.", units: 28, garment: "Hoodie · Oxblood", status: "shipped" },
  { id: "PO-1048", maker: "@ghazal.fits", partner: "Anarkali Threads", units: 96, garment: "Sweat · Cream", status: "queued" },
  { id: "PO-1049", maker: "@dye.house", partner: "Korangi Press", units: 14, garment: "Tee · Parchment", status: "awaiting-art" },
  { id: "PO-1050", maker: "@thread.club", partner: "Saddar Studio", units: 22, garment: "Cap · 5-panel", status: "shipped" },
];

const DAILY_VOLUME = [12, 18, 24, 19, 22, 28, 34, 29, 31, 38, 42, 36, 44, 48];

export default function AdminOrdersPage() {
  const [view, setView] = useState<"kanban" | "table">("kanban");
  const grouped = STAGES.map((s) => ({
    ...s,
    orders: EXTENDED_QUEUE.filter((o) => o.status === s.id),
  }));

  return (
    <DashShell variant="admin" nav={ADMIN_NAV} who="Atelier Desk" whoSub="admin · house" badge="ADMINISTRATOR">
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">iv. — the press, in motion</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            Print queue, <span className="text-oxblood">today.</span>
          </h1>
          <div className="flex flex-wrap gap-2">
            <div className="flex border border-ink">
              <button
                onClick={() => setView("kanban")}
                className={`kicker px-3 py-2 ${view === "kanban" ? "bg-ink text-parchment-100" : "text-ink/70"}`}
              >
                kanban
              </button>
              <button
                onClick={() => setView("table")}
                className={`kicker px-3 py-2 border-l border-ink ${view === "table" ? "bg-ink text-parchment-100" : "text-ink/70"}`}
              >
                ledger
              </button>
            </div>
            <button className="kicker border border-ink/40 px-3 py-2">↓ export</button>
            <button className="kicker bg-oxblood text-parchment-100 border border-oxblood px-3 py-2">+ manual order</button>
          </div>
        </div>
        <p className="font-body italic text-ink/70 mt-2">
          {EXTENDED_QUEUE.length} orders moving through the shop. {EXTENDED_QUEUE.reduce((s,o)=>s+o.units,0)} garments will leave this week.
        </p>
      </header>

      {/* TOP STRIP: stage counts + daily volume */}
      <section className="grid lg:grid-cols-12 gap-5 mb-8">
        <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STAGES.map((s) => {
            const count = EXTENDED_QUEUE.filter((o) => o.status === s.id).length;
            const units = EXTENDED_QUEUE.filter((o) => o.status === s.id).reduce((sum, o) => sum + o.units, 0);
            return (
              <div key={s.id} className="paper border-2 border-ink/40 p-4">
                <div className="kicker" style={{ color: s.color }}>{s.label}</div>
                <div className="font-display italic text-[2rem] leading-none mt-1 text-ink">{count}</div>
                <div className="kicker text-ink/55 mt-1">{units} units</div>
                <div className="mt-2 h-1" style={{ background: s.color, opacity: 0.85 }} />
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-4 paper border border-ink/40 p-4">
          <div className="kicker text-oxblood">volume · 14 days</div>
          <Bars data={DAILY_VOLUME} height={88} color="#5C1B1B" />
          <div className="font-mono text-[0.7rem] text-ink/65 mt-1">PEAK · 48 orders · today</div>
        </div>
      </section>

      {/* VIEW */}
      {view === "kanban" ? (
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {grouped.map((stage) => (
            <div key={stage.id} className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] flex flex-col">
              <div className="p-4 border-b-2 flex items-center justify-between" style={{ borderColor: stage.color }}>
                <div>
                  <div className="kicker" style={{ color: stage.color }}>{stage.label}</div>
                  <div className="font-display italic text-ink text-xl leading-none mt-0.5">
                    {stage.orders.length} {stage.orders.length === 1 ? "order" : "orders"}
                  </div>
                </div>
                <button className="kicker border border-ink/40 px-2 py-1">+</button>
              </div>
              <div className="p-3 space-y-3 flex-1">
                {stage.orders.map((o) => (
                  <div
                    key={o.id}
                    className="border border-ink/30 p-3 bg-parchment-50 hover:bg-parchment-100 transition cursor-grab active:cursor-grabbing"
                  >
                    <div className="flex items-start justify-between">
                      <span className="kicker text-ink/55">{o.id}</span>
                      <span className="font-mono text-sm text-ink">×{o.units}</span>
                    </div>
                    <div className="font-display italic text-ink mt-1.5">{o.garment}</div>
                    <div className="kicker text-ink/65 mt-1">{o.maker}</div>
                    <div className="dotted-rule my-2.5" />
                    <div className="flex items-center justify-between">
                      <span className="kicker text-ink/60 truncate">{o.partner}</span>
                      <button className="kicker text-oxblood">open →</button>
                    </div>
                  </div>
                ))}
                {stage.orders.length === 0 && (
                  <div className="text-center font-display italic text-ink/50 py-8">empty.</div>
                )}
              </div>
            </div>
          ))}
        </section>
      ) : (
        <section className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] overflow-x-auto">
          <div className="min-w-[900px]">
            <div className="grid grid-cols-[1fr_1.5fr_1.5fr_2fr_1fr_1.5fr_1fr] gap-4 px-5 py-3 border-b-2 border-ink bg-parchment-100 kicker text-ink/60">
              <div>order id</div>
              <div>maker</div>
              <div>partner</div>
              <div>garment</div>
              <div>units</div>
              <div>status</div>
              <div className="text-right">action</div>
            </div>
            {EXTENDED_QUEUE.map((o) => (
              <div key={o.id} className="grid grid-cols-[1fr_1.5fr_1.5fr_2fr_1fr_1.5fr_1fr] gap-4 px-5 py-3.5 border-b border-ink/25 items-center hover:bg-parchment-100/60">
                <div className="kicker text-ink/65">{o.id}</div>
                <div className="font-mono text-sm text-ink">{o.maker}</div>
                <div className="font-body italic text-ink/85 truncate">{o.partner}</div>
                <div className="font-display italic text-ink truncate">{o.garment}</div>
                <div className="font-mono text-ink">{o.units}</div>
                <div>
                  <span className={`kicker px-2 py-1 ${STATUS_TONE[o.status]}`}>{o.status}</span>
                </div>
                <div className="text-right">
                  <button className="kicker text-oxblood">open →</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PARTNER WORKLOAD */}
      <section className="mt-10">
        <div className="kicker text-oxblood">partner workload · this week</div>
        <h2 className="font-display italic text-2xl sm:text-3xl text-ink leading-none mt-1 mb-5">Who's busy.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PARTNERS.map((p) => {
            const load = (p.currentLoad / p.capacity) * 100;
            return (
              <div key={p.id} className="paper border border-ink/40 p-4 shadow-[3px_4px_0_0_rgba(26,19,16,0.12)]">
                <div className="flex items-center justify-between">
                  <div className="font-display italic text-lg text-ink leading-tight">{p.name}</div>
                  <span className="kicker text-ink/55">{p.id}</span>
                </div>
                <div className="kicker text-ink/65 mt-1">{p.city}</div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="font-mono text-sm text-ink">{p.currentLoad} / {p.capacity} units</span>
                  <span className={`kicker ${load > 85 ? "text-oxblood" : load > 60 ? "text-gilt-200" : "text-teal-forgotten"}`}>
                    {Math.round(load)}%
                  </span>
                </div>
                <div className="h-1.5 bg-parchment-300 mt-1.5">
                  <div
                    className="h-full"
                    style={{
                      width: `${load}%`,
                      background: load > 85 ? "#5C1B1B" : load > 60 ? "#B8943A" : "#3A5A56",
                    }}
                  />
                </div>
                <div className="mt-3 flex justify-between font-mono text-[0.7rem] text-ink/65">
                  <span>on-time · {p.onTime}%</span>
                  <span>{p.rating}★</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </DashShell>
  );
}
