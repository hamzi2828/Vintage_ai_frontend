// ─── Maker-side extras: earnings, inbox, archive ────────────────

export const EARNINGS_30D = [
  1200, 850, 1400, 2200, 1800, 2600, 3100, 2400, 2800, 3400, 4100, 3800,
  4400, 3900, 4800, 5200, 4700, 5800, 6100, 5400, 6800, 7200, 6500, 7900,
  8400, 7100, 8800, 9200, 8600, 9800,
];

export const PAYOUTS = [
  { id: "PAY-0042", date: "01 Jun · MMXXVI", amount: 84_200, method: "stripe → HBL", status: "paid" },
  { id: "PAY-0041", date: "01 May · MMXXVI", amount: 71_400, method: "stripe → HBL", status: "paid" },
  { id: "PAY-0040", date: "01 Apr · MMXXVI", amount: 62_800, method: "stripe → HBL", status: "paid" },
  { id: "PAY-0039", date: "01 Mar · MMXXVI", amount: 41_200, method: "stripe → HBL", status: "paid" },
];

export const SALES = [
  { id: "SO-1042", customer: "Hira S.", city: "Karachi", drop: "Drop 02 · Jaun in Oxblood", item: "Hoodie · M · oxblood", price: 6_500, date: "2 hours ago" },
  { id: "SO-1041", customer: "Adnan K.", city: "Lahore", drop: "Drop 02 · Jaun in Oxblood", item: "Hoodie · L · oxblood", price: 6_500, date: "4 hours ago" },
  { id: "SO-1040", customer: "Mariam N.", city: "London", drop: "Drop 01 · Whirling", item: "Tee · S · parchment", price: 3_800, date: "yesterday" },
  { id: "SO-1039", customer: "Fawad T.", city: "Karachi", drop: "Drop 02 · Jaun in Oxblood", item: "Hoodie · XL · oxblood", price: 6_500, date: "yesterday" },
  { id: "SO-1038", customer: "Saba R.", city: "Islamabad", drop: "Drop 02 · Jaun in Oxblood", item: "Hoodie · M · oxblood", price: 6_500, date: "2 days ago" },
  { id: "SO-1037", customer: "Ali Z.", city: "Karachi", drop: "Drop 01 · Whirling", item: "Tee · M · parchment", price: 3_800, date: "3 days ago" },
  { id: "SO-1036", customer: "Noor F.", city: "Toronto", drop: "Drop 01 · Whirling", item: "Tee · L · parchment", price: 4_400, date: "3 days ago" },
];

export const TOP_DROPS = [
  { name: "Drop 02 · Jaun in Oxblood", units: 24, revenue: 156_000 },
  { name: "Drop 01 · Whirling, in white", units: 18, revenue: 68_400 },
  { name: "Drop · Monsoon, again.", units: 12, revenue: 45_600 },
];

// ─── INBOX ──────────────────────────────

export type Msg = {
  id: string;
  from: "atelier" | "press" | "system" | "customer";
  fromName: string;
  subject: string;
  preview: string;
  body: string;
  when: string;
  unread?: boolean;
  starred?: boolean;
  attachment?: string;
};

