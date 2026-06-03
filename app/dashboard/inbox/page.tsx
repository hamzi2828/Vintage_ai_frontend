"use client";

import { useState } from "react";
import { DashShell } from "@/components/DashShell";
import { MAKER_NAV } from "@/lib/nav";
import { ME } from "@/lib/dashData";
import { INBOX, Msg } from "@/lib/makerExtras";

const FOLDERS = [
  { id: "all", label: "All", filter: (_: Msg) => true },
  { id: "unread", label: "Unread", filter: (m: Msg) => !!m.unread },
  { id: "starred", label: "Starred", filter: (m: Msg) => !!m.starred },
  { id: "atelier", label: "From the Atelier", filter: (m: Msg) => m.from === "atelier" },
  { id: "press", label: "From the Press", filter: (m: Msg) => m.from === "press" },
  { id: "customer", label: "Customers", filter: (m: Msg) => m.from === "customer" },
  { id: "system", label: "System", filter: (m: Msg) => m.from === "system" },
];

const fromIcon = (from: Msg["from"]) => {
  const m: Record<Msg["from"], { bg: string; ch: string; label: string }> = {
    atelier: { bg: "#5C1B1B", ch: "A", label: "atelier" },
    press: { bg: "#3A5A56", ch: "P", label: "press" },
    customer: { bg: "#B8943A", ch: "C", label: "customer" },
    system: { bg: "#1A1310", ch: "S", label: "system" },
  };
  return m[from];
};

