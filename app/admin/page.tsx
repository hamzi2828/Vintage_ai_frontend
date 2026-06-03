import { DashShell, NavItem } from "@/components/DashShell";
import { Bars, DonutSplit, Sparkline } from "@/components/Charts";
import { Stamp } from "@/components/Stamp";
import {
  PLATFORM,
  USERS,
  PRESET_USE,
  PRINT_QUEUE,
  REVENUE_12W,
  SUBS_BREAKDOWN,
} from "@/lib/dashData";

const NAV: NavItem[] = [
  { href: "/admin", label: "The Overview", numeral: "i." },
  { href: "/admin/users", label: "Subscribers", numeral: "ii.", badge: PLATFORM.subscribers },
  { href: "/admin/presets", label: "Presets", numeral: "iii." },
  { href: "/admin/orders", label: "Print Queue", numeral: "iv.", badge: PRINT_QUEUE.length },
  { href: "/admin/partners", label: "Press Partners", numeral: "v." },
  { href: "/admin/revenue", label: "Revenue", numeral: "vi." },
  { href: "/admin/settings", label: "House Rules", numeral: "vii." },
  { href: "/dashboard", label: "↦ Maker View", numeral: "→" },
];

const statusColor = (s: string) => {
  const m: Record<string, string> = {
    active: "bg-teal-forgotten text-parchment-100",
    trial: "bg-gilt-100 text-ink",
    paused: "bg-parchment-300 text-ink/65",
    queued: "bg-ink text-parchment-100",
    "in-press": "bg-oxblood text-parchment-100",
    "awaiting-art": "bg-gilt-100 text-ink",
  };
  return m[s] || "bg-ink text-parchment-100";
};

