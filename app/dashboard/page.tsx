import Link from "next/link";
import { DashShell, NavItem } from "@/components/DashShell";
import { Sparkline, ProgressBar } from "@/components/Charts";
import { Stamp } from "@/components/Stamp";
import { ME, FOLIOS, ORDERS, USAGE_30D } from "@/lib/dashData";

const NAV: NavItem[] = [
  { href: "/dashboard", label: "The Desk", numeral: "i." },
  { href: "/dashboard/folios", label: "Folios", numeral: "ii.", badge: FOLIOS.length },
  { href: "/dashboard/presets", label: "Presets", numeral: "iii." },
  { href: "/dashboard/orders", label: "Print Orders", numeral: "iv.", badge: ORDERS.filter(o => o.status !== 'complete' && o.status !== 'shipped').length },
  { href: "/dashboard/subscription", label: "Subscription", numeral: "v." },
  { href: "/dashboard/settings", label: "Settings", numeral: "vi." },
  { href: "/studio", label: "→ Enter Studio", numeral: "↦" },
];

const statusColor = (s: string) => {
  const m: Record<string, string> = {
    "ready-for-press": "bg-oxblood text-parchment-100",
    "drafting": "bg-gilt-100 text-ink",
    "shipped": "bg-teal-forgotten text-parchment-100",
    "regenerating": "bg-ink text-parchment-100",
    "archived": "bg-parchment-300 text-ink/60",
    "in-press": "bg-oxblood text-parchment-100",
    "queued": "bg-ink text-parchment-100",
    "complete": "bg-teal-forgotten text-parchment-100",
    "awaiting-art": "bg-gilt-100 text-ink",
  };
  return m[s] || "bg-ink text-parchment-100";
};