export const INBOX: Msg[] = [
  {
    id: "MSG-042",
    from: "atelier",
    fromName: "The Atelier Desk",
    subject: "A new preset is in press — Monsoon Noir is live.",
    preview: "Karachi-in-July energy. Available immediately on your Atelier plan…",
    body: "Maker,\n\nAfter eight weeks in the field, Monsoon Noir is now in the catalogue. Rain-soaked black, signage greens, the city after a downpour. Slow, soaked, cinematic.\n\nIt's available immediately on your Atelier plan. Press a run when the mood strikes.\n\n— The Atelier",
    when: "12 minutes ago",
    unread: true,
  },
  {
    id: "MSG-041",
    from: "press",
    fromName: "Korangi Press · Aslam",
    subject: "Your hoodies are pulled. Shipping tomorrow.",
    preview: "Salaam, all 24 hoodies came off the press clean. The oxblood is exactly your spec…",
    body: "Salaam,\n\nAll 24 hoodies came off the press this morning. The oxblood is exactly your spec — the second dye round took beautifully. I've packed them with the bookmarks you sent. Courier collects in the morning.\n\nFiles attached.\n\n— Aslam, Korangi Press",
    when: "1 hour ago",
    unread: true,
    attachment: "drop-02-proofs.zip",
  },
  {
    id: "MSG-040",
    from: "system",
    fromName: "Vintage AI · the press",
    subject: "Folio FO-00417 is ready for press.",
    preview: "Five proofs approved. Click to send to your default printer (Korangi Press)…",
    body: "Your folio FO-00417 has been finalised. Five proofs approved at 300dpi.\n\nReady to hand off to your default press partner: Korangi Press.",
    when: "3 hours ago",
    unread: true,
  },
  {
    id: "MSG-039",
    from: "customer",
    fromName: "Hira S.",
    subject: "Re: Drop 02 sizing question",
    preview: "Hi Usman, I'm between sizes — would you say the hoodie runs true or oversized?",
    body: "Hi Usman,\n\nI'm between sizes — would you say the oxblood hoodie runs true or oversized? Wearing a M usually.\n\nThanks!\nHira",
    when: "yesterday",
    starred: true,
  },
  {
    id: "MSG-038",
    from: "atelier",
    fromName: "The Atelier Desk",
    subject: "Your monthly press digest — May, MMXXVI",
    preview: "42 runs, 5 folios shipped, Rs. 84,200 in your pocket. Here's how you stacked up…",
    body: "Maker,\n\nA short note on your May:\n\n· 42 runs pressed (up 18% on April)\n· 5 folios shipped\n· Rs. 84,200 in the till\n· Your top preset: Jaun Elia Melancholy (28 runs)\n\nMay you find more verse in June.\n\n— The Atelier",
    when: "2 days ago",
  },
  {
    id: "MSG-037",
    from: "press",
    fromName: "Lyari DTF Co. · Bibi",
    subject: "Quote for Drop 03 — Truck-Art tees",
    preview: "Hi! Got your enquiry for 60 tees. We can do garment-dye in saddle red…",
    body: "Hi Usman,\n\nGot your enquiry for 60 tees — Drop 03, Truck-Art. We can do the garment-dye in saddle red, two rounds. Bulk rate would be Rs. 1,420 per piece (240gsm). Lead time: 8 working days.\n\nLet me know if you want to go ahead.\n\n— Bibi, Lyari DTF Co.",
    when: "3 days ago",
  },
  {
    id: "MSG-036",
    from: "system",
    fromName: "Vintage AI · billing",
    subject: "Receipt for your June subscription",
    preview: "Rs. 3,990 charged to card ending 2VqK. Your Atelier plan renews 03 Jul.",
    body: "A receipt for your records.\n\nAmount: Rs. 3,990\nPlan: The Atelier (monthly)\nMethod: card · •••• 2VqK\nNext renewal: 03 Jul · MMXXVI",
    when: "4 days ago",
  },
];

// ─── ARCHIVE ──────────────────────────────

export type ArchiveItem = {
  id: string;
  title: string;
  kind: "scan" | "couplet" | "swatch" | "reference";
  tag: string;
  added: string;
  glyph?: string;
  color?: string;
  caption?: string;
  source?: string;
};

export const ARCHIVE: ArchiveItem[] = [
  {
    id: "AR-042",
    title: "Naani's chunri · oxblood + gilt",
    kind: "scan",
    tag: "embroidery",
    added: "2 hours ago",
    color: "#5C1B1B",
    glyph: "ﭼ",
    source: "scanned · home",
  },
  {
    id: "AR-041",
    title: "Jaun · Yāni from Lekin",
    kind: "couplet",
    tag: "jaun-elia",
    added: "yesterday",
    caption: "yāni kabhī kabhī kahīṅ paṛhā / ki maiṅ to bas khayāl hūṅ",
    color: "#3F1010",
  },
  {
    id: "AR-040",
    title: "1986 cassette · Nazia",
    kind: "reference",
    tag: "90s-retro",
    added: "yesterday",
    color: "#B8943A",
    glyph: "▶",
    source: "discogs",
  },
  {
    id: "AR-039",
    title: "Khairpur · monsoon palette",
    kind: "swatch",
    tag: "monsoon",
    added: "3 days ago",
    color: "#3A5A56",
  },
  {
    id: "AR-038",
    title: "Iqbal · Sare jahaan se acha",
    kind: "couplet",
    tag: "classical",
    added: "5 days ago",
    caption: "sāre jahāṅ se achhā, hindostāṅ hamārā",
    color: "#5C1B1B",
  },
  {
    id: "AR-037",
    title: "Lyari truck · Bedford grille",
    kind: "scan",
    tag: "truck-art",
    added: "1 week ago",
    color: "#B8943A",
    glyph: "✦",
    source: "field photo",
  },
  {
    id: "AR-036",
    title: "1970s mehfil program",
    kind: "scan",
    tag: "ghazal",
    added: "1 week ago",
    color: "#2C211B",
    glyph: "ﻏ",
    source: "uncle's drawer",
  },
  {
    id: "AR-035",
    title: "Ghalib · ye na thī hamārī qismat",
    kind: "couplet",
    tag: "classical",
    added: "2 weeks ago",
    caption: "ye na thī hamārī qismat ki visāl-e-yār hotā",
    color: "#5C1B1B",
  },
  {
    id: "AR-034",
    title: "Cigarette ash · close study",
    kind: "swatch",
    tag: "jaun-elia",
    added: "2 weeks ago",
    color: "#534239",
  },
];

export const COLLECTIONS = [
  { id: "COL-01", name: "For the Jaun preset", count: 14, primary: "#5C1B1B" },
  { id: "COL-02", name: "Naani's archive", count: 8, primary: "#B8943A" },
  { id: "COL-03", name: "Monsoon studies", count: 6, primary: "#3A5A56" },
  { id: "COL-04", name: "Cassette covers · 1980-1995", count: 11, primary: "#2C211B" },
];
