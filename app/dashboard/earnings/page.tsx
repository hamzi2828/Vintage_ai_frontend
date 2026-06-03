import { DashShell } from "@/components/DashShell";
import { Bars, Sparkline } from "@/components/Charts";
import { Stamp } from "@/components/Stamp";
import { MAKER_NAV } from "@/lib/nav";
import { ME } from "@/lib/dashData";
import { EARNINGS_30D, PAYOUTS, SALES, TOP_DROPS } from "@/lib/makerExtras";

const fmt = (n: number) => `Rs. ${n.toLocaleString()}`;

export default function MakerEarningsPage() {
  const total30 = EARNINGS_30D.reduce((s, n) => s + n, 0);
  const yesterday = EARNINGS_30D[EARNINGS_30D.length - 1];
  const dayBefore = EARNINGS_30D[EARNINGS_30D.length - 2];
  const delta = Math.round(((yesterday - dayBefore) / dayBefore) * 100);

  return (
    <DashShell variant="maker" nav={MAKER_NAV} who={ME.name} whoSub={ME.handle} badge={`PLAN · ${ME.plan.toUpperCase()}`}>
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">v. — the till</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            Earnings, <span className="text-oxblood">by the page.</span>
          </h1>
          <div className="flex flex-wrap gap-2">
            <button className="kicker border border-ink/40 px-3 py-2">↓ csv</button>
            <button className="kicker bg-ink text-parchment-100 border border-ink px-3 py-2">request a payout</button>
          </div>
        </div>
        <p className="font-body italic text-ink/70 mt-2 max-w-2xl">
          {fmt(total30)} in the till over the last 30 days. The next payout lands on the first of next month.
        </p>
      </header>

      {/* TOP TICKETS */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Big label="this month, by hand" value={fmt(total30)} delta="+ 18% vs last" accent="oxblood" />
        <Big label="yesterday" value={fmt(yesterday)} delta={`${delta > 0 ? "+" : ""}${delta}% vs day before`} />
        <Big label="lifetime, in the till" value={fmt(644_500)} delta="across 18 drops" />
        <Big label="next payout" value={fmt(84_200)} delta="01 Jul · MMXXVI" accent="ink" />
      </section>

      {/* CHART + SPARKLINE */}
      <section className="grid lg:grid-cols-12 gap-5 mb-10">
        <div className="lg:col-span-8 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5">
          <div className="flex items-end justify-between mb-4 flex-wrap gap-2">
            <div>
              <div className="kicker text-oxblood">daily takings · 30 days</div>
              <h2 className="font-display italic text-2xl text-ink leading-none mt-1">The rhythm of the till</h2>
            </div>
            <div className="font-mono text-sm text-ink/70 text-right">
              <div><span className="text-ink/45">PEAK · </span>{fmt(Math.max(...EARNINGS_30D))}</div>
              <div><span className="text-ink/45">AVG · </span>{fmt(Math.round(total30 / 30))} / day</div>
            </div>
          </div>
          <Bars data={EARNINGS_30D} height={170} color="#5C1B1B" />
        </div>

        <div className="lg:col-span-4 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5">
          <div className="kicker text-oxblood">best-selling drops</div>
          <h2 className="font-display italic text-xl text-ink leading-none mt-1 mb-4">The hits</h2>
          <ol className="space-y-3">
            {TOP_DROPS.map((d, i) => (
              <li key={d.name} className="flex items-start gap-3 border-b border-dashed border-ink/25 pb-3 last:border-b-0">
                <span className="font-display italic text-oxblood text-3xl leading-none w-7">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-display italic text-ink leading-tight">{d.name}</div>
                  <div className="flex items-baseline justify-between mt-1.5">
                    <span className="kicker text-ink/55">{d.units} units</span>
                    <span className="font-mono text-ink text-sm">{fmt(d.revenue)}</span>
                  </div>
                  <div className="mt-1 h-1 bg-parchment-300">
                    <div className="h-full bg-oxblood" style={{ width: `${(d.revenue / TOP_DROPS[0].revenue) * 100}%` }} />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RECENT SALES + PAYOUTS */}
      <section className="grid lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)]">
          <div className="p-5 border-b border-ink/30 flex items-end justify-between flex-wrap gap-2">
            <div>
              <div className="kicker text-oxblood">recent sales</div>
              <h2 className="font-display italic text-2xl text-ink leading-none mt-1">Customers, today.</h2>
            </div>
            <button className="kicker border border-ink/40 px-2 py-1.5">view all →</button>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[680px]">
              <div className="grid grid-cols-[1fr_1.5fr_2fr_1fr_1fr] gap-3 px-5 py-3 border-b border-ink/30 kicker text-ink/60">
                <div>customer</div>
                <div>drop</div>
                <div>item</div>
                <div className="text-right">price</div>
                <div className="text-right">when</div>
              </div>
              {SALES.map((s) => (
                <div key={s.id} className="grid grid-cols-[1fr_1.5fr_2fr_1fr_1fr] gap-3 px-5 py-3 border-b border-dashed border-ink/25 last:border-b-0 items-center hover:bg-parchment-100/50">
                  <div>
                    <div className="font-display italic text-ink leading-none">{s.customer}</div>
                    <div className="kicker text-ink/55 mt-0.5">{s.city}</div>
                  </div>
                  <div className="font-display italic text-ink/85 truncate">{s.drop}</div>
                  <div className="font-body italic text-ink/85 truncate">{s.item}</div>
                  <div className="font-mono text-ink text-sm text-right">{fmt(s.price)}</div>
                  <div className="kicker text-ink/55 text-right">{s.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 paper border-2 border-ink bg-ink text-parchment-100 shadow-[6px_8px_0_0_rgba(26,19,16,0.18)] p-5 relative">
          <Stamp label="PAID" color="gilt" rotate={4} className="absolute top-3 right-3" />
          <div className="kicker text-gilt-50">payouts · monthly</div>
          <h2 className="font-display italic text-2xl leading-none mt-1">To your bank</h2>
          <div className="font-body italic text-parchment-100/75 mt-2 text-sm">
            Stripe pays you on the 1st of each month into HBL account ending •••• 4421.
          </div>
          <ul className="mt-5 space-y-3">
            {PAYOUTS.map((p) => (
              <li key={p.id} className="border-b border-dashed border-parchment-100/15 pb-3 last:border-b-0">
                <div className="flex items-baseline justify-between">
                  <span className="font-display italic text-xl leading-none">{fmt(p.amount)}</span>
                  <span className="kicker text-gilt-50">{p.status}</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="kicker text-parchment-100/60">{p.date}</span>
                  <span className="kicker text-parchment-100/60">{p.id}</span>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-5 w-full font-display italic py-2.5 border border-parchment-100 hover:bg-parchment-100 hover:text-ink transition">
            change bank details →
          </button>
        </div>
      </section>

      {/* SPARKLINE FOOTER */}
      <section className="mt-10 paper border border-ink/40 p-5 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)]">
        <div className="flex items-baseline justify-between mb-1 flex-wrap gap-3">
          <div className="kicker text-oxblood">cumulative · last 30 days</div>
          <span className="font-mono text-sm text-ink/70">↗ growing steadily</span>
        </div>
        <Sparkline data={EARNINGS_30D.map((_, i) => EARNINGS_30D.slice(0, i + 1).reduce((s,n)=>s+n,0))} height={80} />
      </section>
    </DashShell>
  );
}

function Big({ label, value, delta, accent }: { label: string; value: string; delta: string; accent?: "ink" | "oxblood" }) {
  const cls = accent === "ink" ? "bg-ink text-parchment-100 border-ink" : accent === "oxblood" ? "bg-oxblood text-parchment-100 border-oxblood" : "border-ink/40";
  return (
    <div className={`paper border-2 p-4 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] ${cls}`}>
      <div className={`kicker ${accent ? "text-gilt-50" : "text-oxblood"}`}>{label}</div>
      <div className="font-display italic text-[2.2rem] leading-none mt-1">{value}</div>
      <div className={`kicker mt-2 ${accent ? "text-parchment-100/65" : "text-teal-forgotten"}`}>{delta}</div>
    </div>
  );
}
