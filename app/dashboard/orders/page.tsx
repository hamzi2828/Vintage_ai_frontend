"use client";

import { useState } from "react";
import { DashShell } from "@/components/DashShell";
import { MAKER_NAV, STATUS_TONE } from "@/lib/nav";
import { ORDERS, ME } from "@/lib/dashData";

const EXTRA = [
  { id: "PO-1025", folio: "FO-00407", garment: "Tee · Truck-Art Red · ×30", partner: "Pindi Print House", status: "complete", eta: "delivered 12 May" },
  { id: "PO-1018", folio: "FO-00403", garment: "Hoodie · Cream · ×20", partner: "Korangi Press", status: "complete", eta: "delivered 02 May" },
];

const ALL = [...ORDERS, ...EXTRA];

export default function MakerOrdersPage() {
  const [filter, setFilter] = useState<string>("All");
  const list = filter === "All" ? ALL : ALL.filter((o) => o.status === filter);

  return (
    <DashShell variant="maker" nav={MAKER_NAV} who={ME.name} whoSub={ME.handle} badge={`PLAN · ${ME.plan.toUpperCase()}`}>
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">iv. — at the press</div>
        <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
          Print orders.
        </h1>
        <p className="font-body italic text-ink/70 mt-2">
          {ALL.length} orders pressed through your folio. {ALL.filter(o=>o.status==='in-press' || o.status==='queued').length} currently at the partners.
        </p>
      </header>

      {/* stat strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <Mini label="in press" value={`${ALL.filter(o=>o.status==='in-press').length}`} sub="at the partners" accent="oxblood" />
        <Mini label="queued" value={`${ALL.filter(o=>o.status==='queued').length}`} sub="awaiting press slot" />
        <Mini label="shipped" value={`${ALL.filter(o=>o.status==='shipped').length}`} sub="this month" />
        <Mini label="complete · lifetime" value={`${ALL.filter(o=>o.status==='complete').length}`} sub="delivered to customers" accent="ink" />
      </section>

      {/* filter */}
      <div className="mb-5 flex flex-wrap gap-2">
        {["All", "in-press", "queued", "shipped", "complete"].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`kicker px-3 py-2 border ${
              filter === s ? "bg-ink text-parchment-100 border-ink" : "border-ink/40 hover:bg-parchment-50"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <section className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] overflow-x-auto">
        <div className="min-w-[820px]">
          <div className="grid grid-cols-[1fr_1fr_2fr_1.5fr_1.5fr_1fr] gap-4 px-5 py-3 border-b-2 border-ink bg-parchment-100 kicker text-ink/60">
            <div>order id</div>
            <div>folio</div>
            <div>garment</div>
            <div>partner</div>
            <div>status</div>
            <div className="text-right">eta</div>
          </div>
          {list.map((o) => (
            <div key={o.id} className="grid grid-cols-[1fr_1fr_2fr_1.5fr_1.5fr_1fr] gap-4 px-5 py-3.5 border-b border-ink/25 items-center hover:bg-parchment-100/60">
              <div className="kicker text-ink/65">{o.id}</div>
              <div className="font-mono text-sm text-ink">{o.folio}</div>
              <div className="font-display italic text-ink truncate">{o.garment}</div>
              <div className="font-body italic text-ink/85 truncate">{o.partner}</div>
              <div><span className={`kicker px-2 py-1 ${STATUS_TONE[o.status]}`}>{o.status}</span></div>
              <div className="text-right font-mono text-sm text-ink/70">{o.eta}</div>
            </div>
          ))}
          {list.length === 0 && (
            <div className="px-5 py-12 text-center font-display italic text-ink/55">no orders at that stage.</div>
          )}
        </div>
      </section>
    </DashShell>
  );
}

function Mini({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: "ink" | "oxblood" }) {
  const cls = accent === "ink" ? "bg-ink text-parchment-100 border-ink" : accent === "oxblood" ? "bg-oxblood text-parchment-100 border-oxblood" : "border-ink/40";
  return (
    <div className={`paper border-2 p-4 ${cls}`}>
      <div className={`kicker ${accent ? "text-gilt-50" : "text-oxblood"}`}>{label}</div>
      <div className="font-display italic text-[2rem] leading-none mt-1">{value}</div>
      <div className={`kicker mt-1 ${accent ? "text-parchment-100/65" : "text-teal-forgotten"}`}>{sub}</div>
    </div>
  );
}