export default function AdminDashboard() {
  return (
    <DashShell variant="admin" nav={NAV} who="Atelier Desk" whoSub="admin · house" badge="ADMINISTRATOR">
      {/* ── HEADER ── */}
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">the house · overview</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            The press, <span className="text-oxblood">at a glance.</span>
          </h1>
          <div className="flex flex-wrap gap-2">
            <button className="kicker border border-ink/40 px-3 py-2">7d</button>
            <button className="kicker border border-ink bg-ink text-parchment-100 px-3 py-2">30d</button>
            <button className="kicker border border-ink/40 px-3 py-2">90d</button>
            <button className="kicker border border-ink/40 px-3 py-2">↓ export</button>
          </div>
        </div>
        <p className="font-body italic text-ink/70 mt-2 max-w-2xl">
          Today, {PLATFORM.subscribers} makers keep a folio with us. {PLATFORM.runs30d.toLocaleString()} runs went to press this month. The ink is paying for itself.
        </p>
      </header>

      {/* ── METRIC TICKETS ── */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <Metric label="subscribers" value={`${PLATFORM.subscribers}`} delta={PLATFORM.subscribersDelta} accent />
        <Metric label="runs · 30d" value={PLATFORM.runs30d.toLocaleString()} delta={PLATFORM.runsDelta} />
        <Metric label="mrr · the press" value={PLATFORM.mrr} delta={PLATFORM.mrrDelta} dark />
        <Metric label="press partners" value={`${PLATFORM.pressVendors}`} delta={PLATFORM.pressDelta} />
      </section>

      {/* ── REVENUE + SUBS DONUT ── */}
      <section className="grid lg:grid-cols-12 gap-5 mb-10">
        <div className="lg:col-span-8 paper border border-ink/40 p-5 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)]">
          <div className="flex items-end justify-between mb-4 flex-wrap gap-2">
            <div>
              <div className="kicker text-oxblood">house revenue · 12 weeks</div>
              <div className="font-display italic text-2xl text-ink leading-none mt-1">
                the ledger
              </div>
            </div>
            <div className="font-mono text-sm text-ink/70">
              <span className="text-ink/45">PEAK · </span>Rs. 98K (wk 12)
            </div>
          </div>
          <Bars data={REVENUE_12W} height={160} color="#5C1B1B" />
          <div className="mt-2 grid grid-cols-12 gap-1 font-mono text-[0.62rem] text-ink/55">
            {REVENUE_12W.map((_, i) => (
              <span key={i} className="text-center">w{i + 1}</span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 paper border border-ink/40 p-5 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)]">
          <div className="kicker text-oxblood">subscribers · by plan</div>
          <div className="font-display italic text-2xl text-ink leading-none mt-1">the room</div>
          <div className="mt-4 flex items-center justify-center">
            <DonutSplit segments={SUBS_BREAKDOWN} size={160} />
          </div>
          <ul className="mt-4 space-y-2">
            {SUBS_BREAKDOWN.map((s) => (
              <li key={s.name} className="flex items-center gap-3">
                <span className="block w-3 h-3" style={{ background: s.color }} />
                <span className="font-display italic text-ink flex-1">{s.name}</span>
                <span className="font-mono text-ink text-sm">{s.count}</span>
                <span className="kicker text-ink/55">
                  {Math.round((s.count / SUBS_BREAKDOWN.reduce((a, b) => a + b.count, 0)) * 100)}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PRESET USAGE + PRINT QUEUE ── */}
      <section className="grid lg:grid-cols-12 gap-5 mb-10">
        <div className="lg:col-span-5 paper border border-ink/40 p-5 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)]">
          <div className="kicker text-oxblood">vibe usage · most pressed</div>
          <h2 className="font-display italic text-2xl text-ink leading-none mt-1">Which souls sell</h2>
          <div className="mt-5 space-y-4">
            {PRESET_USE.map((p, i) => (
              <div key={p.id}>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-display italic text-ink text-[1.1rem]">
                    <span className="kicker text-oxblood mr-2">{String(i + 1).padStart(2, "0")}.</span>
                    {p.name}
                  </span>
                  <span className="font-mono text-sm text-ink">{p.runs.toLocaleString()}</span>
                </div>
                <div className="h-1.5 bg-parchment-300">
                  <div
                    className="h-full bg-oxblood"
                    style={{ width: `${(p.runs / PRESET_USE[0].runs) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)]">
          <div className="p-5 border-b border-ink/30 flex items-end justify-between flex-wrap gap-3">
            <div>
              <div className="kicker text-oxblood">print queue · in the press</div>
              <h2 className="font-display italic text-2xl text-ink leading-none mt-1">At the partners</h2>
            </div>
            <div className="flex gap-2">
              <button className="kicker border border-ink/40 px-2 py-1.5">refresh</button>
              <button className="kicker bg-ink text-parchment-100 border border-ink px-2 py-1.5">manage</button>
            </div>
          </div>
          <div>
            {PRINT_QUEUE.map((o) => (
              <div key={o.id} className="grid grid-cols-12 gap-3 items-center px-5 py-4 border-b border-dashed border-ink/25 last:border-b-0">
                <div className="col-span-3 md:col-span-2 kicker text-ink/60">{o.id}</div>
                <div className="col-span-9 md:col-span-3 font-body text-ink">{o.maker}</div>
                <div className="col-span-7 md:col-span-3 font-body italic text-ink/85 text-sm">{o.garment}</div>
                <div className="col-span-3 md:col-span-1 font-mono text-sm text-ink">×{o.units}</div>
                <div className="col-span-2 md:col-span-3 text-right">
                  <span className={`kicker px-2 py-1 ${statusColor(o.status)}`}>{o.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBERS TABLE ── */}
      <section className="mb-10">
        <div className="flex items-end justify-between mb-4 flex-wrap gap-3">
          <div>
            <div className="kicker text-oxblood">the room</div>
            <h2 className="font-display italic text-2xl sm:text-3xl text-ink leading-none mt-1">
              Subscribers
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <input
              type="search"
              placeholder="search by name, handle, city…"
              className="bg-parchment-50 border border-ink/40 px-3 py-2 font-display italic text-ink focus:outline-none focus:border-oxblood w-full md:w-72"
            />
            <button className="kicker border border-ink/40 px-3 py-2">filter</button>
            <button className="kicker border border-ink bg-ink text-parchment-100 px-3 py-2">+ invite</button>
          </div>
        </div>

        <div className="border-2 border-ink overflow-x-auto">
          <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 border-b-2 border-ink bg-parchment-100 kicker text-ink/60 min-w-[860px]">
            <div className="col-span-2">id · name</div>
            <div className="col-span-2">handle</div>
            <div className="col-span-2">city</div>
            <div className="col-span-2">plan</div>
            <div className="col-span-1">runs</div>
            <div className="col-span-2">status</div>
            <div className="col-span-1 text-right">joined</div>
          </div>
          {USERS.map((u) => (
            <div
              key={u.id}
              className="grid grid-cols-12 gap-3 px-5 py-4 border-b border-ink/25 last:border-b-0 items-center hover:bg-parchment-100/60 transition-colors min-w-[860px]"
            >
              <div className="col-span-12 md:col-span-2 flex items-center gap-3">
                <div className="w-9 h-9 bg-oxblood text-parchment-100 flex items-center justify-center font-display italic text-base flex-shrink-0">
                  {u.name[0]}
                </div>
                <div className="leading-tight">
                  <div className="font-display italic text-[1.05rem] text-ink">{u.name}</div>
                  <div className="kicker text-ink/50">{u.id}</div>
                </div>
              </div>
              <div className="col-span-6 md:col-span-2 font-mono text-ink text-sm">{u.handle}</div>
              <div className="col-span-6 md:col-span-2 font-body italic text-ink/80">{u.city}</div>
              <div className="col-span-6 md:col-span-2 font-body text-ink">{u.plan}</div>
              <div className="col-span-3 md:col-span-1 font-mono text-ink">{u.runs}</div>
              <div className="col-span-3 md:col-span-2">
                <span className={`kicker px-2 py-1 ${statusColor(u.status)}`}>{u.status}</span>
              </div>
              <div className="col-span-12 md:col-span-1 text-right font-body italic text-ink/65 text-sm">
                {u.joined}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
          <span className="kicker text-ink/55">SHOWING 8 OF {PLATFORM.subscribers}</span>
          <div className="flex gap-1">
            <button className="kicker border border-ink/40 px-2 py-1">←</button>
            <button className="kicker border border-ink bg-ink text-parchment-100 px-2 py-1">01</button>
            <button className="kicker border border-ink/40 px-2 py-1">02</button>
            <button className="kicker border border-ink/40 px-2 py-1">03</button>
            <button className="kicker border border-ink/40 px-2 py-1">→</button>
          </div>
        </div>
      </section>

      {/* ── BETA COHORT + HEALTH ── */}
      <section className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 paper border border-ink/40 p-5 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] relative">
          <Stamp label="WEEK 07 · FIELD-TEST" className="absolute top-4 right-4" rotate={-5} />
          <div className="kicker text-oxblood">beta cohort · the karachi ten</div>
          <h2 className="font-display italic text-2xl text-ink leading-none mt-1">Field reports</h2>
          <p className="font-body italic text-ink/75 mt-3 max-w-2xl">
            Ten Karachi DTF sellers are pressing in exchange for a notebook of feedback. Eight
            have shipped at least one drop. Two are still warming the press.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 font-body">
            <div className="border border-ink/30 p-3">
              <div className="kicker text-ink/55">submitted notes</div>
              <div className="font-display italic text-2xl text-ink leading-none mt-1">23</div>
            </div>
            <div className="border border-ink/30 p-3">
              <div className="kicker text-ink/55">drops shipped</div>
              <div className="font-display italic text-2xl text-ink leading-none mt-1">14</div>
            </div>
            <div className="border border-ink/30 p-3">
              <div className="kicker text-ink/55">avg. rating</div>
              <div className="font-display italic text-2xl text-ink leading-none mt-1">4.6 / 5</div>
            </div>
          </div>
        </div>

        <div className="paper border-2 border-ink bg-ink text-parchment-100 p-5 shadow-[6px_8px_0_0_rgba(26,19,16,0.18)]">
          <div className="kicker text-gilt-50">house health</div>
          <h3 className="font-display italic text-2xl mt-1 leading-none">The press, today</h3>
          <ul className="mt-5 space-y-3 font-body text-[0.98rem]">
            <Row label="api · openai" value="0.92s" tone="ok" />
            <Row label="api · replicate" value="2.41s" tone="warn" />
            <Row label="stripe · webhooks" value="200 · all green" tone="ok" />
            <Row label="dtf partners · online" value="14 / 14" tone="ok" />
            <Row label="signups · today" value="+12" tone="ok" />
          </ul>
          <div className="mt-5 text-center kicker text-parchment-100/50">
            LAST CHECKED · 14:32 PKT
          </div>
        </div>
      </section>
    </DashShell>
  );
}

function Metric({
  label,
  value,
  delta,
  accent = false,
  dark = false,
}: {
  label: string;
  value: string;
  delta: string;
  accent?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={`paper border-2 p-4 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] ${
        dark
          ? "bg-ink text-parchment-100 border-ink"
          : accent
          ? "bg-oxblood text-parchment-100 border-oxblood"
          : "border-ink/40"
      }`}
    >
      <div className={`kicker ${dark || accent ? "text-gilt-50" : "text-oxblood"}`}>{label}</div>
      <div className="font-display italic text-[2.4rem] leading-none mt-1">{value}</div>
      <div className={`kicker mt-2 ${dark || accent ? "text-parchment-100/65" : "text-teal-forgotten"}`}>
        {delta}
      </div>
    </div>
  );
}

function Row({ label, value, tone }: { label: string; value: string; tone: "ok" | "warn" }) {
  return (
    <li className="flex items-center justify-between border-b border-dashed border-parchment-100/15 pb-2">
      <span className="kicker text-parchment-100/65">{label}</span>
      <span className="flex items-center gap-2 font-mono text-sm">
        <span className={`inline-block w-2 h-2 rounded-full ${tone === "ok" ? "bg-teal-forgotten" : "bg-gilt-50"}`} />
        {value}
      </span>
    </li>
  );
}
