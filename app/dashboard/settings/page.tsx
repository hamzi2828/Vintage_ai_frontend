"use client";

import { useState } from "react";
import { DashShell } from "@/components/DashShell";
import { MAKER_NAV } from "@/lib/nav";
import { ME } from "@/lib/dashData";

const SECTIONS = [
  { id: "profile", label: "Profile" },
  { id: "studio", label: "Studio defaults" },
  { id: "notifications", label: "Notifications" },
  { id: "security", label: "Security" },
  { id: "danger", label: "The Door" },
];

export default function MakerSettingsPage() {
  const [section, setSection] = useState("profile");

  return (
    <DashShell variant="maker" nav={MAKER_NAV} who={ME.name} whoSub={ME.handle} badge={`PLAN · ${ME.plan.toUpperCase()}`}>
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">vi. — your corner of the room</div>
        <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
          Settings.
        </h1>
      </header>

      <div className="grid lg:grid-cols-12 gap-5">
        {/* SIDE */}
        <aside className="lg:col-span-3 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-3 self-start">
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setSection(s.id)}
              className={`w-full text-left px-3 py-2.5 border flex items-center gap-3 ${
                section === s.id ? "bg-ink text-parchment-100 border-ink" : "border-transparent hover:border-ink/30"
              }`}
            >
              <span className={`kicker text-[0.55rem] w-6 ${section === s.id ? "text-gilt-50" : "text-oxblood"}`}>
                {String(i + 1).padStart(2, "0")}.
              </span>
              <span className="font-display italic text-[1.05rem]">{s.label}</span>
            </button>
          ))}
        </aside>

        {/* MAIN */}
        <section className="lg:col-span-9 space-y-5">
          {section === "profile" && (
            <>
              <Card title="Your profile" sub="what the room calls you">
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-20 h-20 bg-oxblood text-parchment-100 flex items-center justify-center font-display italic text-4xl">
                    {ME.avatar}
                  </div>
                  <div>
                    <button className="btn-ghost">change portrait</button>
                    <div className="kicker text-ink/55 mt-2">PNG · JPG · &lt; 2MB</div>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="maker name" defaultValue={ME.name} />
                  <Input label="handle" defaultValue={ME.handle} mono />
                  <Input label="email" defaultValue={ME.email} mono />
                  <Input label="city" defaultValue={ME.city} />
                </div>
                <div className="mt-4">
                  <label className="kicker text-ink/65 block mb-1.5">bio · for the colophon</label>
                  <textarea
                    rows={3}
                    defaultValue="Karachi-based maker. Drops every other monsoon. Late-night couplets, hand-pressed for the diaspora."
                    className="w-full bg-parchment-50 border border-ink/40 p-3 font-body italic text-ink focus:outline-none focus:border-oxblood"
                  />
                </div>
                <div className="mt-4 flex gap-2 justify-end">
                  <button className="btn-ghost">discard</button>
                  <button className="btn-press !py-2 !px-4 !text-sm">save changes</button>
                </div>
              </Card>
            </>
          )}

          {section === "studio" && (
            <Card title="Studio defaults" sub="what the press loads first">
              <div className="grid sm:grid-cols-2 gap-4">
                <Select label="default preset" options={["Jaun Elia Melancholy", "Urdu Ghazal Classical", "Minimalist Sufi", "90s Bazaar Retro", "Truck-Art Maximal", "Monsoon Noir"]} />
                <Select label="default tone" options={["melancholic", "playful", "devotional", "wry", "bilingual", "press-formal"]} />
                <Select label="default variation" options={["honour", "drift", "wander"]} />
                <Select label="default garment" options={["Hoodie", "Tee", "Sweatshirt", "5-Panel"]} />
                <Select label="export resolution" options={["4500 × 5400 · 300dpi", "3000 × 3600 · 300dpi", "2000 × 2400 · 200dpi"]} />
                <Select label="watermark on draft" options={["on", "off"]} />
              </div>
              <div className="mt-5 border-t border-dashed border-ink/30 pt-4">
                <ToggleRow label="auto-save folios" desc="Keep a draft every time you press the run." defaultOn />
                <ToggleRow label="show Urdu transliteration" desc="Print the Roman version under every couplet." defaultOn />
                <ToggleRow label="play press click on submit" desc="A small letterpress thump when the run starts." />
              </div>
            </Card>
          )}

          {section === "notifications" && (
            <Card title="Notifications" sub="when the desk taps you on the shoulder">
              <div className="space-y-1">
                <ToggleRow label="folio ready for press" desc="When your proofs are good to ship." defaultOn />
                <ToggleRow label="order shipped" desc="When the partner hands off." defaultOn />
                <ToggleRow label="payment receipt" desc="A copy of every charge." defaultOn />
                <ToggleRow label="new preset released" desc="When the atelier adds a vibe to the catalogue." defaultOn />
                <ToggleRow label="weekly press digest" desc="Sunday morning — what you made, what you sold." />
                <ToggleRow label="marketing letters" desc="Drops, sales, and the occasional poem." />
              </div>
              <div className="mt-5 border-t border-dashed border-ink/30 pt-4 grid sm:grid-cols-3 gap-2">
                <Channel label="email" defaultOn />
                <Channel label="sms" />
                <Channel label="push" defaultOn />
              </div>
            </Card>
          )}

          {section === "security" && (
            <>
              <Card title="Password" sub="the seal on the door">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="current password" defaultValue="" type="password" placeholder="• • • • • • • •" />
                  <div />
                  <Input label="new password" defaultValue="" type="password" placeholder="• • • • • • • •" />
                  <Input label="confirm" defaultValue="" type="password" placeholder="• • • • • • • •" />
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="btn-press !py-2 !px-4 !text-sm">change password</button>
                </div>
              </Card>
              <Card title="Two-factor" sub="a second key for the door">
                <ToggleRow label="email codes" desc="A six-digit code, sent each time you sign in." defaultOn />
                <ToggleRow label="authenticator app" desc="Better. Use 1Password, Authy, or similar." />
              </Card>
              <Card title="Sessions" sub="who is at your desk">
                <div className="space-y-3">
                  <SessionRow device="Chrome · macOS" location="Karachi · PKT" when="now" current />
                  <SessionRow device="Safari · iPhone" location="Karachi · PKT" when="2 hours ago" />
                  <SessionRow device="Chrome · Windows" location="Lahore · PKT" when="3 days ago" />
                </div>
                <button className="mt-4 kicker border border-oxblood text-oxblood px-3 py-2 hover:bg-oxblood hover:text-parchment-100 transition">sign out of all other sessions</button>
              </Card>
            </>
          )}

          {section === "danger" && (
            <Card title="The Door" sub="careful, friend">
              <div className="space-y-4">
                <div className="border border-ink/30 p-4 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="font-display italic text-lg text-ink">Export your folios</div>
                    <p className="font-body italic text-ink/70">Take everything with you — proofs, captions, mockups — in a single zip.</p>
                  </div>
                  <button className="btn-ghost">↓ export all</button>
                </div>
                <div className="border border-oxblood p-4 flex items-center justify-between flex-wrap gap-3 bg-oxblood/5">
                  <div>
                    <div className="font-display italic text-lg text-oxblood">Close the folio · permanently</div>
                    <p className="font-body italic text-ink/70">Every proof, every order, every line of copy — gone in the morning post.</p>
                  </div>
                  <button className="kicker bg-oxblood text-parchment-100 px-3 py-2.5 hover:bg-oxblood-300 transition">delete account</button>
                </div>
              </div>
            </Card>
          )}
        </section>
      </div>
    </DashShell>
  );
}

