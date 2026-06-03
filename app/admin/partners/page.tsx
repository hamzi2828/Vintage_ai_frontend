"use client";

import { useState } from "react";
import { DashShell } from "@/components/DashShell";
import { Stamp } from "@/components/Stamp";
import { ADMIN_NAV } from "@/lib/nav";
import { PARTNERS } from "@/lib/moreData";

export default function AdminPartnersPage() {
  const [filter, setFilter] = useState<"All" | "Karachi" | "Lahore" | "Rawalpindi">("All");
  const partners = filter === "All" ? PARTNERS : PARTNERS.filter((p) => p.city.includes(filter));

  const totalCapacity = PARTNERS.reduce((s, p) => s + p.capacity, 0);
  const totalLoad = PARTNERS.reduce((s, p) => s + p.currentLoad, 0);

  return (
    <DashShell variant="admin" nav={ADMIN_NAV} who="Atelier Desk" whoSub="admin · house" badge="ADMINISTRATOR">
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">v. — at the press</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            Press partners, <span className="text-oxblood">our hands.</span>
          </h1>
          <button className="btn-press !py-2.5 !px-4 !text-sm">+ verify a partner</button>
        </div>
        <p className="font-body italic text-ink/70 mt-2 max-w-2xl">
          The atelier doesn't own a press. We hand off to {PARTNERS.length} hand-picked shops across the country. They pull the screens, we send the work.
        </p>
      </header>

      {/* OVERVIEW STRIP */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <Mini label="partners · total" value={`${PARTNERS.length}`} sub={`${PARTNERS.filter(p=>p.verified).length} verified`} />
        <Mini label="capacity · weekly" value={`${totalCapacity}`} sub="units the shop can press" />
        <Mini label="utilisation" value={`${Math.round(totalLoad/totalCapacity*100)}%`} sub={`${totalLoad} units committed`} accent="oxblood" />
        <Mini label="avg. on-time" value={`${Math.round(PARTNERS.reduce((s,p)=>s+p.onTime,0)/PARTNERS.length)}%`} sub={`across ${PARTNERS.reduce((s,p)=>s+p.completed,0).toLocaleString()} orders`} accent="ink" />
      </section>

      {/* FILTERS */}
      <div className="mb-5 flex flex-wrap gap-2">
        {(["All", "Karachi", "Lahore", "Rawalpindi"] as const).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`kicker px-3 py-2 border ${
              filter === c
                ? "bg-ink text-parchment-100 border-ink"
                : "border-ink/40 hover:bg-parchment-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* PARTNER CARDS */}
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {partners.map((p) => {
          const load = (p.currentLoad / p.capacity) * 100;
          return (
            <div key={p.id} className="paper border border-ink/40 shadow-[5px_7px_0_0_rgba(26,19,16,0.14)] p-5 relative">
              {p.verified && (
                <div className="absolute -top-3 -right-3">
                  <Stamp label="VERIFIED" sub="hand-picked" rotate={6} />
                </div>
              )}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="kicker text-ink/55">{p.id} · est. {p.joined}</div>
                  <h3 className="font-display italic text-2xl text-ink leading-tight">{p.name}</h3>
                  <div className="font-body italic text-ink/75 mt-1">{p.city}</div>
                </div>
                <div className="w-12 h-12 bg-oxblood text-parchment-100 flex items-center justify-center font-display italic text-xl flex-shrink-0">
                  {p.name[0]}
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className="kicker text-ink/65">workload · this week</span>
                  <span className="font-mono text-sm text-ink">{p.currentLoad} / {p.capacity}</span>
                </div>
                <div className="h-2 bg-parchment-300">
                  <div
                    className="h-full"
                    style={{
                      width: `${load}%`,
                      background: load > 85 ? "#5C1B1B" : load > 60 ? "#B8943A" : "#3A5A56",
                    }}
                  />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 font-body">
                <Stat label="completed">{p.completed.toLocaleString()}</Stat>
                <Stat label="on-time">{p.onTime}%</Stat>
                <Stat label="rating">{p.rating}★</Stat>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-ink/30">
                <div className="kicker text-ink/55 mb-1">speciality</div>
                <div className="font-display italic text-ink">{p.speciality}</div>
                <div className="font-mono text-xs text-ink/65 mt-2">{p.contact}</div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <button className="btn-ghost justify-center !text-[0.6rem] !py-2">message</button>
                <button className="btn-ghost justify-center !text-[0.6rem] !py-2">queue</button>
                <button className="btn-ghost justify-center !text-[0.6rem] !py-2">edit</button>
              </div>
            </div>
          );
        })}

        {/* + INVITE CARD */}
        <button className="border-2 border-dashed border-ink/40 paper p-8 flex flex-col items-center justify-center text-center hover:border-ink hover:bg-parchment-100/60 transition min-h-[300px]">
          <span className="font-display italic text-5xl text-ink/60">+</span>
          <span className="kicker text-oxblood mt-3">invite</span>
          <div className="font-display italic text-xl text-ink mt-1 leading-tight">
            A new press partner
          </div>
          <p className="font-body italic text-ink/60 mt-2 max-w-[220px]">
            Send a verification packet to a DTF shop you trust.
          </p>
        </button>
      </section>

      {/* MAP-LIKE DISTRIBUTION */}
      <section className="mt-10 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5">
        <div className="kicker text-oxblood">distribution · by city</div>
        <h2 className="font-display italic text-2xl text-ink leading-none mt-1 mb-5">Where the presses live.</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { city: "Karachi", count: PARTNERS.filter(p=>p.city.includes("Karachi")).length, dot: "#5C1B1B" },
            { city: "Lahore", count: PARTNERS.filter(p=>p.city.includes("Lahore")).length, dot: "#B8943A" },
            { city: "Rawalpindi", count: PARTNERS.filter(p=>p.city.includes("Rawalpindi")).length, dot: "#3A5A56" },
          ].map((c) => (
            <div key={c.city} className="border border-ink/30 p-4 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center" style={{ background: c.dot }}>
                <span className="font-display italic text-parchment-100 text-2xl">{c.count}</span>
              </div>
              <div>
                <div className="kicker text-ink/60">city</div>
                <div className="font-display italic text-xl text-ink leading-none mt-0.5">{c.city}</div>
                <div className="kicker text-ink/55 mt-1">{c.count} verified shops</div>
              </div>
            </div>
          ))}
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

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="text-center border border-ink/25 py-2">
      <div className="kicker text-ink/55 text-[0.55rem]">{label}</div>
      <div className="font-display italic text-ink text-lg leading-none mt-0.5">{children}</div>
    </div>
  );
}
