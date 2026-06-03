import clsx from "clsx";

type StampProps = {
  label: string;
  sub?: string;
  color?: "oxblood" | "ink" | "teal" | "gilt";
  rotate?: number;
  className?: string;
};

const colorMap = {
  oxblood: "text-oxblood",
  ink: "text-ink",
  teal: "text-teal-forgotten",
  gilt: "text-gilt-200",
};

export function Stamp({ label, sub, color = "oxblood", rotate = -4, className }: StampProps) {
  return (
    <div
      className={clsx(
        "stamp-edge inline-flex flex-col items-center px-3 py-2 font-mono uppercase",
        colorMap[color],
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span className="text-[0.62rem] tracking-stamp font-semibold">{label}</span>
      {sub && <span className="text-[0.55rem] tracking-stamp opacity-70 mt-0.5">{sub}</span>}
    </div>
  );
}

export function CircleStamp({
  text,
  inner,
  size = 100,
  color = "oxblood",
  className,
}: {
  text: string;
  inner?: string;
  size?: number;
  color?: "oxblood" | "ink" | "gilt";
  className?: string;
}) {
  const id = `tp-${text.replace(/\s+/g, "")}`;
  const colorHex = color === "oxblood" ? "#5C1B1B" : color === "gilt" ? "#B8943A" : "#1A1310";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={clsx("animate-stamp-thump", className)}
    >
      <defs>
        <path id={id} d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
      </defs>
      <circle cx="100" cy="100" r="92" fill="none" stroke={colorHex} strokeWidth="2.5" />
      <circle cx="100" cy="100" r="76" fill="none" stroke={colorHex} strokeWidth="1.2" strokeDasharray="3 4" />
      <text fill={colorHex} fontFamily="var(--font-jetbrains)" fontSize="11" letterSpacing="6">
        <textPath href={`#${id}`} startOffset="0">{text} · {text} · </textPath>
      </text>
      {inner && (
        <text
          x="100"
          y="108"
          textAnchor="middle"
          fill={colorHex}
          fontFamily="var(--font-fraunces)"
          fontStyle="italic"
          fontSize="22"
        >
          {inner}
        </text>
      )}
    </svg>
  );
}
