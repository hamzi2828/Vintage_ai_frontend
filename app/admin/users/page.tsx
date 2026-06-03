"use client";

import { useState } from "react";
import { DashShell } from "@/components/DashShell";
import { Stamp } from "@/components/Stamp";
import { ADMIN_NAV, STATUS_TONE } from "@/lib/nav";
import { USERS, PLATFORM } from "@/lib/dashData";
import { SIGNUP_FEED } from "@/lib/moreData";

const PLANS = ["All", "Apprentice", "Atelier", "Mehfil"] as const;
const STATUSES = ["All", "active", "trial", "paused"] as const;

export default function AdminUsersPage() {
  const [plan, setPlan] = useState<(typeof PLANS)[number]>("All");
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [openUser, setOpenUser] = useState<typeof USERS[number] | null>(null);

  const filtered = USERS.filter((u) => {
    if (plan !== "All" && u.plan !== plan) return false;
    if (status !== "All" && u.status !== status) return false;
    if (query && !`${u.name} ${u.handle} ${u.city}`.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <DashShell variant="admin" nav={ADMIN_NAV} who="Atelier Desk" whoSub="admin · house" badge="ADMINISTRATOR">
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">ii. — the room</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            Subscribers, <span className="text-oxblood">all of them.</span>
          </h1>
          <div className="flex gap-2">
            <button className="kicker border border-ink/40 px-3 py-2">↓ export csv</button>
            <button className="kicker border border-ink bg-ink text-parchment-100 px-3 py-2">+ invite a maker</button>
          </div>
        </div>
        <p className="font-body italic text-ink/70 mt-2">
          {PLATFORM.subscribers} folios are open with us today. {USERS.filter(u=>u.status==='active').length} are active in this view.
        </p>
      </header>

      {/* mini stat strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <Mini label="total subscribers" value={`${PLATFORM.subscribers}`} sub={PLATFORM.subscribersDelta} />
        <Mini label="active" value={`${USERS.filter(u=>u.status==='active').length * 35}`} sub="across all cities" />
        <Mini label="on trial" value="42" sub="ends in 7 days avg." accent="gilt" />
        <Mini label="paused" value="11" sub="recoverable" accent="ink" />
      </section>

      <div className="grid lg:grid-cols-12 gap-5">
        {/* MAIN TABLE */}
        <div className="lg:col-span-9 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)]">
          {/* toolbar */}
          <div className="p-4 border-b border-ink/30 flex flex-wrap gap-3 items-center">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="search by name, handle, city…"
              className="bg-parchment-50 border border-ink/40 px-3 py-2 font-display italic text-ink focus:outline-none focus:border-oxblood flex-1 min-w-[200px]"
            />
            <div className="flex gap-1">
              {PLANS.map((p) => (
                <button
                  key={p}
                  onClick={() => setPlan(p)}
                  className={`kicker px-2.5 py-2 border ${
                    plan === p
                      ? "bg-ink text-parchment-100 border-ink"
                      : "border-ink/40 hover:bg-parchment-50"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="flex gap-1">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`kicker px-2.5 py-2 border ${
                    status === s
                      ? "bg-oxblood text-parchment-100 border-oxblood"
                      : "border-ink/40 hover:bg-parchment-50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* bulk actions */}
          {selected.length > 0 && (
            <div className="px-4 py-3 border-b border-ink/30 bg-parchment-100 flex items-center justify-between flex-wrap gap-2">
              <span className="font-display italic text-ink">
                {selected.length} maker{selected.length > 1 ? "s" : ""} selected
              </span>
              <div className="flex gap-2">
                <button className="kicker border border-ink/40 px-2 py-1.5">message</button>
                <button className="kicker border border-ink/40 px-2 py-1.5">comp run credits</button>
                <button className="kicker bg-oxblood text-parchment-100 border border-oxblood px-2 py-1.5">pause</button>
              </div>
            </div>
          )}

          {/* table */}
          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-[40px_2fr_2fr_1.5fr_1.5fr_1fr_1.5fr_1fr] gap-4 px-5 py-3 border-b-2 border-ink bg-parchment-100 kicker text-ink/60">
                <div></div>
                <div>maker</div>
                <div>handle</div>
                <div>city</div>
                <div>plan</div>
                <div>runs</div>
                <div>status</div>
                <div className="text-right">joined</div>
              </div>
              {filtered.map((u) => (
                <button
                  key={u.id}
                  onClick={() => setOpenUser(u)}
                  className="w-full text-left grid grid-cols-[40px_2fr_2fr_1.5fr_1.5fr_1fr_1.5fr_1fr] gap-4 px-5 py-3.5 border-b border-ink/25 last:border-b-0 items-center hover:bg-parchment-100/60"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(u.id)}
                    onChange={() => toggle(u.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="accent-oxblood"
                  />
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 bg-oxblood text-parchment-100 flex items-center justify-center font-display italic flex-shrink-0">
                      {u.name[0]}
                    </div>
                    <div className="leading-tight min-w-0">
                      <div className="font-display italic text-[1.05rem] text-ink truncate">{u.name}</div>
                      <div className="kicker text-ink/50">{u.id}</div>
                    </div>
                  </div>
                  <div className="font-mono text-sm text-ink truncate">{u.handle}</div>
                  <div className="font-body italic text-ink/80 truncate">{u.city}</div>
                  <div className="font-body text-ink">{u.plan}</div>
                  <div className="font-mono text-ink">{u.runs}</div>
                  <div>
                    <span className={`kicker px-2 py-1 ${STATUS_TONE[u.status]}`}>{u.status}</span>
                  </div>
                  <div className="text-right font-body italic text-ink/65 text-sm">{u.joined}</div>
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="px-5 py-12 text-center font-display italic text-ink/55">
                  no makers match that filter.
                </div>
              )}
            </div>
          </div>

          <div className="p-3 flex items-center justify-between flex-wrap gap-2 border-t border-ink/20">
            <span className="kicker text-ink/55">
              SHOWING {filtered.length} OF {PLATFORM.subscribers}
            </span>
            <div className="flex gap-1">
              <button className="kicker border border-ink/40 px-2 py-1">←</button>
              <button className="kicker border border-ink bg-ink text-parchment-100 px-2 py-1">01</button>
              <button className="kicker border border-ink/40 px-2 py-1">02</button>
              <button className="kicker border border-ink/40 px-2 py-1">03</button>
              <button className="kicker border border-ink/40 px-2 py-1">→</button>
            </div>
          </div>
        </div>

        {/* RIGHT — RECENT SIGNUPS */}
        <aside className="lg:col-span-3 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5 self-start">
          <div className="kicker text-oxblood mb-1">today at the door</div>
          <h3 className="font-display italic text-xl text-ink leading-none">New signups</h3>
          <ol className="mt-5 space-y-4">
            {SIGNUP_FEED.map((s, i) => (
              <li key={i} className="border-b border-dashed border-ink/30 pb-3 last:border-b-0">
                <div className="flex items-center gap-3">
                  <span className="font-display italic text-oxblood text-2xl leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <div className="leading-tight min-w-0">
                    <div className="font-mono text-ink truncate">{s.handle}</div>
                    <div className="kicker text-ink/55 truncate">{s.city}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-1.5">
                  <span className="kicker text-ink/60">{s.plan}</span>
                  <span className="kicker text-ink/45">{s.when}</span>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      {/* USER DRAWER */}
      {openUser && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setOpenUser(null)} />
          <div className="relative bg-parchment-100 w-full max-w-md border-l-2 border-ink shadow-2xl overflow-y-auto paper">
            <div className="p-5 border-b-2 border-ink flex items-start justify-between">
              <div>
                <div className="kicker text-oxblood">subscriber</div>
                <h3 className="font-display italic text-2xl text-ink">{openUser.name}</h3>
                <div className="font-mono text-sm text-ink/70 mt-0.5">{openUser.handle}</div>
              </div>
              <button onClick={() => setOpenUser(null)} className="kicker border border-ink/40 px-2 py-1">close ×</button>
            </div>
            <div className="p-5 space-y-5">
              <div className="grid grid-cols-2 gap-3 font-body text-ink">
                <Cell label="city">{openUser.city}</Cell>
                <Cell label="plan">{openUser.plan}</Cell>
                <Cell label="status"><span className={`kicker px-2 py-1 ${STATUS_TONE[openUser.status]}`}>{openUser.status}</span></Cell>
                <Cell label="joined">{openUser.joined}</Cell>
                <Cell label="runs · lifetime">{openUser.runs}</Cell>
                <Cell label="folios">{Math.floor(openUser.runs / 4)}</Cell>
              </div>

              <div>
                <div className="kicker text-oxblood mb-2">recent activity</div>
                <ol className="space-y-2 font-body italic text-ink/85">
                  <li>· Pressed a Jaun Elia run — 2 hours ago</li>
                  <li>· Subscribed to Atelier plan — 12 May</li>
                  <li>· Shipped Drop 02 (24 hoodies) — 5 days ago</li>
                  <li>· Opened folio FO-00417 — 6 days ago</li>
                </ol>
              </div>

              <div className="space-y-2">
                <Stamp label={openUser.status === 'active' ? 'IN GOOD STANDING' : 'AT THE DOOR'} rotate={-3} />
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button className="btn-ghost justify-center !py-2.5">message</button>
                  <button className="btn-ghost justify-center !py-2.5">comp credits</button>
                  <button className="btn-ghost justify-center !py-2.5">view as maker</button>
                  <button className="kicker border border-oxblood text-oxblood py-2.5 hover:bg-oxblood hover:text-parchment-100">pause folio</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashShell>
  );
}

function Mini({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: "ink" | "gilt" }) {
  const cls = accent === "ink"
    ? "bg-ink text-parchment-100 border-ink"
    : accent === "gilt"
    ? "bg-gilt-100 text-ink border-gilt-100"
    : "border-ink/40";
  const subCls = accent === "ink" ? "text-parchment-100/65" : accent === "gilt" ? "text-ink/70" : "text-teal-forgotten";
  return (
    <div className={`paper border-2 p-3 sm:p-4 ${cls}`}>
      <div className={`kicker ${accent === "ink" ? "text-gilt-50" : accent === "gilt" ? "text-ink/65" : "text-oxblood"}`}>{label}</div>
      <div className="font-display italic text-[2rem] leading-none mt-1">{value}</div>
      <div className={`kicker mt-1 ${subCls}`}>{sub}</div>
    </div>
  );
}

function Cell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border border-ink/25 p-2.5">
      <div className="kicker text-ink/55 mb-1">{label}</div>
      <div className="font-display italic text-ink">{children}</div>
    </div>
  );
}
