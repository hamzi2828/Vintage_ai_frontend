import Link from "next/link";

export function MarginRail() {
  return (
    <div className="hidden md:block fixed left-0 top-0 h-screen w-10 z-40 pointer-events-none">
      <div className="absolute inset-y-0 left-5 w-px bg-ink/20" />
      <div
        className="absolute left-3 top-1/2 -translate-y-1/2 rotate-180 kicker text-ink/60 whitespace-nowrap pointer-events-auto"
        style={{ writingMode: "vertical-rl" }}
      >
        VOL. I · ISSUE 01 · KARACHI · MMXXVI
      </div>
    </div>
  );
}

export function TopBar() {
  return (
    <div className="border-b border-ink/30 bg-parchment-100">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 py-2 flex items-center justify-between text-[0.55rem] sm:text-[0.62rem] kicker text-ink/70 gap-2">
        <span className="truncate">EST. MMXXVI · KARACHI · LAHORE</span>
        <span className="hidden md:block">A QUARTERLY OF MAKERS · NO. 01</span>
        <span className="truncate text-right">72°F · MONSOON</span>
      </div>
    </div>
  );
}

export function Nav() {
  return (
    <header className="relative z-30 border-b border-ink/40">
      <nav className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 py-4 md:py-6 flex items-end justify-between gap-3">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-xl sm:text-2xl md:text-[1.7rem] tracking-press italic font-medium">
            Vintage <span className="text-oxblood">AI</span>
            <span className="text-gilt-100">.</span>
          </span>
          <span className="urdu text-sm sm:text-base text-ink/70 mt-1">ونٹیج اے آئی</span>
        </Link>

        <div className="hidden md:flex items-end gap-8 font-body text-[1.05rem] text-ink">
          <Link href="#aesthetic-engine" className="hover:text-oxblood transition-colors">
            <span className="font-display italic">The</span> Engine
            <span className="block kicker text-[0.55rem] text-ink/50 mt-0.5">i.</span>
          </Link>
          <Link href="#poets-pen" className="hover:text-oxblood transition-colors">
            <span className="font-display italic">Poet's</span> Pen
            <span className="block kicker text-[0.55rem] text-ink/50 mt-0.5">ii.</span>
          </Link>
          <Link href="#mockup" className="hover:text-oxblood transition-colors">
            <span className="font-display italic">The</span> Visualizer
            <span className="block kicker text-[0.55rem] text-ink/50 mt-0.5">iii.</span>
          </Link>
          <Link href="#roadmap" className="hover:text-oxblood transition-colors">
            <span className="font-display italic">The</span> Press Schedule
            <span className="block kicker text-[0.55rem] text-ink/50 mt-0.5">iv.</span>
          </Link>
          <Link href="#pricing" className="hover:text-oxblood transition-colors">
            <span className="font-display italic">Become a</span> Subscriber
            <span className="block kicker text-[0.55rem] text-ink/50 mt-0.5">v.</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/login" className="btn-ghost hidden sm:inline-flex">
            sign in
          </Link>
          <Link href="/studio" className="btn-ghost">
            enter studio
            <span aria-hidden>→</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
