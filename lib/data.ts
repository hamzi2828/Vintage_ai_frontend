export type Vibe = {
  id: string;
  name: string;
  urdu?: string;
  era: string;
  palette: [string, string, string, string];
  motifs: string[];
  couplet: { line1: string; line2: string };
  blurb: string;
  serial: string;
};

export const VIBES: Vibe[] = [
  {
    id: "jaun-elia",
    name: "Jaun Elia Melancholy",
    urdu: "جون ایلیا",
    era: "Karachi · 1970s",
    palette: ["#3F1010", "#5C1B1B", "#B8943A", "#EDE0CC"],
    motifs: ["smoke", "broken couplets", "cigarette ash", "ink blots"],
    couplet: {
      line1: "ek aurat raah taktī hai mujhe",
      line2: "is ko maʿlūm hai ke maiṅ kahīṅ nahīṅ",
    },
    blurb:
      "Deep reds, paper torn at the edge, hand-set verses that wear their grief on the seam.",
    serial: "VBE-001",
  },
  {
    id: "urdu-ghazal",
    name: "Urdu Ghazal Classical",
    urdu: "اردو غزل",
    era: "Delhi · 1850s",
    palette: ["#2C211B", "#5C1B1B", "#B8943A", "#F5EBD6"],
    motifs: ["mehfil candles", "scrollwork", "rose & nightingale", "calligraphic flourish"],
    couplet: {
      line1: "hazāroṅ ḳhvāhisheṅ aisī ki har ḳhvāhish pe dam nikle",
      line2: "bahut nikle mire armān lekin phir bhī kam nikle",
    },
    blurb: "Gold leaf on oxblood. Candle-lit mehfil typography for the patient buyer.",
    serial: "VBE-002",
  },
  {
    id: "minimalist-sufi",
    name: "Minimalist Sufi",
    urdu: "صوفی",
    era: "Konya · timeless",
    palette: ["#EDE0CC", "#534239", "#3A5A56", "#1A1310"],
    motifs: ["whirling lines", "single dot", "negative space", "rumi spiral"],
    couplet: {
      line1: "raqs-e-bismil hai paroṅ ke saath",
      line2: "khāmoshī mein bhī ek āwāz hai",
    },
    blurb: "Almost nothing on the tee — one ink-mark, one breath, one turn.",
    serial: "VBE-003",
  },
  {
    id: "90s-retro",
    name: "90s Bazaar Retro",
    urdu: "بازار",
    era: "Lahore · 1994",
    palette: ["#7A2A2A", "#3A5A56", "#D4B158", "#F5EBD6"],
    motifs: ["VHS scanlines", "lassi stall signage", "halftone", "neon urdu type"],
    couplet: {
      line1: "TV pe Doordarshan, cassette pe Nazia",
      line2: "ghar jaake likhā meṅ apnī kahānī",
    },
    blurb:
      "Halftone hand-painted bus-art crossed with cassette-tape typography. Loud, warm, half-faded.",
    serial: "VBE-004",
  },
  {
    id: "truck-art",
    name: "Truck-Art Maximal",
    urdu: "ٹرک آرٹ",
    era: "Rawalpindi · always",
    palette: ["#5C1B1B", "#B8943A", "#3A5A56", "#EDE0CC"],
    motifs: ["peacocks", "chamak-patti", "horns", "mirrored panels"],
    couplet: {
      line1: "buri nazar wāle terā mūnh kālā",
      line2: "but the typography is golden",
    },
    blurb: "Chamak-patti chrome, peacock blues, devotional excess. For loud, joyful drops.",
    serial: "VBE-005",
  },
  {
    id: "monsoon-noir",
    name: "Monsoon Noir",
    urdu: "ساون",
    era: "Karachi · July",
    palette: ["#1A1310", "#3A5A56", "#7A2A2A", "#CDB994"],
    motifs: ["wet asphalt", "rain on neon", "shutter signage", "soaked posters"],
    couplet: {
      line1: "sāwan ke baadal ne kuch likhā nahīṅ",
      line2: "phir bhī mere shahar pe sab kuch barsā",
    },
    blurb: "Rain-soaked black, signage greens, the city after a downpour. Slow, soaked, cinematic.",
    serial: "VBE-006",
  },
];

export const POETS = [
  "Jaun Elia",
  "Mirza Ghalib",
  "Faiz Ahmed Faiz",
  "Allama Iqbal",
  "Parveen Shakir",
  "Ahmed Faraz",
  "Rumi",
  "Bulleh Shah",
  "Sahir Ludhianvi",
  "Habib Jalib",
];

export const ROADMAP = [
  {
    week: "WEEK 01 — 02",
    focus: "Design & Logic",
    deliverable:
      "Wireframes of the user dashboard and prompt-engineering of the cultural vibes.",
    stamp: "DRAFTED",
  },
  {
    week: "WEEK 03 — 06",
    focus: "Development",
    deliverable: "AI APIs integrated. The Mockup engine begins to breathe.",
    stamp: "IN PRESS",
  },
  {
    week: "WEEK 07",
    focus: "Beta",
    deliverable:
      "Ten Karachi DTF sellers invited — they print, they break things, they tell us.",
    stamp: "FIELD-TEST",
  },
  {
    week: "WEEK 08",
    focus: "Launch",
    deliverable:
      "Early-bird subscriptions open at a tender, discounted rate. The atelier unbolts its doors.",
    stamp: "PUBLISHED",
  },
];

export const PRICING = [
  {
    name: "The Apprentice",
    tag: "for the first drop",
    price: "Rs. 1,490",
    cadence: "/ month",
    feats: [
      "20 design generations",
      "Two cultural presets",
      "Poet's Pen — captions only",
      "Mockup visualizer (1 garment)",
    ],
    accent: false,
  },
  {
    name: "The Atelier",
    tag: "for the working brand",
    price: "Rs. 3,990",
    cadence: "/ month",
    feats: [
      "Unlimited generations",
      "All six cultural presets + private blends",
      "Poet's Pen — captions, descriptions, story copy",
      "Mockup visualizer (hoodie, tee, sweat, cap)",
      "DTF-ready 300dpi exports",
    ],
    accent: true,
    stamp: "EARLY BIRD",
  },
  {
    name: "The Mehfil",
    tag: "for studios & co-ops",
    price: "Rs. 11,500",
    cadence: "/ month",
    feats: [
      "Five seats",
      "Custom preset trained on your archive",
      "Brand-tone API for your shop",
      "Priority print-vendor handoff",
    ],
    accent: false,
  },
];
