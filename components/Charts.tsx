"use client";

import { motion } from "framer-motion";

export function Sparkline({
  data,
  stroke = "#5C1B1B",
  fill = "rgba(92,27,27,0.10)",
  height = 56,
}: {
  data: number[];
  stroke?: string;
  fill?: string;
  height?: number;
}) {
  const w = 240;
  const h = height;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const span = Math.max(1, max - min);
  const step = w / (data.length - 1);
  const points = data.map((v, i) => `${i * step},${h - ((v - min) / span) * (h - 8) - 4}`);
  const path = `M${points.join(" L")}`;
  const area = `M0,${h} L${points.join(" L")} L${w},${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none">
      <path d={area} fill={fill} />
      <path d={path} fill="none" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
}

export function Bars({
  data,
  color = "#5C1B1B",
  height = 100,
}: {
  data: number[];
  color?: string;
  height?: number;
}) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1" style={{ height }}>
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.02 * i, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex-1 origin-bottom"
          style={{
            height: `${(v / max) * 100}%`,
            background: color,
            minWidth: 2,
          }}
        />
      ))}
    </div>
  );
}

export function DonutSplit({
  segments,
  size = 140,
}: {
  segments: { name: string; count: number; color: string }[];
  size?: number;
}) {
  const total = segments.reduce((s, x) => s + x.count, 0);
  const r = size / 2 - 12;
  const cx = size / 2;
  const cy = size / 2;
  const C = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg width={size} height={size}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#E2D2B6" strokeWidth="16" />
      {segments.map((s, i) => {
        const dash = (s.count / total) * C;
        const el = (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth="16"
            strokeDasharray={`${dash} ${C - dash}`}
            strokeDashoffset={-offset}
            transform={`rotate(-90 ${cx} ${cy})`}
          />
        );
        offset += dash;
        return el;
      })}
      <text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        fill="#1A1310"
        fontFamily="var(--font-fraunces)"
        fontStyle="italic"
        fontSize="22"
      >
        {total}
      </text>
    </svg>
  );
}

export function ProgressBar({
  value,
  max,
  color = "#5C1B1B",
}: {
  value: number;
  max: number;
  color?: string;
}) {
  return (
    <div className="h-1.5 bg-parchment-300 relative">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, (value / max) * 100)}%` }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        className="h-full"
        style={{ background: color }}
      />
    </div>
  );
}
