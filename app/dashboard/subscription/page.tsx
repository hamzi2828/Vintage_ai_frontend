import Link from "next/link";
import { DashShell } from "@/components/DashShell";
import { Stamp } from "@/components/Stamp";
import { MAKER_NAV } from "@/lib/nav";
import { ME } from "@/lib/dashData";
import { PRICING } from "@/lib/data";

const INVOICES = [
  { id: "INV-1042", date: "01 Jun · MMXXVI", amount: "Rs. 3,990", status: "paid", method: "card · stripe" },
  { id: "INV-1018", date: "01 May · MMXXVI", amount: "Rs. 3,990", status: "paid", method: "card · stripe" },
  { id: "INV-0987", date: "01 Apr · MMXXVI", amount: "Rs. 3,990", status: "paid", method: "card · stripe" },
];

export default function MakerSubscriptionPage() {
  const current = PRICING.find((p) => p.name === ME.plan)!;

  return (
    <DashShell variant="maker" nav={MAKER_NAV} who={ME.name} whoSub={ME.handle} badge={`PLAN · ${ME.plan.toUpperCase()}`}>
      <header className="border-b-2 border-ink pb-6 mb-8">
        <div className="kicker text-oxblood mb-2">v. — your seat in the room</div>
        <h1 className="font-display italic text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] leading-[0.95] tracking-press text-ink">
          Subscription.
        </h1>
      </header>

      {/* CURRENT PLAN TICKET */}
      <section className="paper border-2 border-oxblood bg-oxblood text-parchment-100 p-7 shadow-[6px_8px_0_0_rgba(26,19,16,0.18)] mb-10 relative">
        <div className="absolute top-4 right-4">
          <Stamp label="EARLY BIRD" sub="locked in" color="gilt" rotate={5} />
        </div>
        <div className="grid lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <div className="kicker text-gilt-50">your subscription · since {ME.joined}</div>
            <h2 className="font-display italic text-4xl sm:text-5xl mt-1 leading-none">{ME.plan}</h2>
            <div className="font-body italic text-parchment-100/80 mt-2">{current.tag}</div>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-4 gap-y-1.5 font-body text-parchment-100/90">
              {current.feats.map((f) => (
                <li key={f} className="flex gap-2"><span className="text-gilt-50">·</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-parchment-100/40 p-5">
              <div className="kicker text-gilt-50">renews</div>
              <div className="font-display italic text-2xl mt-1">03 Jul · MMXXVI</div>
              <div className="font-mono text-sm text-parchment-100/75 mt-1">card · •••• 2VqK</div>
              <div className="dotted-rule my-4 opacity-40" />
              <div className="flex items-baseline justify-between">
                <span className="kicker text-gilt-50">next charge</span>
                <span className="font-display italic text-2xl">{current.price}</span>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 font-display italic py-2 border border-parchment-100 hover:bg-parchment-100 hover:text-oxblood transition">
                  manage card
                </button>
                <button className="flex-1 font-display italic py-2 border border-parchment-100 hover:bg-parchment-100 hover:text-oxblood transition">
                  pause
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USAGE THIS CYCLE */}
      <section className="grid lg:grid-cols-3 gap-5 mb-10">
        <UsageCard label="runs · this cycle" value={`${ME.runsThisMonth} / ${ME.runsLimit}`} pct={ME.runsThisMonth / ME.runsLimit * 100} />
        <UsageCard label="folios saved" value="14 / unlimited" pct={42} />
        <UsageCard label="dtf exports" value="92 / unlimited" pct={66} />
      </section>

      {/* OTHER PLANS */}
      <section className="mb-10">
        <div className="kicker text-oxblood mb-3">change your seat</div>
        <h2 className="font-display italic text-2xl sm:text-3xl text-ink leading-none mb-5">Other plans</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {PRICING.map((p) => {
            const isCurrent = p.name === ME.plan;
            return (
              <div
                key={p.name}
                className={`paper border-2 p-5 shadow-[5px_7px_0_0_rgba(26,19,16,0.14)] flex flex-col ${
                  isCurrent ? "border-oxblood bg-parchment-100" : "border-ink/40"
                }`}
              >
                <div className="kicker text-oxblood">{p.tag}</div>
                <div className="font-display italic text-2xl text-ink mt-1">{p.name}</div>
                <div className="font-display italic text-3xl text-ink mt-3">{p.price}<span className="text-base text-ink/55"> {p.cadence}</span></div>
                <ul className="mt-4 space-y-1.5 flex-1 font-body text-ink/85 text-sm">
                  {p.feats.slice(0, 4).map((f) => (
                    <li key={f} className="flex gap-2"><span className="text-oxblood">·</span>{f}</li>
                  ))}
                </ul>
                {isCurrent ? (
                  <div className="mt-5 text-center kicker text-oxblood border border-oxblood py-2.5">your current seat</div>
                ) : p.name === "Mehfil" ? (
                  <button className="mt-5 font-display italic text-center py-2.5 bg-ink text-parchment-100 hover:bg-oxblood transition">upgrade →</button>
                ) : (
                  <button className="mt-5 font-display italic text-center py-2.5 border border-ink hover:bg-ink hover:text-parchment-100 transition">downgrade →</button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* INVOICES */}
      <section>
        <div className="flex items-end justify-between mb-3 flex-wrap gap-2">
          <div>
            <div className="kicker text-oxblood">your ledger</div>
            <h2 className="font-display italic text-2xl text-ink leading-none mt-1">Invoices</h2>
          </div>
          <button className="kicker border border-ink/40 px-3 py-2">↓ download all</button>
        </div>
        <div className="border-2 border-ink overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1.5fr_2fr_1fr_1.5fr_1fr] gap-4 px-5 py-3 border-b-2 border-ink bg-parchment-100 kicker text-ink/60">
              <div>invoice</div>
              <div>date</div>
              <div>amount</div>
              <div>method</div>
              <div className="text-right">status</div>
            </div>
            {INVOICES.map((i) => (
              <div key={i.id} className="grid grid-cols-[1.5fr_2fr_1fr_1.5fr_1fr] gap-4 px-5 py-3.5 border-b border-ink/25 items-center">
                <div className="kicker text-ink/65">{i.id}</div>
                <div className="font-display italic text-ink">{i.date}</div>
                <div className="font-mono text-ink">{i.amount}</div>
                <div className="font-body italic text-ink/75 text-sm">{i.method}</div>
                <div className="text-right"><span className="kicker bg-teal-forgotten text-parchment-100 px-2 py-1">{i.status}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-12 text-center">
        <Link href="#" className="kicker text-ink/60 hover:text-oxblood">cancel subscription · the door is always open →</Link>
      </div>
    </DashShell>
  );
}

function UsageCard({ label, value, pct }: { label: string; value: string; pct: number }) {
  return (
    <div className="paper border border-ink/40 p-4 shadow-[4px_6px_0_0_rgba(26,19,16,0.12)]">
      <div className="kicker text-oxblood">{label}</div>
      <div className="font-display italic text-2xl text-ink mt-1 leading-none">{value}</div>
      <div className="mt-3 h-1.5 bg-parchment-300">
        <div className="h-full bg-oxblood" style={{ width: `${Math.min(100, pct)}%` }} />
      </div>
      <div className="kicker text-ink/55 mt-1">{Math.round(pct)}% used</div>
    </div>
  );
}
