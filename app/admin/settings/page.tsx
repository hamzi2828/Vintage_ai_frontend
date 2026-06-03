"use client";

import { useState } from "react";
import { DashShell } from "@/components/DashShell";
import { Stamp } from "@/components/Stamp";
import { ADMIN_NAV } from "@/lib/nav";
import { FEATURE_FLAGS, TEAM, EMAIL_TEMPLATES } from "@/lib/moreData";
import { PRICING } from "@/lib/data";

const SECTIONS = [
  { id: "house", label: "House" },
  { id: "pricing", label: "Pricing" },
  { id: "flags", label: "Feature Flags" },
  { id: "email", label: "Email" },
  { id: "integrations", label: "Integrations" },
  { id: "team", label: "Team" },
];

export default function AdminSettingsPage() {
  const [section, setSection] = useState("house");
  const [flagState, setFlagState] = useState(
    Object.fromEntries(FEATURE_FLAGS.map((f) => [f.key, f.on]))
  );

  return (
    <DashShell variant="admin" nav={ADMIN_NAV} who="Atelier Desk" whoSub="admin · house" badge="ADMINISTRATOR">
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">vii. — the rule-book</div>
        <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
          House <span className="text-oxblood">rules.</span>
        </h1>
        <p className="font-body italic text-ink/70 mt-2 max-w-2xl">
          How the press is configured. Edit with care — every change is a small letter to the room.
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-5">
        {/* SECTION NAV */}
        <aside className="lg:col-span-3 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-3 self-start">
          <div className="kicker text-ink/60 px-2 py-2">the chapters</div>
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setSection(s.id)}
              className={`w-full text-left px-3 py-2.5 border flex items-center gap-3 ${
                section === s.id
                  ? "bg-ink text-parchment-100 border-ink"
                  : "border-transparent hover:border-ink/30"
              }`}
            >
              <span className={`kicker text-[0.55rem] w-6 ${section === s.id ? "text-gilt-50" : "text-oxblood"}`}>
                {String(i + 1).padStart(2, "0")}.
              </span>
              <span className="font-display italic text-[1.05rem]">{s.label}</span>
            </button>
          ))}
        </aside>

        {/* CONTENT */}
        <section className="lg:col-span-9 space-y-5">
          {section === "house" && (
            <>
              <Card title="House identity" sub="what the room is called">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="atelier name" defaultValue="Vintage AI" />
                  <Input label="city of record" defaultValue="Karachi" />
                  <Input label="contact email" defaultValue="atelier@vintage.ai" />
                  <Input label="support hours" defaultValue="Mon — Fri · 10 — 18 PKT" />
                </div>
              </Card>
              <Card title="Locale & currency" sub="the language of the desk">
                <div className="grid sm:grid-cols-3 gap-4">
                  <Select label="default language" options={["English", "Urdu", "Bilingual"]} />
                  <Select label="currency" options={["PKR (Rs.)", "USD ($)", "GBP (£)"]} />
                  <Select label="time zone" options={["Asia/Karachi (PKT)", "Europe/London (BST)"]} />
                </div>
              </Card>
              <Card title="House description" sub="the marketing copy">
                <textarea
                  rows={4}
                  defaultValue="An atelier for the poet-maker. We bind cultural soul to ready-to-print apparel — in the same room where the ghazal is sung."
                  className="w-full bg-parchment-50 border border-ink/40 p-3 font-body italic text-ink focus:outline-none focus:border-oxblood"
                />
              </Card>
            </>
          )}

          {section === "pricing" && (
            <>
              {PRICING.map((p, i) => (
                <Card key={p.name} title={p.name} sub={p.tag} stamp={p.stamp}>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Input label="plan name" defaultValue={p.name} />
                    <Input label="price" defaultValue={p.price} />
                    <Input label="cadence" defaultValue={p.cadence} />
                  </div>
                  <div className="mt-4">
                    <div className="kicker text-ink/60 mb-2">features</div>
                    <ul className="space-y-2">
                      {p.feats.map((f) => (
                        <li key={f} className="flex items-center gap-2 border border-ink/25 px-3 py-2">
                          <span className="block w-1.5 h-1.5 bg-oxblood flex-shrink-0" />
                          <span className="font-body text-ink flex-1">{f}</span>
                          <button className="kicker text-oxblood">×</button>
                        </li>
                      ))}
                      <button className="kicker border border-dashed border-ink/40 w-full py-2 text-ink/65 hover:border-ink hover:text-ink">+ add feature</button>
                    </ul>
                  </div>
                  <div className="mt-4 flex items-center justify-between flex-wrap gap-3 border-t border-dashed border-ink/30 pt-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked={i === 1} className="accent-oxblood" />
                      <span className="font-body text-ink/85">visible on landing page</span>
                    </label>
                    <button className="kicker bg-ink text-parchment-100 border border-ink px-3 py-2">save changes</button>
                  </div>
                </Card>
              ))}
            </>
          )}

          {section === "flags" && (
            <Card title="Feature flags" sub="what the room sees, today">
              <div className="space-y-3">
                {FEATURE_FLAGS.map((f) => (
                  <div key={f.key} className="border border-ink/30 p-4 flex items-start gap-4">
                    <button
                      onClick={() => setFlagState((s) => ({ ...s, [f.key]: !s[f.key] }))}
                      className={`relative w-12 h-6 transition flex-shrink-0 mt-1 ${flagState[f.key] ? "bg-oxblood" : "bg-parchment-300"}`}
                      aria-label="toggle"
                    >
                      <span className={`absolute top-1 w-4 h-4 bg-parchment-100 transition-all ${flagState[f.key] ? "left-[28px]" : "left-1"}`} />
                    </button>
                    <div className="flex-1">
                      <div className="font-display italic text-lg text-ink leading-tight">{f.label}</div>
                      <code className="kicker text-ink/55 block mt-0.5">{f.key}</code>
                      <p className="font-body italic text-ink/75 mt-1">{f.desc}</p>
                    </div>
                    <span className={`kicker px-2 py-1 ${flagState[f.key] ? "bg-teal-forgotten text-parchment-100" : "bg-parchment-300 text-ink/65"}`}>
                      {flagState[f.key] ? "live" : "off"}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {section === "email" && (
            <Card title="Email templates" sub="letters the desk sends">
              <div className="overflow-x-auto">
                <div className="min-w-[640px]">
                  <div className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr] gap-3 px-3 py-2 border-b-2 border-ink kicker text-ink/60">
                    <div>id</div><div>template</div><div>subject</div><div>sent</div><div>edited</div>
                  </div>
                  {EMAIL_TEMPLATES.map((e) => (
                    <div key={e.id} className="grid grid-cols-[1fr_2fr_2fr_1fr_1fr] gap-3 px-3 py-3 border-b border-ink/25 last:border-b-0 items-center hover:bg-parchment-100/60">
                      <div className="kicker text-ink/55">{e.id}</div>
                      <div className="font-display italic text-ink">{e.name}</div>
                      <div className="font-body italic text-ink/85 truncate">{e.subject}</div>
                      <div className="font-mono text-ink text-sm">{e.sent}</div>
                      <div className="kicker text-ink/55">{e.lastEdited}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="btn-ghost">+ new template</button>
                <button className="btn-ghost">test send</button>
              </div>
            </Card>
          )}

          {section === "integrations" && (
            <>
              <Card title="Stripe" sub="the till" stamp="CONNECTED">
                <Input label="api key" defaultValue="sk_live_••••••••••••••2VqK" readOnly mono />
                <Input label="webhook secret" defaultValue="whsec_••••••••••••••B4xP" readOnly mono />
                <div className="mt-3 flex gap-2">
                  <button className="btn-ghost">rotate keys</button>
                  <button className="btn-ghost">test webhook</button>
                </div>
              </Card>
              <Card title="OpenAI · Poet's Pen" sub="the language model" stamp="CONNECTED">
                <Input label="api key" defaultValue="sk-•••••••••••••••••••••V8d" readOnly mono />
                <Select label="model · default" options={["gpt-4o", "gpt-4o-mini", "claude-3.5-sonnet"]} />
              </Card>
              <Card title="Replicate · Aesthetic Engine" sub="the image model" stamp="CONNECTED">
                <Input label="api token" defaultValue="r8_•••••••••••••••••••••P3z" readOnly mono />
                <Select label="default model" options={["flux-pro-1.1", "flux-dev", "sdxl"]} />
              </Card>
              <Card title="Easypaisa & JazzCash" sub="local checkout" stamp="DRAFT">
                <Input label="merchant id" defaultValue="—" />
                <p className="font-body italic text-ink/65 mt-2">Connect to accept local payments without leaving the room.</p>
              </Card>
            </>
          )}

          {section === "team" && (
            <Card title="The team" sub="who can pull the levers">
              <div className="space-y-3">
                {TEAM.map((t) => (
                  <div key={t.email} className="border border-ink/30 p-4 flex items-center gap-4 flex-wrap">
                    <div className="w-12 h-12 bg-oxblood text-parchment-100 flex items-center justify-center font-display italic text-xl">{t.avatar}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display italic text-lg text-ink">{t.name}</div>
                      <div className="kicker text-ink/60">{t.role}</div>
                      <div className="font-mono text-sm text-ink/75">{t.email}</div>
                    </div>
                    <span className={`kicker px-2 py-1 ${
                      t.access === "owner" ? "bg-oxblood text-parchment-100" :
                      t.access === "admin" ? "bg-ink text-parchment-100" : "bg-parchment-300 text-ink/65"
                    }`}>{t.access}</span>
                    <button className="kicker border border-ink/40 px-2 py-1.5">edit</button>
                  </div>
                ))}
                <button className="w-full kicker border-2 border-dashed border-ink/40 py-3 hover:border-ink hover:bg-parchment-100/50">+ invite teammate</button>
              </div>
            </Card>
          )}
        </section>
      </div>
    </DashShell>
  );
}

function Card({ title, sub, stamp, children }: { title: string; sub?: string; stamp?: string; children: React.ReactNode }) {
  return (
    <div className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5 relative">
      <div className="flex items-start justify-between mb-4 gap-3">
        <div>
          <div className="kicker text-oxblood">{sub || "configuration"}</div>
          <h3 className="font-display italic text-2xl text-ink leading-none mt-1">{title}</h3>
        </div>
        {stamp && <Stamp label={stamp} rotate={4} />}
      </div>
      {children}
    </div>
  );
}

function Input({ label, defaultValue, readOnly, mono }: { label: string; defaultValue: string; readOnly?: boolean; mono?: boolean }) {
  return (
    <div>
      <label className="kicker text-ink/65 block mb-1.5">{label}</label>
      <input
        type="text"
        defaultValue={defaultValue}
        readOnly={readOnly}
        className={`w-full bg-parchment-50 border border-ink/40 px-3 py-2.5 text-ink focus:outline-none focus:border-oxblood ${
          mono ? "font-mono text-sm" : "font-display italic"
        } ${readOnly ? "cursor-not-allowed text-ink/65" : ""}`}
      />
    </div>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="kicker text-ink/65 block mb-1.5">{label}</label>
      <select className="w-full bg-parchment-50 border border-ink/40 px-3 py-2.5 font-display italic text-ink focus:outline-none focus:border-oxblood">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