export default function MakerInboxPage() {
  const [folder, setFolder] = useState("all");
  const [openId, setOpenId] = useState(INBOX[0].id);
  const [starred, setStarred] = useState<string[]>(INBOX.filter(m => m.starred).map(m => m.id));

  const active = FOLDERS.find((f) => f.id === folder)!;
  const list = INBOX.filter(active.filter);
  const open = INBOX.find((m) => m.id === openId);

  const toggleStar = (id: string) =>
    setStarred((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  return (
    <DashShell variant="maker" nav={MAKER_NAV} who={ME.name} whoSub={ME.handle} badge={`PLAN · ${ME.plan.toUpperCase()}`}>
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">vi. — letters at the desk</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            Inbox.
          </h1>
          <button className="btn-press !py-2.5 !px-4 !text-sm">+ compose</button>
        </div>
        <p className="font-body italic text-ink/70 mt-2">
          {INBOX.filter(m=>m.unread).length} unread · {INBOX.length} letters in the box.
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-5 min-h-[600px]">
        {/* FOLDERS */}
        <aside className="lg:col-span-2 paper border border-ink/40 shadow-[3px_4px_0_0_rgba(26,19,16,0.12)] p-3 self-start">
          <div className="kicker text-ink/60 px-2 py-2">folders</div>
          {FOLDERS.map((f, i) => {
            const count = INBOX.filter(f.filter).length;
            return (
              <button
                key={f.id}
                onClick={() => setFolder(f.id)}
                className={`w-full text-left px-3 py-2 flex items-center justify-between gap-2 ${
                  folder === f.id ? "bg-ink text-parchment-100" : "hover:bg-parchment-100/60"
                }`}
              >
                <span className="flex items-center gap-2 min-w-0">
                  <span className={`kicker text-[0.55rem] ${folder === f.id ? "text-gilt-50" : "text-oxblood"}`}>{String(i + 1).padStart(2, "0")}.</span>
                  <span className="font-display italic truncate">{f.label}</span>
                </span>
                {count > 0 && (
                  <span className={`kicker text-[0.55rem] ${folder === f.id ? "text-parchment-100/70" : "text-ink/55"}`}>{count}</span>
                )}
              </button>
            );
          })}
          <div className="mt-3 pt-3 border-t border-ink/20 px-2 py-2">
            <div className="kicker text-ink/60 mb-2">labels</div>
            {["orders", "press", "drops", "support"].map((l) => (
              <button key={l} className="kicker w-full text-left text-ink/65 hover:text-ink py-1">· {l}</button>
            ))}
          </div>
        </aside>

        {/* MESSAGE LIST */}
        <section className="lg:col-span-4 paper border border-ink/40 shadow-[3px_4px_0_0_rgba(26,19,16,0.12)]">
          <div className="p-3 border-b border-ink/30 flex items-center gap-2">
            <input
              type="search"
              placeholder="search letters…"
              className="flex-1 bg-parchment-50 border border-ink/40 px-3 py-2 font-display italic text-ink focus:outline-none focus:border-oxblood text-sm"
            />
            <button className="kicker border border-ink/40 px-2 py-2">filter</button>
          </div>
          <ul className="overflow-y-auto" style={{ maxHeight: "640px" }}>
            {list.map((m) => {
              const i = fromIcon(m.from);
              const isOpen = openId === m.id;
              const isStarred = starred.includes(m.id);
              return (
                <li key={m.id}>
                  <button
                    onClick={() => setOpenId(m.id)}
                    className={`w-full text-left p-4 border-b border-ink/20 transition ${
                      isOpen ? "bg-parchment-100" : m.unread ? "bg-parchment-50 hover:bg-parchment-100/60" : "hover:bg-parchment-100/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 flex items-center justify-center text-parchment-100 font-display italic flex-shrink-0"
                        style={{ background: i.bg }}
                      >
                        {i.ch}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className={`font-display italic text-ink truncate ${m.unread ? "font-semibold" : ""}`}>{m.fromName}</span>
                          <span className="kicker text-ink/45 whitespace-nowrap flex-shrink-0">{m.when}</span>
                        </div>
                        <div className={`text-[0.95rem] mt-0.5 ${m.unread ? "text-ink font-medium" : "text-ink/80"} truncate`}>
                          {m.subject}
                        </div>
                        <div className="font-body italic text-ink/55 text-sm mt-1 line-clamp-2">{m.preview}</div>
                        <div className="flex items-center gap-2 mt-2">
                          {m.unread && <span className="block w-2 h-2 rounded-full bg-oxblood" />}
                          {isStarred && <span className="text-gilt-100 text-sm">★</span>}
                          {m.attachment && <span className="kicker text-ink/55 text-[0.55rem]">⊟ attached</span>}
                          <span className="kicker text-ink/45 text-[0.55rem] ml-auto">{i.label}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
            {list.length === 0 && (
              <li className="p-10 text-center font-display italic text-ink/55">no letters in this folder.</li>
            )}
          </ul>
        </section>

        {/* MESSAGE BODY */}
        <section className="lg:col-span-6 paper border border-ink/40 shadow-[3px_4px_0_0_rgba(26,19,16,0.12)] p-5 ruled">
          {open ? (
            <>
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-ink/30 mb-5">
                <div className="flex items-start gap-3 min-w-0">
                  <div
                    className="w-12 h-12 flex items-center justify-center text-parchment-100 font-display italic text-xl flex-shrink-0"
                    style={{ background: fromIcon(open.from).bg }}
                  >
                    {fromIcon(open.from).ch}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display italic text-xl text-ink">{open.fromName}</div>
                    <div className="kicker text-ink/55 mt-0.5">{fromIcon(open.from).label} · {open.when}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => toggleStar(open.id)}
                    className={`kicker px-2 py-1.5 border ${starred.includes(open.id) ? "bg-gilt-100 text-ink border-gilt-100" : "border-ink/40"}`}
                  >
                    ★
                  </button>
                  <button className="kicker px-2 py-1.5 border border-ink/40">archive</button>
                  <button className="kicker px-2 py-1.5 border border-oxblood text-oxblood">delete</button>
                </div>
              </div>

              <h2 className="font-display italic text-3xl text-ink leading-tight mb-5">{open.subject}</h2>

              <div className="font-body text-ink text-[1.05rem] leading-relaxed whitespace-pre-wrap">
                {open.body}
              </div>

              {open.attachment && (
                <div className="mt-6 inline-flex items-center gap-3 border-2 border-dashed border-ink/40 px-4 py-3">
                  <span className="font-mono text-2xl text-oxblood">⊟</span>
                  <div>
                    <div className="font-display italic text-ink">{open.attachment}</div>
                    <div className="kicker text-ink/55">click to download</div>
                  </div>
                </div>
              )}

              <div className="mt-8 pt-5 border-t border-dashed border-ink/30">
                <div className="kicker text-oxblood mb-2">reply</div>
                <textarea
                  rows={4}
                  placeholder="a short note back, friend…"
                  className="w-full bg-parchment-50 border border-ink/40 p-3 font-body italic text-ink focus:outline-none focus:border-oxblood"
                />
                <div className="mt-3 flex items-center gap-2 justify-end">
                  <button className="btn-ghost">save draft</button>
                  <button className="btn-press !py-2 !px-4 !text-sm">send →</button>
                </div>
              </div>
            </>
          ) : (
            <div className="font-display italic text-ink/55 text-center py-20">pick a letter from the list.</div>
          )}
        </section>
      </div>
    </DashShell>
  );
}
