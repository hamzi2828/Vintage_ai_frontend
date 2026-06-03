type TeeProps = {
  bodyColor?: string;
  printSvg?: React.ReactNode;
};

export function Tee({ bodyColor = "#EDE0CC", printSvg }: TeeProps) {
  return (
    <svg viewBox="0 0 400 440" className="w-full h-auto" aria-hidden>
      <defs>
        <filter id="fab2">
          <feTurbulence baseFrequency="0.7" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.25 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <linearGradient id="tshade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
        </linearGradient>
      </defs>
      <path
        d="M 90,80 L 150,55 C 160,75 240,75 250,55 L 310,80 L 360,140 L 320,170 L 310,160 L 310,420 C 310,432 302,438 290,438 L 110,438 C 98,438 90,432 90,420 L 90,160 L 80,170 L 40,140 Z"
        fill={bodyColor}
      />
      <path
        d="M 90,80 L 150,55 C 160,75 240,75 250,55 L 310,80 L 360,140 L 320,170 L 310,160 L 310,420 C 310,432 302,438 290,438 L 110,438 C 98,438 90,432 90,420 L 90,160 L 80,170 L 40,140 Z"
        fill="url(#tshade)"
      />
      <path d="M 150,55 C 160,90 240,90 250,55" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2" />
      <rect x="90" y="50" width="220" height="390" fill={bodyColor} opacity="0.1" filter="url(#fab2)" />
      <g transform="translate(120, 140)">{printSvg}</g>
    </svg>
  );
}
