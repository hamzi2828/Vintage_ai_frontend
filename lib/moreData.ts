// ─── Extra mocks for sub-pages ──────────────────────────────────

export const PARTNERS = [
  {
    id: "PRT-001",
    name: "Korangi Press",
    city: "Karachi · Korangi",
    contact: "Aslam · +92 300 1234567",
    verified: true,
    capacity: 320,
    currentLoad: 248,
    completed: 1_842,
    rating: 4.8,
    onTime: 96,
    speciality: "DTF · heavyweight",
    joined: "MMXXV",
  },
  {
    id: "PRT-002",
    name: "Lyari DTF Co.",
    city: "Karachi · Lyari",
    contact: "Bibi · +92 311 2345678",
    verified: true,
    capacity: 200,
    currentLoad: 184,
    completed: 1_120,
    rating: 4.6,
    onTime: 92,
    speciality: "tees · garment-dye",
    joined: "MMXXV",
  },
  {
    id: "PRT-003",
    name: "Saddar Studio",
    city: "Karachi · Saddar",
    contact: "Rehan · +92 333 3456789",
    verified: true,
    capacity: 150,
    currentLoad: 78,
    completed: 612,
    rating: 4.4,
    onTime: 88,
    speciality: "sweat · embroidery",
    joined: "MMXXVI",
  },
  {
    id: "PRT-004",
    name: "Anarkali Threads",
    city: "Lahore · Anarkali",
    contact: "Hira · +92 322 4567890",
    verified: true,
    capacity: 280,
    currentLoad: 142,
    completed: 940,
    rating: 4.7,
    onTime: 94,
    speciality: "DTF · all garments",
    joined: "MMXXV",
  },
  {
    id: "PRT-005",
    name: "Mall Road Press",
    city: "Lahore · Mall Rd",
    contact: "Salim · +92 345 5678901",
    verified: false,
    capacity: 180,
    currentLoad: 22,
    completed: 84,
    rating: 4.1,
    onTime: 80,
    speciality: "caps · accessories",
    joined: "MMXXVI",
  },
  {
    id: "PRT-006",
    name: "Pindi Print House",
    city: "Rawalpindi",
    contact: "Tariq · +92 312 6789012",
    verified: true,
    capacity: 220,
    currentLoad: 118,
    completed: 720,
    rating: 4.5,
    onTime: 91,
    speciality: "DTF · cotton blends",
    joined: "MMXXV",
  },
];

export const TRANSACTIONS = [
  { id: "TX-9412", maker: "@chand.print", plan: "Mehfil", amount: 11_500, date: "2 hours ago", method: "card · stripe" },
  { id: "TX-9411", maker: "@maryam.studio", plan: "Atelier", amount: 3_990, date: "5 hours ago", method: "card · stripe" },
  { id: "TX-9410", maker: "@ucademy", plan: "Atelier", amount: 3_990, date: "yesterday", method: "card · stripe" },
  { id: "TX-9409", maker: "@verse.tee", plan: "Apprentice", amount: 1_490, date: "yesterday", method: "easypaisa" },
  { id: "TX-9408", maker: "@truckart.co", plan: "Atelier", amount: 3_990, date: "2 days ago", method: "card · stripe" },
  { id: "TX-9407", maker: "@monsoon.kch", plan: "Atelier", amount: 3_990, date: "2 days ago", method: "card · stripe" },
  { id: "TX-9406", maker: "@ghazal.fits", plan: "Mehfil", amount: 11_500, date: "3 days ago", method: "card · stripe" },
  { id: "TX-9405", maker: "@dye.house", plan: "Atelier", amount: 3_990, date: "3 days ago", method: "jazzcash" },
];

export const FAILED_PAYMENTS = [
  { id: "FP-0042", maker: "@thread.club", reason: "card declined", amount: 1_490, attempted: "1 hour ago" },
  { id: "FP-0041", maker: "@noor.print", reason: "insufficient funds", amount: 3_990, attempted: "yesterday" },
  { id: "FP-0040", maker: "@bazaar.fits", reason: "card expired", amount: 3_990, attempted: "2 days ago" },
];

export const REVENUE_BY_PLAN = [
  { plan: "Apprentice", mrr: 143_040, count: 96, color: "#534239" },
  { plan: "Atelier", mrr: 610_470, count: 153, color: "#5C1B1B" },
  { plan: "Mehfil", mrr: 437_000, count: 38, color: "#B8943A" },
];

export const COHORT_RETENTION = [
  { cohort: "Jan", m0: 100, m1: 88, m2: 79, m3: 74, m4: 71, m5: 68 },
  { cohort: "Feb", m0: 100, m1: 90, m2: 82, m3: 76, m4: 72, m5: null },
  { cohort: "Mar", m0: 100, m1: 91, m2: 84, m3: 78, m4: null, m5: null },
  { cohort: "Apr", m0: 100, m1: 92, m2: 85, m3: null, m4: null, m5: null },
  { cohort: "May", m0: 100, m1: 93, m2: null, m3: null, m4: null, m5: null },
  { cohort: "Jun", m0: 100, m1: null, m2: null, m3: null, m4: null, m5: null },
];

