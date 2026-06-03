export function Footer() {
  return (
    <footer className="mt-32 relative border-t border-ink/40 bg-ink text-parchment-100">
      <div className="absolute top-0 left-0 right-0 h-2 bg-oxblood" />
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 py-12 md:py-16 grid md:grid-cols-12 gap-8 md:gap-10">
        <div className="md:col-span-5">
          <div className="font-display italic text-4xl sm:text-5xl tracking-press">
            Vintage <span className="text-gilt-50">AI</span>
            <span className="text-oxblood">.</span>
          </div>
          <div className="urdu text-xl sm:text-2xl text-parchment-100/70 mt-2">ونٹیج اے آئی</div>
          <p className="font-body italic text-parchment-100/75 mt-5 md:mt-6 max-w-md text-base md:text-lg leading-snug">
            An atelier for the poet-maker. We bind cultural soul to ready-to-print apparel —
            in the same room where the ghazal is sung.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="kicker border border-parchment-100/40 px-3 py-2 hover:bg-parchment-100 hover:text-ink transition">
              instagram → @vintage.ai
            </a>
            <a href="#" className="kicker border border-parchment-100/40 px-3 py-2 hover:bg-parchment-100 hover:text-ink transition">
              email → atelier@vintage.ai
            </a>
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 font-body text-parchment-100/85">
          <div>
            <div className="kicker text-gilt-50 mb-3">i. atelier</div>
            <ul className="space-y-2 text-[1rem]">
              <li><a href="#aesthetic-engine" className="hover:text-gilt-50">The Aesthetic Engine</a></li>
              <li><a href="#poets-pen" className="hover:text-gilt-50">Poet's Pen</a></li>
              <li><a href="#mockup" className="hover:text-gilt-50">Mockup Visualizer</a></li>
              <li><a href="/studio" className="hover:text-gilt-50">Enter the Studio</a></li>
            </ul>
          </div>
          <div>
            <div className="kicker text-gilt-50 mb-3">ii. presets</div>
            <ul className="space-y-2 text-[1rem]">
              <li>Jaun Elia Melancholy</li>
              <li>Urdu Ghazal Classical</li>
              <li>Minimalist Sufi</li>
              <li>90s Bazaar Retro</li>
              <li>Truck-Art Maximal</li>
              <li>Monsoon Noir</li>
            </ul>
          </div>
          <div>
            <div className="kicker text-gilt-50 mb-3">iii. the press</div>
            <ul className="space-y-2 text-[1rem]">
              <li><a href="#roadmap" className="hover:text-gilt-50">Roadmap</a></li>
              <li><a href="#pricing" className="hover:text-gilt-50">Subscriptions</a></li>
              <li><a href="#" className="hover:text-gilt-50">For studios</a></li>
              <li><a href="#" className="hover:text-gilt-50">Print partners</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-parchment-100/15">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 py-4 md:py-5 flex flex-col md:flex-row gap-3 justify-between items-center text-center kicker text-parchment-100/55 text-[0.55rem] sm:text-[0.62rem]">
          <span>© MMXXVI · VINTAGE-AI · ALL RIGHTS RESERVED</span>
          <span className="font-display italic text-parchment-100/80 text-base normal-case tracking-normal">
            "the press is open, friend — pull up a chair."
          </span>
          <span>SET IN FRAUNCES · EB GARAMOND · NOTO NASTALIQ</span>
        </div>
      </div>
    </footer>
  );
}
