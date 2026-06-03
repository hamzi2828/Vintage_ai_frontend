import type { NavItem } from "@/components/DashShell";
import { PLATFORM, PRINT_QUEUE } from "@/lib/dashData";

export const ADMIN_NAV: NavItem[] = [
  { href: "/admin", label: "The Overview", numeral: "i." },
  { href: "/admin/users", label: "Subscribers", numeral: "ii.", badge: PLATFORM.subscribers },
  { href: "/admin/presets", label: "Presets", numeral: "iii." },
  { href: "/admin/orders", label: "Print Queue", numeral: "iv.", badge: PRINT_QUEUE.length },
  { href: "/admin/partners", label: "Press Partners", numeral: "v." },
  { href: "/admin/revenue", label: "Revenue", numeral: "vi." },
  { href: "/admin/settings", label: "House Rules", numeral: "vii." },
  { href: "/dashboard", label: "↦ Maker View", numeral: "→" },
];

import { FOLIOS, ORDERS } from "@/lib/dashData";

export const MAKER_NAV: NavItem[] = [
  { href: "/dashboard", label: "The Desk", numeral: "i." },
  { href: "/dashboard/folios", label: "Folios", numeral: "ii.", badge: FOLIOS.length },
  { href: "/dashboard/presets", label: "Presets", numeral: "iii." },
  { href: "/dashboard/orders", label: "Print Orders", numeral: "iv.", badge: ORDERS.filter(o => o.status !== 'complete' && o.status !== 'shipped').length },
  { href: "/dashboard/earnings", label: "Earnings", numeral: "v." },
  { href: "/dashboard/inbox", label: "Inbox", numeral: "vi.", badge: 3 },
  { href: "/dashboard/archive", label: "Archive", numeral: "vii." },
  { href: "/dashboard/subscription", label: "Subscription", numeral: "viii." },
  { href: "/dashboard/settings", label: "Settings", numeral: "ix." },
  { href: "/studio", label: "→ Enter Studio", numeral: "↦" },
];

export const STATUS_TONE: Record<string, string> = {
  "ready-for-press": "bg-oxblood text-parchment-100",
  "drafting": "bg-gilt-100 text-ink",
  "shipped": "bg-teal-forgotten text-parchment-100",
  "regenerating": "bg-ink text-parchment-100",
  "archived": "bg-parchment-300 text-ink/60",
  "in-press": "bg-oxblood text-parchment-100",
  "queued": "bg-ink text-parchment-100",
  "complete": "bg-teal-forgotten text-parchment-100",
  "awaiting-art": "bg-gilt-100 text-ink",
  active: "bg-teal-forgotten text-parchment-100",
  trial: "bg-gilt-100 text-ink",
  paused: "bg-parchment-300 text-ink/65",
};