export const TOP_MAKERS = [
  { handle: "@chand.print", city: "Lahore", lifetime: 168_500, plan: "Mehfil" },
  { handle: "@ghazal.fits", city: "London", lifetime: 142_300, plan: "Mehfil" },
  { handle: "@maryam.studio", city: "Karachi", lifetime: 92_440, plan: "Atelier" },
  { handle: "@truckart.co", city: "Rawalpindi", lifetime: 79_800, plan: "Atelier" },
  { handle: "@ucademy", city: "Karachi", lifetime: 64_350, plan: "Atelier" },
];

export const FEATURE_FLAGS = [
  { key: "studio.private-presets", label: "Private preset training", desc: "Allow Mehfil subscribers to train custom presets on their archive.", on: true },
  { key: "studio.bilingual-pen", label: "Bilingual Poet's Pen", desc: "Generate captions in Urdu + English in the same run.", on: true },
  { key: "press.auto-handoff", label: "Auto handoff to printer", desc: "Automatically route ready proofs to the nearest verified partner.", on: false },
  { key: "press.diaspora-shipping", label: "Diaspora shipping", desc: "Offer international shipping at checkout (UK, US, Gulf).", on: true },
  { key: "studio.dtf-300dpi-export", label: "300dpi DTF export", desc: "Export proofs at print resolution with transparent background.", on: true },
  { key: "engine.beta-truck-art", label: "Truck-Art Maximal (BETA)", desc: "The Rawalpindi preset, still in field-test with the Karachi ten.", on: false },
];

export const TEAM = [
  { name: "Usman Mahmood", role: "Founder · Atelier", email: "usman@vintage.ai", access: "owner", avatar: "U" },
  { name: "Hira Saeed", role: "Press · operations", email: "hira@vintage.ai", access: "admin", avatar: "H" },
  { name: "Asad Khan", role: "Engineering", email: "asad@vintage.ai", access: "admin", avatar: "A" },
  { name: "Sana Iqbal", role: "Cultural curation", email: "sana@vintage.ai", access: "editor", avatar: "S" },
];

export const EMAIL_TEMPLATES = [
  { id: "EM-001", name: "Welcome · the apprentice", subject: "Pull up a chair, friend.", lastEdited: "2 days ago", sent: 287 },
  { id: "EM-002", name: "Drop shipped", subject: "Your folio left the press.", lastEdited: "1 week ago", sent: 1_412 },
  { id: "EM-003", name: "Early-bird invitation", subject: "An edition reserved for you.", lastEdited: "3 weeks ago", sent: 600 },
  { id: "EM-004", name: "Payment failed", subject: "A note from the desk.", lastEdited: "1 month ago", sent: 38 },
  { id: "EM-005", name: "Folio in press", subject: "Your proof is at the partners.", lastEdited: "1 week ago", sent: 942 },
];

export const SIGNUP_FEED = [
  { handle: "@noor.prints", city: "Karachi", plan: "trial · Apprentice", when: "12 minutes ago" },
  { handle: "@aleena.threads", city: "Lahore", plan: "trial · Apprentice", when: "1 hour ago" },
  { handle: "@bilal.dyeworks", city: "Faisalabad", plan: "Atelier", when: "3 hours ago" },
  { handle: "@sana.studio", city: "Karachi", plan: "trial · Apprentice", when: "5 hours ago" },
  { handle: "@kasur.fits", city: "Kasur", plan: "Apprentice", when: "yesterday" },
];

export const PRESET_PROMPTS: Record<string, { positive: string; negative: string; refs: string[] }> = {
  "VBE-001": {
    positive:
      "deep oxblood ink-stains, torn vintage chapbook paper, Urdu Nastaliq calligraphy, cigarette smoke, broken couplets, hand-pressed letterpress textures, 1970s Karachi melancholy, faded gold leaf",
    negative:
      "neon, cyberpunk, plastic gradients, generic AI sparkle, perfect symmetry, watermarks",
    refs: ["jaun-elia-archive.jpg", "1972-karachi-mehfil.tif", "torn-chapbook-edge.png"],
  },
  "VBE-002": {
    positive:
      "classical Mughal arabesque, oxblood + parchment + gilt, candle-lit mehfil, hand-set Nastaliq verses, rose and nightingale motifs, scrollwork, ink-on-paper texture",
    negative: "modernist, sans-serif, flat colour, harsh shadows",
    refs: ["mughal-frontispiece.tif", "delhi-1850-print.jpg"],
  },
  "VBE-003": {
    positive:
      "single ink-dot composition, generous negative space, whirling line, calligraphic restraint, parchment ground, almost nothing on the field",
    negative: "complexity, decorative excess, multiple colours, busy texture",
    refs: ["rumi-spiral-study.png", "negative-space-folio.jpg"],
  },
};
