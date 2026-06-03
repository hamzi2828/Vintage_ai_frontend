"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ReactNode, useState } from "react";

export type NavItem = {
  href: string;
  label: string;
  numeral: string;
  badge?: string | number;
};

export function DashShell({
  variant,
  nav,
  who,
  whoSub,
  badge,
  children,
}: {
  variant: "maker" | "admin";
  nav: NavItem[];
  who: string;
  whoSub: string;
  badge?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isAdmin = variant === "admin";

  return (
    <div className="min-h-screen flex bg-parchment">
      {/* ─── SIDEBAR ─── */}
      <aside
        className={clsx(
          "fixed lg:static inset-y-0 left-0 z-50 w-[280px] flex-shrink-0 border-r-2 transition-transform",
          isAdmin
            ? "bg-ink text-parchment-100 border-oxblood"
            : "bg-parchment-100 text-ink border-ink",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className={clsx("p-5 border-b-2", isAdmin ? "border-parchment-100/15" : "border-ink/30")}>
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display italic text-2xl tracking-press">
              Vintage{" "}
              <span className={isAdmin ? "text-gilt-50" : "text-oxblood"}>AI</span>
              <span className={isAdmin ? "text-oxblood" : "text-gilt-100"}>.</span>
            </span>
            <span
              className={clsx(
                "kicker mt-2",
                isAdmin ? "text-gilt-50" : "text-oxblood"
              )}
            >
              {isAdmin ? "/ admin · the press" : "/ maker's desk"}
            </span>
          </Link>
        </div>

        <nav className="p-3 space-y-0.5">
          {nav.map((n) => {
            const active = pathname === n.href || (n.href !== "/dashboard" && n.href !== "/admin" && pathname.startsWith(n.href));
            return (
              <Link
                key={n.href}
                href={n.href}
                className={clsx(
                  "group flex items-center gap-3 px-3 py-2.5 border transition-all",
                  active
                    ? isAdmin
                      ? "bg-oxblood text-parchment-100 border-oxblood"
                      : "bg-ink text-parchment-100 border-ink"
                    : isAdmin
                    ? "border-transparent text-parchment-100/80 hover:border-parchment-100/30 hover:bg-parchment-100/5"
                    : "border-transparent text-ink/85 hover:border-ink/30 hover:bg-parchment-200/40"
                )}
              >
                <span
                  className={clsx(
                    "kicker text-[0.55rem] w-6",
                    active ? "opacity-90" : isAdmin ? "text-gilt-50" : "text-oxblood"
                  )}
                >
                  {n.numeral}
                </span>
                <span className="font-display italic text-[1.05rem] flex-1">
                  {n.label}
                </span>
                {n.badge && (
                  <span
                    className={clsx(
                      "kicker text-[0.55rem] px-1.5 py-0.5",
                      active
                        ? "bg-parchment-100 text-ink"
                        : isAdmin
                        ? "bg-gilt-50 text-ink"
                        : "bg-oxblood text-parchment-100"
                    )}
                  >
                    {n.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto p-4 border-t-2 border-current/15">
          <div className={clsx("flex items-center gap-3", isAdmin ? "" : "")}>
            <div
              className={clsx(
                "w-10 h-10 flex items-center justify-center font-display italic text-xl border-2",
                isAdmin
                  ? "bg-oxblood text-parchment-100 border-gilt-50"
                  : "bg-oxblood text-parchment-100 border-ink"
              )}
            >
              {who[0]}
            </div>
            <div className="leading-tight min-w-0">
              <div className="font-display italic text-base truncate">{who}</div>
              <div
                className={clsx(
                  "kicker text-[0.55rem] truncate",
                  isAdmin ? "text-parchment-100/55" : "text-ink/55"
                )}
              >
                {whoSub}
              </div>
            </div>
          </div>
          {badge && (
            <div
              className={clsx(
                "mt-3 kicker text-[0.55rem] text-center py-1.5 border",
                isAdmin
                  ? "border-gilt-50/50 text-gilt-50"
                  : "border-oxblood/60 text-oxblood"
              )}
            >
              {badge}
            </div>
          )}
        </div>
      </aside>

      {/* ─── MAIN ─── */}
      <div className="flex-1 min-w-0 lg:ml-0">
        {/* mobile bar */}
        <div
          className={clsx(
            "lg:hidden sticky top-0 z-40 border-b-2 px-4 py-3 flex items-center justify-between",
            isAdmin
              ? "bg-ink text-parchment-100 border-oxblood"
              : "bg-parchment-100 text-ink border-ink"
          )}
        >
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2"
            aria-label="toggle menu"
          >
            <span className="flex flex-col gap-1">
              <span className="block w-5 h-px bg-current" />
              <span className="block w-5 h-px bg-current" />
              <span className="block w-5 h-px bg-current" />
            </span>
            <span className="kicker">{isAdmin ? "the press" : "menu"}</span>
          </button>
          <Link href="/" className="font-display italic text-lg">
            Vintage{" "}
            <span className={isAdmin ? "text-gilt-50" : "text-oxblood"}>AI</span>
          </Link>
        </div>

        {open && (
          <div
            className="lg:hidden fixed inset-0 bg-ink/40 z-40"
            onClick={() => setOpen(false)}
          />
        )}

        <main className="p-5 sm:p-7 md:p-10 max-w-[1500px]">{children}</main>
      </div>
    </div>
  );
}
