import { DashShell } from "@/components/DashShell";
import { Bars, DonutSplit } from "@/components/Charts";
import { Stamp } from "@/components/Stamp";
import { ADMIN_NAV } from "@/lib/nav";
import { REVENUE_12W, PLATFORM } from "@/lib/dashData";
import { REVENUE_BY_PLAN, COHORT_RETENTION, TRANSACTIONS, FAILED_PAYMENTS, TOP_MAKERS } from "@/lib/moreData";

const fmt = (n: number) =>
  n >= 1_00_000 ? `Rs. ${(n / 1_00_000).toFixed(2)}L` : `Rs. ${n.toLocaleString()}`;

export default function AdminRevenuePage() {
  const totalMrr = REVENUE_BY_PLAN.reduce((s, p) => s + p.mrr, 0);
  const arr = totalMrr * 12;

  return (
    <DashShell variant="admin" nav={ADMIN_NAV} who="Atelier Desk" whoSub="admin · house" badge="ADMINISTRATOR">
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">vi. — the ledger</div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
            Revenue, <span className="text-oxblood">by the page.</span>
          </h1>
          <div className="flex gap-2">
            <button className="kicker border border-ink/40 px-3 py-2">↓ stripe csv</button>
            <button className="kicker bg-ink text-parchment-100 border border-ink px-3 py-2">↓ pdf report</button>
          </div>
        </div>
        <p className="font-body italic text-ink/70 mt-2 max-w-2xl">
          The house is paying for itself, plus a little. {PLATFORM.subscribers} folios at {fmt(totalMrr)} a month.
        </p>
      </header>

      {/* TOP TICKETS */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Big label="mrr · this month" value={fmt(totalMrr)} delta="+ Rs. 1.20L vs last" accent="oxblood" />
        <Big label="arr · annualised" value={fmt(arr)} delta="projected, not promised" />
        <Big label="arpu · per maker" value={fmt(Math.round(totalMrr / PLATFORM.subscribers))} delta="+ 8%" />
        <Big label="ltv · estimated" value={fmt(Math.round(totalMrr / PLATFORM.subscribers * 14))} delta="14 mo. avg. tenure" accent="ink" />
      </section>

      {/* REVENUE CHART + BY PLAN */}
      <section className="grid lg:grid-cols-12 gap-5 mb-8">
        <div className="lg:col-span-8 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5">
          <div className="flex items-end justify-between mb-3 flex-wrap gap-2">
            <div>
              <div className="kicker text-oxblood">house revenue · 12 weeks</div>
              <h2 className="font-display italic text-2xl text-ink leading-none mt-1">The ledger</h2>
            </div>
            <div className="font-mono text-sm text-ink/70 space-y-0.5 text-right">
              <div><span className="text-ink/45">PEAK · </span>Rs. 98K · wk 12</div>
              <div><span className="text-ink/45">AVG · </span>Rs. 63K / wk</div>
            </div>
          </div>
          <Bars data={REVENUE_12W} height={180} color="#5C1B1B" />
          <div className="mt-2 grid grid-cols-12 gap-1 font-mono text-[0.62rem] text-ink/55">
            {REVENUE_12W.map((_, i) => (
              <span key={i} className="text-center">w{i + 1}</span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5">
          <div className="kicker text-oxblood">mrr · by plan</div>
          <h2 className="font-display italic text-2xl text-ink leading-none mt-1">By the room</h2>
          <div className="mt-4 flex items-center justify-center">
            <DonutSplit
              segments={REVENUE_BY_PLAN.map(p => ({ name: p.plan, count: Math.round(p.mrr / 1000), color: p.color }))}
              size={160}
            />
          </div>
          <ul className="mt-4 space-y-3">
            {REVENUE_BY_PLAN.map((p) => (
              <li key={p.plan} className="flex items-center gap-3 pb-2 border-b border-dashed border-ink/25 last:border-b-0">
                <span className="w-3 h-3 block flex-shrink-0" style={{ background: p.color }} />
                <div className="flex-1 min-w-0">
                  <div className="font-display italic text-ink leading-none">{p.plan}</div>
                  <div className="kicker text-ink/55 mt-0.5">{p.count} makers</div>
                </div>
                <div className="font-mono text-ink text-sm">{fmt(p.mrr)}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* COHORT RETENTION */}
      <section className="mb-8 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5">
        <div className="flex items-end justify-between flex-wrap gap-2 mb-4">
          <div>
            <div className="kicker text-oxblood">cohort retention · who stays</div>
            <h2 className="font-display italic text-2xl text-ink leading-none mt-1">The room, month after month.</h2>
          </div>
          <span className="kicker text-ink/55">% still at their desk</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-2 border-ink">
            <thead>
              <tr className="bg-parchment-100 border-b-2 border-ink">
                <th className="text-left p-3 kicker text-ink/60">cohort</th>
                {["M0", "M1", "M2", "M3", "M4", "M5"].map((m) => (
                  <th key={m} className="p-3 kicker text-ink/60 text-center">{m}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COHORT_RETENTION.map((c) => (
                <tr key={c.cohort} className="border-b border-ink/20 last:border-b-0">
                  <td className="p-3 font-display italic text-ink">{c.cohort}</td>
                  {[c.m0, c.m1, c.m2, c.m3, c.m4, c.m5].map((v, i) => (
                    <td key={i} className="p-2 text-center">
                      {v !== null ? (
                        <div
                          className="font-mono text-sm py-2"
                          style={{
                            background: `rgba(92,27,27,${v / 120})`,
                            color: v > 70 ? "#EDE0CC" : "#1A1310",
                          }}
                        >
                          {v}%
                        </div>
                      ) : (
                        <div className="font-mono text-sm text-ink/30 py-2">—</div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-body italic text-ink/65 text-sm">
          The April cohort still has 85% at their desks in month two. The room is sticky.
        </p>
      </section>

      {/* TRANSACTIONS + FAILED + TOP */}
      <section className="grid lg:grid-cols-12 gap-5">
        {/* Recent transactions */}
        <div className="lg:col-span-7 paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)]">
          <div className="p-5 border-b border-ink/30 flex items-end justify-between flex-wrap gap-2">
            <div>
              <div className="kicker text-oxblood">recent · transactions</div>
              <h2 className="font-display italic text-2xl text-ink leading-none mt-1">Coins in the box</h2>
            </div>
            <button className="kicker border border-ink/40 px-2 py-1.5">stripe ↗</button>
          </div>
          <div>
            {TRANSACTIONS.map((t) => (
              <div key={t.id} className="grid grid-cols-12 gap-3 items-center px-5 py-3 border-b border-dashed border-ink/25 last:border-b-0">
                <div className="col-span-2 kicker text-ink/55">{t.id}</div>
                <div className="col-span-3 font-mono text-sm text-ink truncate">{t.maker}</div>
                <div className="col-span-2 font-body text-ink">{t.plan}</div>
                <div className="col-span-2 font-body italic text-ink/65 text-sm">{t.method}</div>
                <div className="col-span-2 kicker text-ink/55 text-right">{t.date}</div>
                <div className="col-span-1 font-mono text-ink text-right">Rs. {t.amount.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Failed payments + Top makers */}
        <div className="lg:col-span-5 space-y-5">
          <div className="paper border border-ink/40 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] p-5 relative">
            <Stamp label="REVIEW" rotate={4} className="absolute top-3 right-3" />
            <div className="kicker text-oxblood">failed payments · {FAILED_PAYMENTS.length}</div>
            <h2 className="font-display italic text-xl text-ink leading-none mt-1">A note from the desk</h2>
            <ul className="mt-4 space-y-3">
              {FAILED_PAYMENTS.map((f) => (
                <li key={f.id} className="border-b border-dashed border-ink/25 pb-2 last:border-b-0">
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-ink text-sm">{f.maker}</span>
                    <span className="font-mono text-ink text-sm">Rs. {f.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="kicker text-ink/65">{f.reason}</span>
                    <span className="kicker text-ink/45">{f.attempted}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="paper border-2 border-ink bg-ink text-parchment-100 shadow-[6px_8px_0_0_rgba(26,19,16,0.18)] p-5">
            <div className="kicker text-gilt-50">top makers · lifetime</div>
            <h2 className="font-display italic text-xl leading-none mt-1">The faithful</h2>
            <ol className="mt-4 space-y-3">
              {TOP_MAKERS.map((m, i) => (
                <li key={m.handle} className="flex items-center gap-3 pb-2 border-b border-dashed border-parchment-100/15 last:border-b-0">
                  <span className="font-display italic text-gilt-50 text-2xl leading-none w-6">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-sm truncate">{m.handle}</div>
                    <div className="kicker text-parchment-100/60">{m.city} · {m.plan}</div>
                  </div>
                  <div className="font-mono text-sm">Rs. {m.lifetime.toLocaleString()}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </DashShell>
  );
}

function Big({ label, value, delta, accent }: { label: string; value: string; delta: string; accent?: "ink" | "oxblood" }) {
  const cls = accent === "ink"
    ? "bg-ink text-parchment-100 border-ink"
    : accent === "oxblood"
    ? "bg-oxblood text-parchment-100 border-oxblood"
    : "border-ink/40";
  return (
    <div className={`paper border-2 p-4 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)] ${cls}`}>
      <div className={`kicker ${accent ? "text-gilt-50" : "text-oxblood"}`}>{label}</div>
      <div className="font-display italic text-[2.4rem] leading-none mt-1">{value}</div>
      <div className={`kicker mt-2 ${accent ? "text-parchment-100/65" : "text-teal-forgotten"}`}>{delta}</div>
    </div>
  );
}
