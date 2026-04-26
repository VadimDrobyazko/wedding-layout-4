import type { FC } from 'react'

const DEEP  = '#7a8f6f'
const MID   = '#a8bfa1'
const LIGHT = '#bfcfb8'
const SOFT  = '#d6e2d0'
const WHISP = '#e8efe4'

// ─── Side botanical branches ───────────────────────────────────────────────

export const SideBranchLeft: FC = () => (
  <svg
    viewBox="0 0 120 1400"
    preserveAspectRatio="xMidYMin slice"
    fill="none"
    style={{ width: '100%', height: '130%', position: 'absolute', top: 0, left: 0 }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sideL" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0"    stopColor={MID}  stopOpacity="0.2" />
        <stop offset="0.15" stopColor={DEEP} stopOpacity="0.9" />
        <stop offset="0.85" stopColor={DEEP} stopOpacity="0.9" />
        <stop offset="1"    stopColor={MID}  stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <path
      d="M60 0 C 50 120, 70 220, 55 340 C 40 460, 75 560, 60 700 C 45 840, 70 940, 55 1080 C 40 1220, 70 1320, 60 1400"
      stroke="url(#sideL)" strokeWidth="1.1" strokeLinecap="round"
    />
    {[80, 220, 360, 510, 660, 820, 970, 1130, 1290].map((y, i) => {
      const left = i % 2 === 0
      const x = left ? 55 : 60
      const dx = left ? -28 : 28
      const dy = 18
      return (
        <g key={y} stroke={DEEP} strokeWidth="1" strokeLinecap="round" fill="none">
          <path d={`M${x} ${y} Q ${x + dx * 0.4} ${y - dy * 0.3} ${x + dx} ${y + dy}`} />
          <path
            d={`M${x + dx} ${y + dy}
                C ${x + dx + (left ? -14 : 14)} ${y + dy - 10},
                  ${x + dx + (left ? -22 : 22)} ${y + dy + 6},
                  ${x + dx + (left ? -10 : 10)} ${y + dy + 22}
                C ${x + dx + (left ? 4 : -4)} ${y + dy + 14},
                  ${x + dx + (left ? 2 : -2)} ${y + dy + 4},
                  ${x + dx} ${y + dy} Z`}
            fill={WHISP} fillOpacity="0.7"
          />
          <path d={`M${x + dx} ${y + dy} L ${x + dx + (left ? -14 : 14)} ${y + dy + 14}`} stroke={MID} strokeWidth="0.7" />
        </g>
      )
    })}
    {[140, 430, 740, 1050].map((y) => (
      <g key={y}>
        <circle cx="64" cy={y} r="2.5" fill={MID} opacity="0.7" />
        <circle cx="58" cy={y + 6} r="2" fill={LIGHT} opacity="0.7" />
      </g>
    ))}
  </svg>
)

export const SideBranchRight: FC = () => (
  <svg
    viewBox="0 0 120 1400"
    preserveAspectRatio="xMidYMin slice"
    fill="none"
    style={{ width: '100%', height: '130%', position: 'absolute', top: 0, left: 0, transform: 'scaleX(-1)' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sideR" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0"    stopColor={MID}  stopOpacity="0.2" />
        <stop offset="0.15" stopColor={DEEP} stopOpacity="0.9" />
        <stop offset="0.85" stopColor={DEEP} stopOpacity="0.9" />
        <stop offset="1"    stopColor={MID}  stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <path
      d="M60 0 C 70 140, 50 240, 65 380 C 80 520, 50 620, 60 760 C 70 900, 50 1000, 65 1140 C 80 1280, 55 1360, 60 1400"
      stroke="url(#sideR)" strokeWidth="1.1" strokeLinecap="round"
    />
    {[110, 260, 410, 560, 710, 870, 1020, 1180, 1330].map((y, i) => {
      const left = i % 2 === 0
      const x = left ? 60 : 65
      const dx = left ? -32 : 32
      const dy = 16
      return (
        <g key={y} stroke={DEEP} strokeWidth="1" strokeLinecap="round" fill="none">
          <path d={`M${x} ${y} Q ${x + dx * 0.4} ${y - dy * 0.3} ${x + dx} ${y + dy}`} />
          <path
            d={`M${x + dx} ${y + dy}
                C ${x + dx + (left ? -16 : 16)} ${y + dy - 12},
                  ${x + dx + (left ? -24 : 24)} ${y + dy + 4},
                  ${x + dx + (left ? -12 : 12)} ${y + dy + 24}
                C ${x + dx + (left ? 4 : -4)} ${y + dy + 14},
                  ${x + dx + (left ? 2 : -2)} ${y + dy + 4},
                  ${x + dx} ${y + dy} Z`}
            fill={SOFT} fillOpacity="0.5"
          />
        </g>
      )
    })}
    {[200, 500, 800, 1100].map((y) => (
      <circle key={y} cx="62" cy={y} r="2.5" fill={MID} opacity="0.6" />
    ))}
  </svg>
)

// ─── Corner flourish for cards ────────────────────────────────────────────

type CornerProps = { color?: string; size?: number; className?: string }

export const CornerFlourish: FC<CornerProps> = ({ color = MID, size = 90, className }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    <path d="M5 95 C 5 60, 25 30, 60 15 C 75 9, 88 8, 95 10" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <path d="M15 95 C 15 70, 30 45, 55 32" stroke={color} strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
    <path d="M30 50 C 22 44, 15 47, 14 55 C 22 58, 30 56, 30 50 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="0.7" />
    <path d="M48 30 C 40 26, 32 30, 32 38 C 40 41, 48 38, 48 30 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="0.7" />
    <path d="M70 18 C 64 12, 56 14, 55 22 C 62 26, 70 24, 70 18 Z" fill={color} fillOpacity="0.35" stroke={color} strokeWidth="0.7" />
    <g transform="translate(85, 12)">
      <circle cx="0" cy="0" r="3.5" fill={color} fillOpacity="0.5" />
      <circle cx="0" cy="0" r="1.2" fill={color} />
      <path d="M-4 -4 L -7 -7 M 4 -4 L 7 -7 M -4 4 L -7 7 M 4 4 L 7 7" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
    </g>
    <circle cx="22" cy="68" r="1.8" fill={color} opacity="0.7" />
    <circle cx="18" cy="74" r="1.5" fill={color} opacity="0.6" />
  </svg>
)

// ─── Section divider ──────────────────────────────────────────────────────

type DividerProps = { color?: string; className?: string }

export const Divider: FC<DividerProps> = ({ color = MID, className }) => (
  <svg className={className} viewBox="0 0 320 40" fill="none" aria-hidden="true" style={{ width: '100%', maxWidth: 320 }}>
    <line x1="0" y1="20" x2="120" y2="20" stroke={color} strokeWidth="0.7" opacity="0.5" />
    <line x1="200" y1="20" x2="320" y2="20" stroke={color} strokeWidth="0.7" opacity="0.5" />
    <g transform="translate(160, 20)">
      <path d="M-30 0 C -24 -6, -18 -8, -14 -3 C -18 2, -24 4, -30 0 Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="0.6" />
      <path d="M30 0 C 24 -6, 18 -8, 14 -3 C 18 2, 24 4, 30 0 Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="0.6" />
      <path d="M-30 0 C -24 6, -18 8, -14 3" stroke={color} strokeWidth="0.6" fill="none" />
      <path d="M30 0 C 24 6, 18 8, 14 3" stroke={color} strokeWidth="0.6" fill="none" />
      <circle cx="0" cy="0" r="4" fill={color} fillOpacity="0.5" stroke={color} strokeWidth="0.7" />
      <circle cx="0" cy="0" r="1.5" fill={color} />
      <line x1="-10" y1="0" x2="-6" y2="0" stroke={color} strokeWidth="0.6" />
      <line x1="10" y1="0" x2="6" y2="0" stroke={color} strokeWidth="0.6" />
    </g>
  </svg>
)

// ─── Timeline icons ───────────────────────────────────────────────────────

type IconProps = { size?: number; color?: string }

export const IconGathering: FC<IconProps> = ({ size = 120, color = DEEP }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <circle cx="60" cy="60" r="52" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <circle cx="60" cy="60" r="46" stroke={color} strokeWidth="0.5" opacity="0.25" strokeDasharray="2 4" />
    <g stroke={color} strokeWidth="1.1" strokeLinecap="round" fill="none">
      <path d="M60 90 L 60 65" />
      <path d="M60 88 C 50 80, 45 70, 48 58" />
      <path d="M60 88 C 70 80, 75 70, 72 58" />
      <path d="M60 85 C 55 75, 52 60, 56 50" />
      <path d="M60 85 C 65 75, 68 60, 64 50" />
    </g>
    <circle cx="60" cy="48" r="7" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="1" />
    <circle cx="60" cy="48" r="3" fill={color} fillOpacity="0.5" />
    {[0, 60, 120, 180, 240, 300].map((deg) => {
      const r = (deg * Math.PI) / 180
      return <circle key={deg} cx={60 + Math.cos(r) * 7} cy={48 + Math.sin(r) * 7} r="2.2" fill={color} fillOpacity="0.4" />
    })}
    <circle cx="48" cy="58" r="5" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="0.9" />
    <circle cx="48" cy="58" r="1.8" fill={color} fillOpacity="0.5" />
    <circle cx="72" cy="58" r="5" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="0.9" />
    <circle cx="72" cy="58" r="1.8" fill={color} fillOpacity="0.5" />
    <path d="M50 70 C 42 68, 36 72, 38 80 C 46 80, 52 76, 50 70 Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="0.8" />
    <path d="M70 70 C 78 68, 84 72, 82 80 C 74 80, 68 76, 70 70 Z" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="0.8" />
    <path d="M55 88 C 52 92, 52 95, 55 96 M65 88 C 68 92, 68 95, 65 96" stroke={color} strokeWidth="0.9" strokeLinecap="round" />
    <ellipse cx="60" cy="90" rx="6" ry="2" stroke={color} strokeWidth="0.9" fill="none" />
  </svg>
)

export const IconCeremony: FC<IconProps> = ({ size = 120, color = DEEP }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <circle cx="60" cy="60" r="52" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <circle cx="60" cy="60" r="46" stroke={color} strokeWidth="0.5" opacity="0.25" strokeDasharray="2 4" />
    <path d="M30 100 L 30 60 C 30 40, 42 28, 60 28 C 78 28, 90 40, 90 60 L 90 100" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <g stroke={color} fill="none" strokeLinecap="round">
      <path d="M30 100 C 28 85, 32 70, 35 55 C 37 45, 42 38, 50 32" strokeWidth="0.9" />
      <path d="M32 90 C 28 88, 24 90, 24 95 C 28 96, 34 94, 32 90 Z" fill={color} fillOpacity="0.3" strokeWidth="0.7" />
      <path d="M34 75 C 30 73, 26 75, 26 80 C 30 81, 36 79, 34 75 Z" fill={color} fillOpacity="0.3" strokeWidth="0.7" />
      <path d="M36 60 C 32 58, 28 60, 28 65 C 32 66, 38 64, 36 60 Z" fill={color} fillOpacity="0.3" strokeWidth="0.7" />
      <circle cx="48" cy="33" r="3.5" fill={color} fillOpacity="0.4" strokeWidth="0.7" />
      <circle cx="48" cy="33" r="1.2" fill={color} />
    </g>
    <g stroke={color} fill="none" strokeLinecap="round">
      <path d="M90 100 C 92 85, 88 70, 85 55 C 83 45, 78 38, 70 32" strokeWidth="0.9" />
      <path d="M88 90 C 92 88, 96 90, 96 95 C 92 96, 86 94, 88 90 Z" fill={color} fillOpacity="0.3" strokeWidth="0.7" />
      <path d="M86 75 C 90 73, 94 75, 94 80 C 90 81, 84 79, 86 75 Z" fill={color} fillOpacity="0.3" strokeWidth="0.7" />
      <path d="M84 60 C 88 58, 92 60, 92 65 C 88 66, 82 64, 84 60 Z" fill={color} fillOpacity="0.3" strokeWidth="0.7" />
      <circle cx="72" cy="33" r="3.5" fill={color} fillOpacity="0.4" strokeWidth="0.7" />
      <circle cx="72" cy="33" r="1.2" fill={color} />
    </g>
    <g transform="translate(60, 30)">
      <circle cx="0" cy="0" r="5" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="0.9" />
      <circle cx="0" cy="0" r="1.8" fill={color} />
    </g>
    <circle cx="55" cy="100" r="3.5" stroke={color} strokeWidth="1" fill="none" />
    <circle cx="63" cy="100" r="3.5" stroke={color} strokeWidth="1" fill="none" />
  </svg>
)

export const IconPhoto: FC<IconProps> = ({ size = 120, color = DEEP }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <circle cx="60" cy="60" r="52" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <circle cx="60" cy="60" r="46" stroke={color} strokeWidth="0.5" opacity="0.25" strokeDasharray="2 4" />
    <g stroke={color} strokeWidth="1.2" fill="none" strokeLinejoin="round">
      <path d="M28 50 L 92 50 L 92 86 L 28 86 Z" />
      <path d="M40 50 L 44 42 L 76 42 L 80 50" />
      <circle cx="60" cy="68" r="14" />
      <circle cx="60" cy="68" r="9" fill={color} fillOpacity="0.15" />
      <circle cx="60" cy="68" r="5" fill={color} fillOpacity="0.3" />
      <circle cx="63" cy="65" r="1.5" fill={color} fillOpacity="0.6" />
      <rect x="78" y="54" width="6" height="3" />
    </g>
    <g transform="translate(60, 38)">
      <path d="M-10 0 C -14 -4, -18 -2, -18 3 C -14 6, -8 4, -10 0 Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="0.7" />
      <path d="M10 0 C 14 -4, 18 -2, 18 3 C 14 6, 8 4, 10 0 Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="0.7" />
      <circle cx="0" cy="-2" r="3" fill={color} fillOpacity="0.5" stroke={color} strokeWidth="0.7" />
      <circle cx="0" cy="-2" r="1" fill={color} />
    </g>
  </svg>
)

export const IconDance: FC<IconProps> = ({ size = 120, color = DEEP }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <circle cx="60" cy="60" r="52" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <circle cx="60" cy="60" r="46" stroke={color} strokeWidth="0.5" opacity="0.25" strokeDasharray="2 4" />
    <g stroke={color} strokeWidth="1" fill="none" strokeLinecap="round">
      <path d="M60 60 m -28 0 a 28 28 0 1 0 56 0 a 28 28 0 1 0 -56 0" opacity="0.3" strokeDasharray="3 5" />
      <path d="M60 60 C 48 50, 44 38, 52 28 C 60 22, 68 26, 70 36" strokeWidth="1.1" />
      <path d="M60 60 C 72 70, 76 82, 68 92 C 60 98, 52 94, 50 84" strokeWidth="1.1" />
    </g>
    <path d="M52 28 C 46 24, 40 26, 38 32 C 44 36, 50 34, 52 28 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="0.8" />
    <path d="M70 36 C 76 32, 82 36, 82 42 C 76 44, 70 42, 70 36 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="0.8" />
    <path d="M68 92 C 74 96, 80 94, 82 88 C 76 84, 70 86, 68 92 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="0.8" />
    <path d="M50 84 C 44 88, 38 84, 38 78 C 44 76, 50 78, 50 84 Z" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="0.8" />
    <path d="M60 62 C 56 58, 50 58, 50 64 C 50 70, 60 76, 60 76 C 60 76, 70 70, 70 64 C 70 58, 64 58, 60 62 Z"
      fill={color} fillOpacity="0.4" stroke={color} strokeWidth="1" />
    <g stroke={color} strokeWidth="0.9" strokeLinecap="round">
      <line x1="30" y1="55" x2="30" y2="42" />
      <ellipse cx="28" cy="56" rx="3" ry="2" fill={color} fillOpacity="0.5" />
      <line x1="90" y1="50" x2="90" y2="38" />
      <ellipse cx="92" cy="51" rx="3" ry="2" fill={color} fillOpacity="0.5" />
      <path d="M30 42 C 34 40, 36 42, 36 45" fill="none" />
      <path d="M90 38 C 94 36, 96 38, 96 41" fill="none" />
    </g>
  </svg>
)

export const IconCake: FC<IconProps> = ({ size = 120, color = DEEP }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <circle cx="60" cy="60" r="52" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <circle cx="60" cy="60" r="46" stroke={color} strokeWidth="0.5" opacity="0.25" strokeDasharray="2 4" />
    <g stroke={color} strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="60" cy="48" rx="14" ry="3.5" />
      <path d="M46 48 L 46 58 C 46 60, 60 62, 74 60 L 74 48" />
      <ellipse cx="60" cy="58" rx="14" ry="3.5" fill={color} fillOpacity="0.1" />
      <ellipse cx="60" cy="62" rx="22" ry="4" />
      <path d="M38 62 L 38 76 C 38 78, 60 80, 82 78 L 82 62" />
      <ellipse cx="60" cy="76" rx="22" ry="4" fill={color} fillOpacity="0.1" />
      <ellipse cx="60" cy="80" rx="30" ry="4.5" />
      <path d="M30 80 L 30 96 C 30 98, 60 100, 90 98 L 90 80" />
      <ellipse cx="60" cy="96" rx="30" ry="4.5" fill={color} fillOpacity="0.1" />
    </g>
    <g transform="translate(60, 28)">
      <path d="M0 6 C -3 2, -8 2, -8 7 C -8 12, 0 18, 0 18 C 0 18, 8 12, 8 7 C 8 2, 3 2, 0 6 Z"
        fill={color} fillOpacity="0.5" stroke={color} strokeWidth="1" />
      <line x1="0" y1="18" x2="0" y2="48" stroke={color} strokeWidth="0.8" strokeDasharray="1 2" />
    </g>
    <path d="M46 48 C 48 51, 50 49, 52 51 C 54 49, 56 51, 58 49 C 60 51, 62 49, 64 51 C 66 49, 68 51, 70 49 C 72 51, 74 49, 74 48"
      stroke={color} strokeWidth="0.7" fill="none" />
  </svg>
)

export const ICON_MAP = {
  gathering: IconGathering,
  ceremony:  IconCeremony,
  photo:     IconPhoto,
  dance:     IconDance,
  cake:      IconCake,
} as const

export type IconKey = keyof typeof ICON_MAP