function Card({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5">
      <div className="mb-4">
        <div className="kicker text-oxblood">{sub || "settings"}</div>
        <h3 className="font-display italic text-2xl text-ink leading-none mt-1">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Input({ label, defaultValue, mono, type = "text", placeholder }: { label: string; defaultValue: string; mono?: boolean; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="kicker text-ink/65 block mb-1.5">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`w-full bg-parchment-50 border border-ink/40 px-3 py-2.5 text-ink focus:outline-none focus:border-oxblood ${
          mono ? "font-mono text-sm" : "font-display italic"
        }`}
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

function ToggleRow({ label, desc, defaultOn }: { label: string; desc: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(!!defaultOn);
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-dashed border-ink/25 last:border-b-0">
      <div className="flex-1">
        <div className="font-display italic text-ink text-[1.05rem]">{label}</div>
        <p className="font-body italic text-ink/65 text-sm">{desc}</p>
      </div>
      <button
        onClick={() => setOn((v) => !v)}
        className={`relative w-12 h-6 transition flex-shrink-0 ${on ? "bg-oxblood" : "bg-parchment-300"}`}
      >
        <span className={`absolute top-1 w-4 h-4 bg-parchment-100 transition-all ${on ? "left-[28px]" : "left-1"}`} />
      </button>
    </div>
  );
}

function Channel({ label, defaultOn }: { label: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(!!defaultOn);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      className={`border-2 p-3 text-center font-display italic transition ${
        on ? "border-oxblood bg-oxblood text-parchment-100" : "border-ink/40 text-ink/70"
      }`}
    >
      {label}
    </button>
  );
}

function SessionRow({ device, location, when, current }: { device: string; location: string; when: string; current?: boolean }) {
  return (
    <div className="border border-ink/25 p-3 flex items-center justify-between gap-3 flex-wrap">
      <div>
        <div className="font-display italic text-ink">{device}</div>
        <div className="kicker text-ink/55 mt-0.5">{location} · {when}</div>
      </div>
      {current ? (
        <span className="kicker bg-teal-forgotten text-parchment-100 px-2 py-1">this session</span>
      ) : (
        <button className="kicker text-oxblood">sign out →</button>
      )}
    </div>
  );
}