export default function MakerDashboard() {
  return (
    <DashShell variant="maker" nav={NAV} who={ME.name} whoSub={ME.handle} badge={`PLAN · ${ME.plan.toUpperCase()}`}>
      {/* ── HEADER ── */}
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">desk · the maker</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            Welcome back, <span className="text-oxblood">{ME.name}.</span>
          </h1>
          <Link href="/studio" className="btn-press">
            press a new run
            <span aria-hidden>↦</span>
          </Link>
        </div>
        <p className="font-body italic text-ink/70 mt-2 max-w-2xl">
          The ink is mixed. The light is good. There are {FOLIOS.length} folios at your desk and{" "}
          {ORDERS.filter(o => o.status === 'in-press' || o.status === 'queued').length} runs in press.
        </p>
      </header>

      {/* ── STAT TICKETS ── */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard
          label="runs · this month"
          value={`${ME.runsThisMonth}`}
          sub={`of ${ME.runsLimit} pressed`}
          progress={ME.runsThisMonth / ME.runsLimit}
        />
        <StatCard
          label="folios on desk"
          value={`${FOLIOS.length}`}
          sub={`${FOLIOS.filter(f=>f.status==='ready-for-press').length} ready for press`}
        />
        <StatCard
          label="orders in press"
          value={`${ORDERS.filter(o=>o.status==='in-press').length}`}
          sub={`${ORDERS.filter(o=>o.status==='queued').length} queued`}
          accent="ink"
        />
        <StatCard
          label="this month, by hand"
          value="Rs. 84,200"
          sub="+ 18% vs last month"
          accent="oxblood"
        />
      </section>

      {/* ── USAGE CHART + ACTIVE FOLIO ── */}
      <section className="grid lg:grid-cols-12 gap-5 mb-10">
        <div className="lg:col-span-7 paper border border-ink/40 p-5 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)]">
          <div className="flex items-end justify-between mb-2 flex-wrap gap-2">
            <div>
              <div className="kicker text-oxblood">run ledger · 30 days</div>
              <div className="font-display italic text-2xl text-ink leading-none mt-1">
                rhythm of the press
              </div>
            </div>
            <div className="flex gap-1.5">
              <button className="kicker border border-ink/40 px-2 py-1">7d</button>
              <button className="kicker border border-ink bg-ink text-parchment-100 px-2 py-1">30d</button>
              <button className="kicker border border-ink/40 px-2 py-1">90d</button>
            </div>
          </div>
          <Sparkline data={USAGE_30D} height={140} />
          <div className="mt-3 grid grid-cols-3 gap-3 font-mono text-[0.7rem] text-ink/75">
            <div><span className="text-ink/45">PEAK · </span>18 runs (day 29)</div>
            <div><span className="text-ink/45">AVG · </span>10.4 / day</div>
            <div><span className="text-ink/45">TREND · </span><span className="text-oxblood">↗ rising</span></div>
          </div>
        </div>

        <div className="lg:col-span-5 paper border border-ink/40 p-5 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] relative overflow-hidden">
          <div className="kicker text-oxblood">currently in press</div>
          <div className="font-display italic text-2xl text-ink leading-tight mt-1">
            {FOLIOS[0].title}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1,2,3].map((i) => (
              <div
                key={i}
                className="aspect-square border border-ink/30 flex items-center justify-center text-parchment-100 text-3xl font-display italic"
                style={{ background: FOLIOS[0].cover }}
              >
                {FOLIOS[0].glyph}
              </div>
            ))}
          </div>
          <div className="mt-4 font-body text-ink/85 text-sm">
            5 proofs ready · ETA Friday at the Korangi press · 24 hoodies committed.
          </div>
          <div className="mt-4 flex gap-2">
            <Link href="/studio" className="btn-ghost flex-1 justify-center !text-[0.62rem]">open in studio</Link>
            <button className="btn-ghost flex-1 justify-center !text-[0.62rem]">send to printer</button>
          </div>
          <Stamp label="READY FOR PRESS" className="absolute top-4 right-4" rotate={6} />
        </div>
      </section>

      {/* ── RECENT FOLIOS ── */}
      <section className="mb-10">
        <div className="flex items-end justify-between mb-4 flex-wrap gap-3">
          <div>
            <div className="kicker text-oxblood">your bookshelf</div>
            <h2 className="font-display italic text-2xl sm:text-3xl text-ink leading-none mt-1">
              Recent folios
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="kicker border border-ink/40 px-2 py-1.5">filter</button>
            <button className="kicker border border-ink/40 px-2 py-1.5">sort · updated ↓</button>
            <Link href="/studio" className="btn-ghost">+ new folio</Link>
          </div>
        </div>

        <div className="border-2 border-ink">
          <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 border-b-2 border-ink bg-parchment-100 kicker text-ink/60">
            <div className="col-span-1">no.</div>
            <div className="col-span-4">folio</div>
            <div className="col-span-3">preset</div>
            <div className="col-span-1">proofs</div>
            <div className="col-span-2">status</div>
            <div className="col-span-1 text-right">updated</div>
          </div>
          {FOLIOS.map((f) => (
            <div
              key={f.id}
              className="grid grid-cols-12 gap-4 px-5 py-4 border-b border-ink/25 last:border-b-0 items-center hover:bg-parchment-100/50 transition-colors"
            >
              <div className="col-span-12 md:col-span-1 flex items-center gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center text-parchment-100 text-lg font-display italic flex-shrink-0"
                  style={{ background: f.cover }}
                >
                  {f.glyph}
                </div>
                <span className="kicker text-ink/55 md:hidden">{f.id}</span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="font-display italic text-[1.15rem] text-ink leading-none">{f.title}</div>
                <div className="kicker text-ink/50 mt-1 hidden md:block">{f.id}</div>
              </div>
              <div className="col-span-7 md:col-span-3 font-body italic text-ink/85">{f.vibe}</div>
              <div className="col-span-2 md:col-span-1 font-mono text-sm text-ink">{f.proofs}</div>
              <div className="col-span-3 md:col-span-2">
                <span className={`kicker px-2 py-1 ${statusColor(f.status)}`}>
                  {f.status}
                </span>
              </div>
              <div className="col-span-12 md:col-span-1 text-right font-body italic text-ink/65 text-sm">
                {f.updated}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ORDERS + SUBSCRIPTION ── */}
      <section className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 paper border border-ink/40 p-5 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)]">
          <div className="flex items-end justify-between mb-4">
            <div>
              <div className="kicker text-oxblood">at the press</div>
              <h2 className="font-display italic text-2xl text-ink leading-none mt-1">Print orders</h2>
            </div>
            <button className="kicker border border-ink/40 px-2 py-1.5">view all →</button>
          </div>
          <div className="space-y-3">
            {ORDERS.map((o) => (
              <div key={o.id} className="grid grid-cols-12 gap-3 items-center py-3 border-b border-dashed border-ink/30 last:border-b-0">
                <div className="col-span-12 md:col-span-2 kicker text-ink/55">{o.id}</div>
                <div className="col-span-12 md:col-span-5 font-body text-ink">{o.garment}</div>
                <div className="col-span-6 md:col-span-2 font-body italic text-ink/70 text-sm">{o.partner}</div>
                <div className="col-span-6 md:col-span-2">
                  <span className={`kicker px-2 py-1 ${statusColor(o.status)}`}>{o.status}</span>
                </div>
                <div className="col-span-12 md:col-span-1 font-mono text-[0.7rem] text-ink/65 text-right">{o.eta}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="paper border-2 border-oxblood bg-oxblood text-parchment-100 p-5 shadow-[6px_8px_0_0_rgba(26,19,16,0.18)] relative">
          <div className="kicker text-gilt-50">your subscription</div>
          <div className="font-display italic text-3xl mt-1 leading-none">{ME.plan}</div>
          <div className="kicker text-parchment-100/60 mt-1">no. 1042 · renews 03 jul</div>

          <div className="mt-5">
            <div className="flex justify-between mb-1 text-sm font-mono">
              <span>runs used</span><span>{ME.runsThisMonth} / {ME.runsLimit}</span>
            </div>
            <div className="h-1.5 bg-parchment-100/20"><div className="h-full bg-gilt-50" style={{ width: `${ME.runsThisMonth / ME.runsLimit * 100}%` }} /></div>
          </div>

          <ul className="mt-5 space-y-1.5 font-body text-[0.95rem] text-parchment-100/90">
            <li>· Unlimited generations</li>
            <li>· All six cultural presets</li>
            <li>· Poet's Pen + Mockup</li>
            <li>· DTF-ready 300dpi export</li>
          </ul>

          <button className="mt-6 w-full font-display italic py-2.5 border border-parchment-100 hover:bg-parchment-100 hover:text-oxblood transition">
            manage subscription →
          </button>

          <div className="absolute top-3 right-3">
            <Stamp label="EARLY BIRD" color="gilt" rotate={5} />
          </div>
        </div>
      </section>
    </DashShell>
  );
}

function StatCard({
  label,
  value,
  sub,
  progress,
  accent = "parchment",
}: {
  label: string;
  value: string;
  sub: string;
  progress?: number;
  accent?: "parchment" | "ink" | "oxblood";
}) {
  const isInk = accent === "ink";
  const isOx = accent === "oxblood";
  return (
    <div
      className={`paper border-2 p-4 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] relative ${
        isInk ? "bg-ink text-parchment-100 border-ink" : isOx ? "bg-oxblood text-parchment-100 border-oxblood" : "border-ink/40"
      }`}
    >
      <div className={`kicker ${isInk ? "text-gilt-50" : isOx ? "text-gilt-50" : "text-oxblood"}`}>
        {label}
      </div>
      <div className="font-display italic text-[2.4rem] leading-none mt-1">{value}</div>
      <div className={`font-body italic text-sm mt-1 ${isInk || isOx ? "text-parchment-100/70" : "text-ink/65"}`}>
        {sub}
      </div>
      {progress !== undefined && (
        <div className="mt-3">
          <ProgressBar value={progress * 100} max={100} color={isInk || isOx ? "#B8943A" : "#5C1B1B"} />
        </div>
      )}
    </div>
  );
}
