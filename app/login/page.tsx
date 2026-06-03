"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrainOverlay, Vignette } from "@/components/GrainOverlay";
import { Stamp, CircleStamp } from "@/components/Stamp";

type Mode = "signin" | "signup";

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("hamza@gmail.com");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      router.push(email.includes("admin") ? "/admin" : "/dashboard");
    }, 900);
  };

  return (
    <main className="relative min-h-screen paper grid lg:grid-cols-2 overflow-hidden">
      <GrainOverlay opacity={0.28} />
      <Vignette />

      {/* ─── LEFT — Vintage Plate ─── */}
      <section className="relative hidden lg:flex flex-col justify-between bg-oxblood text-parchment-100 p-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent 0 22px, rgba(184,148,58,0.18) 22px 23px)",
          }}
        />
        <div className="absolute inset-6 border border-gilt-50/40 pointer-events-none" />
        <div className="absolute inset-9 border border-gilt-50/20 pointer-events-none" />

        <header className="relative z-10 flex items-center justify-between">
          <Link href="/" className="font-display italic text-2xl">
            Vintage <span className="text-gilt-50">AI</span>
            <span className="text-parchment-100">.</span>
          </Link>
          <span className="kicker text-gilt-50">FOLIO · 01 · MMXXVI</span>
        </header>

        <div className="relative z-10 max-w-xl">
          <div className="kicker text-gilt-50 mb-4">a private edition</div>
          <h1 className="font-display italic text-[3.4rem] xl:text-[4.4rem] leading-[0.95] tracking-press">
            The atelier
            <br />
            unbolts the door
            <br />
            <span className="text-gilt-50">for the maker.</span>
          </h1>
          <p className="urdu text-3xl xl:text-4xl text-parchment-100/85 mt-8 leading-loose">
            شاعرِ ساز کے لیے ایک کارگاہ
          </p>
          <p className="font-body italic text-[1.15rem] text-parchment-100/80 mt-8 max-w-md leading-snug">
            Pull up a chair, friend. The press is warm. The ink is mixed. There is a verse waiting
            with your name on it.
          </p>
        </div>

        <footer className="relative z-10 flex items-end justify-between">
          <div className="kicker text-parchment-100/60 leading-relaxed">
            EST. MMXXVI
            <br />
            KARACHI · LAHORE · DIASPORA
          </div>
          <CircleStamp text="HAND PRESSED · EDITION" inner="✦" size={120} color="gilt" />
        </footer>

        {/* corner ornaments */}
        <svg className="absolute top-4 left-4 w-10 h-10 text-gilt-50" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M2 2 L20 2 M2 2 L2 20" />
          <circle cx="2" cy="2" r="3" />
        </svg>
        <svg className="absolute bottom-4 right-4 w-10 h-10 text-gilt-50" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M38 38 L20 38 M38 38 L38 20" />
          <circle cx="38" cy="38" r="3" />
        </svg>
      </section>

      {/* ─── RIGHT — Form ─── */}
      <section className="relative flex flex-col p-6 sm:p-10 lg:p-12 z-10">
        <header className="flex items-center justify-between mb-10">
          <Link href="/" className="lg:hidden font-display italic text-2xl text-ink">
            Vintage <span className="text-oxblood">AI</span>
            <span className="text-gilt-100">.</span>
          </Link>
          <div className="lg:hidden kicker text-ink/60">FOLIO 01</div>
          <Link href="/" className="hidden lg:inline-flex btn-ghost ml-auto">
            ← back to the front page
          </Link>
        </header>

        <div className="max-w-md w-full mx-auto flex-1 flex flex-col justify-center">
          <div className="kicker text-oxblood mb-3">
            {mode === "signin" ? "a returning maker" : "a new admittance"}
          </div>
          <h2 className="font-display italic text-[2.4rem] sm:text-[3rem] leading-[0.95] tracking-press text-ink">
            {mode === "signin" ? "Sign back in." : "Open a folio."}
          </h2>
          <p className="font-body italic text-ink/70 mt-3">
            {mode === "signin"
              ? "Two fields, one press, and you are back at your desk."
              : "Pick a name for your folio. The atelier will set a chair."}
          </p>

          {/* tab toggle */}
          <div className="mt-8 grid grid-cols-2 border border-ink/40">
            {(["signin", "signup"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`kicker py-3 transition ${
                  mode === m
                    ? "bg-ink text-parchment-100"
                    : "text-ink/70 hover:bg-parchment-50"
                }`}
              >
                {m === "signin" ? "i. sign in" : "ii. open a folio"}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="mt-6 space-y-5">
            <AnimatePresence mode="wait">
              {mode === "signup" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <label className="kicker text-ink/65 block mb-1.5">a. your maker name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maryam I."
                    required={mode === "signup"}
                    className="w-full bg-parchment-50 border border-ink/40 px-4 py-3 font-display italic text-ink text-[1.1rem] focus:outline-none focus:border-oxblood transition-colors"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="kicker text-ink/65 block mb-1.5">
                {mode === "signin" ? "a. email" : "b. email"}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@studio.co"
                required
                className="w-full bg-parchment-50 border border-ink/40 px-4 py-3 font-display italic text-ink text-[1.1rem] focus:outline-none focus:border-oxblood transition-colors"
              />
              <p className="kicker text-ink/45 mt-1">
                tip — try <span className="text-oxblood">admin@</span> to peek at the press desk
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="kicker text-ink/65">
                  {mode === "signin" ? "b. password" : "c. password"}
                </label>
                {mode === "signin" && (
                  <button type="button" className="kicker text-oxblood hover:underline">
                    forgotten?
                  </button>
                )}
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="• • • • • • • •"
                required
                className="w-full bg-parchment-50 border border-ink/40 px-4 py-3 font-display italic text-ink text-[1.1rem] focus:outline-none focus:border-oxblood transition-colors"
              />
            </div>

            {mode === "signin" && (
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <span className="relative w-4 h-4 border border-ink/50 inline-block">
                  <input type="checkbox" defaultChecked className="peer absolute inset-0 opacity-0" />
                  <span className="absolute inset-0.5 bg-oxblood opacity-0 peer-checked:opacity-100 transition-opacity" />
                </span>
                <span className="font-body italic text-ink/75 text-sm">
                  keep me at this desk for thirty days
                </span>
              </label>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="btn-press w-full justify-center"
            >
              {submitting
                ? "pressing the door open…"
                : mode === "signin"
                ? "sign in →"
                : "open the folio →"}
            </button>
          </form>

          <div className="my-7 flex items-center gap-3 kicker text-ink/45">
            <span className="dotted-rule flex-1" />
            or, by hand
            <span className="dotted-rule flex-1" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="btn-ghost justify-center !py-3">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>google</span>
            </button>
            <button className="btn-ghost justify-center !py-3">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 12.04c-.03-2.93 2.39-4.34 2.5-4.41-1.36-1.99-3.48-2.27-4.24-2.3-1.81-.18-3.53 1.07-4.45 1.07-.92 0-2.34-1.04-3.85-1.01-1.98.03-3.81 1.15-4.83 2.93-2.07 3.59-.53 8.89 1.49 11.81.99 1.43 2.16 3.03 3.7 2.97 1.49-.06 2.05-.96 3.85-.96 1.8 0 2.31.96 3.88.93 1.6-.03 2.62-1.45 3.6-2.89 1.13-1.66 1.6-3.27 1.62-3.36-.04-.02-3.11-1.19-3.14-4.78zM14.13 3.79c.82-.99 1.36-2.36 1.21-3.73-1.17.05-2.59.78-3.43 1.76-.76.87-1.42 2.27-1.24 3.6 1.3.1 2.64-.66 3.46-1.63z" />
              </svg>
              <span>apple</span>
            </button>
          </div>

          <p className="mt-10 font-body italic text-ink/55 text-sm text-center">
            by entering, you agree to the atelier's{" "}
            <a className="text-oxblood hover:underline" href="#">house rules</a> and{" "}
            <a className="text-oxblood hover:underline" href="#">private edition policy</a>.
          </p>
        </div>

        {/* footer */}
        <footer className="mt-10 flex items-center justify-between">
          <div className="kicker text-ink/50">EARLY-BIRD · WEEK 08 LAUNCH</div>
          <Stamp label={mode === "signin" ? "DESK OPEN" : "ACCEPTING"} rotate={-4} />
        </footer>
      </section>
    </main>
  );
}
