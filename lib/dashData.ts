// ─── Mock data for dashboards ──────────────────────────────────

export const ME = {
  name: "Usman",
  handle: "@ucademy",
  email: "usman@ucademy.co.uk",
  plan: "The Atelier",
  city: "Karachi",
  joined: "April · MMXXVI",
  avatar: "U",
  runsThisMonth: 42,
  runsLimit: 100,
};

export const FOLIOS = [
  {
    id: "FO-00417",
    title: "Drop 02 · Jaun in Oxblood",
    vibe: "Jaun Elia Melancholy",
    serial: "VBE-001",
    proofs: 5,
    status: "ready-for-press",
    updated: "2 hours ago",
    cover: "#3F1010",
    glyph: "ﺁﮦ",
  },
  {
    id: "FO-00416",
    title: "Ghazal Mehfil · Edition I",
    vibe: "Urdu Ghazal Classical",
    serial: "VBE-002",
    proofs: 5,
    status: "drafting",
    updated: "yesterday",
    cover: "#5C1B1B",
    glyph: "ﻏﺰﻝ",
  },
  {
    id: "FO-00414",
    title: "Whirling, in white",
    vibe: "Minimalist Sufi",
    serial: "VBE-003",
    proofs: 4,
    status: "shipped",
    updated: "3 days ago",
    cover: "#3A5A56",
    glyph: "ﺻﻮ",
  },
  {
    id: "FO-00411",
    title: "Bazaar Cassette Side B",
    vibe: "90s Bazaar Retro",
    serial: "VBE-004",
    proofs: 5,
    status: "regenerating",
    updated: "last week",
    cover: "#7A2A2A",
    glyph: "ﺑﺎ",
  },
  {
    id: "FO-00408",
    title: "Monsoon, again.",
    vibe: "Monsoon Noir",
    serial: "VBE-006",
    proofs: 3,
    status: "archived",
    updated: "2 weeks ago",
    cover: "#1A1310",
    glyph: "ﺳﺎ",
  },
];

export const ORDERS = [
  { id: "PO-1042", folio: "FO-00417", garment: "Hoodie · Oxblood · M ×24", partner: "Korangi Press", status: "in-press", eta: "Fri 06 Jun" },
  { id: "PO-1041", folio: "FO-00416", garment: "Tee · Parchment · S/M/L ×60", partner: "Lyari DTF Co.", status: "queued", eta: "Mon 09 Jun" },
  { id: "PO-1038", folio: "FO-00414", garment: "Tee · Cream · ×40", partner: "Korangi Press", status: "shipped", eta: "delivered 28 May" },
  { id: "PO-1031", folio: "FO-00411", garment: "Sweat · Bazaar Red · ×12", partner: "Saddar Studio", status: "complete", eta: "delivered 21 May" },
];

export const USAGE_30D = [
  3, 4, 2, 6, 5, 8, 6, 10, 7, 9, 11, 14, 9, 12, 8, 7, 10, 13, 16, 12, 9, 11, 14, 17, 13, 10, 12, 15, 18, 14,
];

// ─── Admin mocks ──────────────────────────────────

export const PLATFORM = {
  subscribers: 287,
  subscribersDelta: "+38 this week",
  runs30d: 6_412,
  runsDelta: "+12.4% vs prev. month",
  mrr: "Rs. 9.84L",
  mrrDelta: "+Rs. 1.20L",
  pressVendors: 14,
  pressDelta: "2 new in Karachi",
};

export const USERS = [
  { id: "U-0287", name: "Maryam I.", handle: "@maryam.studio", city: "Karachi", plan: "Atelier", runs: 78, status: "active", joined: "12 May" },
  { id: "U-0286", name: "Hassan A.", handle: "@chand.print", city: "Lahore", plan: "Mehfil", runs: 192, status: "active", joined: "08 May" },
  { id: "U-0285", name: "Saba R.", handle: "@verse.tee", city: "Karachi", plan: "Apprentice", runs: 14, status: "trial", joined: "30 Apr" },
  { id: "U-0284", name: "Tariq M.", handle: "@truckart.co", city: "Rawalpindi", plan: "Atelier", runs: 56, status: "active", joined: "22 Apr" },
  { id: "U-0283", name: "Aiman B.", handle: "@monsoon.kch", city: "Karachi", plan: "Atelier", runs: 41, status: "active", joined: "19 Apr" },
  { id: "U-0282", name: "Faiz K.", handle: "@ghazal.fits", city: "Diaspora · London", plan: "Mehfil", runs: 110, status: "active", joined: "11 Apr" },
  { id: "U-0281", name: "Nida S.", handle: "@thread.club", city: "Islamabad", plan: "Apprentice", runs: 9, status: "paused", joined: "06 Apr" },
  { id: "U-0280", name: "Rehan J.", handle: "@dye.house", city: "Karachi", plan: "Atelier", runs: 64, status: "active", joined: "02 Apr" },
];

export const PRESET_USE = [
  { id: "VBE-001", name: "Jaun Elia Melancholy", runs: 1_840, share: 0.29 },
  { id: "VBE-002", name: "Urdu Ghazal Classical", runs: 1_412, share: 0.22 },
  { id: "VBE-006", name: "Monsoon Noir", runs: 1_098, share: 0.17 },
  { id: "VBE-004", name: "90s Bazaar Retro", runs: 884, share: 0.14 },
  { id: "VBE-003", name: "Minimalist Sufi", runs: 690, share: 0.11 },
  { id: "VBE-005", name: "Truck-Art Maximal", runs: 488, share: 0.07 },
];

export const PRINT_QUEUE = [
  { id: "PO-1042", maker: "@ucademy", partner: "Korangi Press", units: 24, garment: "Hoodie · Oxblood", status: "in-press" },
  { id: "PO-1043", maker: "@maryam.studio", partner: "Lyari DTF Co.", units: 80, garment: "Tee · Parchment", status: "queued" },
  { id: "PO-1044", maker: "@chand.print", partner: "Korangi Press", units: 36, garment: "Sweat · Bazaar Red", status: "queued" },
  { id: "PO-1045", maker: "@verse.tee", partner: "Saddar Studio", units: 18, garment: "Tee · Cream", status: "awaiting-art" },
];

export const REVENUE_12W = [
  41, 38, 44, 52, 49, 58, 63, 71, 68, 79, 84, 98,
];

export const SUBS_BREAKDOWN = [
  { name: "Apprentice", count: 96, color: "#534239" },
  { name: "Atelier", count: 153, color: "#5C1B1B" },
  { name: "Mehfil", count: 38, color: "#B8943A" },
];
