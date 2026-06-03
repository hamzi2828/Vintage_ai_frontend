type HoodieProps = {
  bodyColor?: string;
  printText?: string;
  printSub?: string;
  printColor?: string;
};

export function Hoodie({
  bodyColor = "#3F1010",
  printText = "آہ",
  printSub = "jaun elia",
  printColor = "#EDE0CC",
}: HoodieProps) {
  return (
    <svg viewBox="0 0 400 460" className="w-full h-auto" aria-hidden>
      <defs>
        <filter id="fab" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" result="t" />
          <feColorMatrix in="t" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.3 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <linearGradient id="shade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="40%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
        </linearGradient>
      </defs>
      {/* hoodie silhouette */}
      <path
        d="M 80,80
           C 120,55 150,50 200,52
           C 250,50 280,55 320,80
           L 380,110 L 360,170 L 320,160
           L 320,420 C 320,432 312,440 300,440
           L 100,440 C 88,440 80,432 80,420
           L 80,160 L 40,170 L 20,110 Z"
        fill={bodyColor}
      />
      <path
        d="M 80,80 C 120,55 150,50 200,52 C 250,50 280,55 320,80 L 380,110 L 360,170 L 320,160 L 320,420 C 320,432 312,440 300,440 L 100,440 C 88,440 80,432 80,420 L 80,160 L 40,170 L 20,110 Z"
        fill="url(#shade)"
      />
      {/* hood */}
      <path
        d="M 150,72 C 170,30 230,30 250,72 C 230,82 220,90 200,90 C 180,90 170,82 150,72 Z"
        fill={bodyColor}
        stroke="rgba(0,0,0,0.35)"
        strokeWidth="1"
      />
      {/* drawstrings */}
      <line x1="190" y1="78" x2="186" y2="140" stroke="rgba(0,0,0,0.5)" strokeWidth="1.2" />
      <line x1="210" y1="78" x2="214" y2="140" stroke="rgba(0,0,0,0.5)" strokeWidth="1.2" />
      <circle cx="186" cy="142" r="3" fill="rgba(0,0,0,0.5)" />
      <circle cx="214" cy="142" r="3" fill="rgba(0,0,0,0.5)" />
      {/* pocket seam */}
      <path d="M 130,280 Q 200,310 270,280 L 270,360 L 130,360 Z" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
      {/* fabric grain */}
      <rect x="80" y="50" width="240" height="390" fill={bodyColor} opacity="0.15" filter="url(#fab)" />
      {/* PRINT */}
      <g>
        <text
          x="200"
          y="240"
          textAnchor="middle"
          fill={printColor}
          fontFamily="serif"
          fontSize="92"
          fontStyle="italic"
        >
          {printText}
        </text>
        <text
          x="200"
          y="270"
          textAnchor="middle"
          fill={printColor}
          fontFamily="var(--font-jetbrains)"
          fontSize="10"
          letterSpacing="4"
        >
          {printSub.toUpperCase()}
        </text>
      </g>
    </svg>
  );
}
