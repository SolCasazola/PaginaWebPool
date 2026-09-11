import { useId } from 'react'

const COLORS: Record<number, string> = {
  1: '#eab308', 2: '#3b82f6', 3: '#ef4444', 4: '#8b5cf6',
  5: '#f97316', 6: '#16a34a', 7: '#b91c1c', 8: '#111827',
  9: '#eab308', 10: '#3b82f6', 11: '#ef4444', 12: '#8b5cf6',
  13: '#f97316', 14: '#16a34a', 15: '#b91c1c',
}

export default function PoolBall({ n, size = 36 }: { n: number; size?: number }) {
  const uid = useId().replace(/:/g, 'x')
  const clipId = `clip${uid}`
  const gradId = `grad${uid}`
  const isSolid = n <= 8
  const color = COLORS[n] || '#888'

  return (
    <svg width={size} height={size} viewBox="0 0 36 36" style={{ display: 'block', flexShrink: 0 }}>
      <defs>
        <clipPath id={clipId}>
          <circle cx="18" cy="18" r="16.5" />
        </clipPath>
        <radialGradient id={gradId} cx="33%" cy="27%" r="58%">
          <stop offset="0%" stopColor="white" stopOpacity="0.42" />
          <stop offset="65%" stopColor="transparent" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.18" />
        </radialGradient>
      </defs>

      <circle cx="18" cy="18" r="16.5" fill={isSolid ? color : '#f0f0f0'} stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />

      {!isSolid && (
        <rect x="1.5" y="12" width="33" height="12" fill={color} clipPath={`url(#${clipId})`} />
      )}

      <circle cx="18" cy="18" r="7.5" fill="white" />
      <text
        x="18"
        y={n >= 10 ? '21.5' : '22.5'}
        textAnchor="middle"
        fontSize={n >= 10 ? '6.5' : '8.5'}
        fontWeight="bold"
        fill={n === 8 ? '#fff' : '#1a1a1a'}
        fontFamily="Inter, sans-serif"
      >
        {n}
      </text>

      <circle cx="18" cy="18" r="16.5" fill={`url(#${gradId})`} />
    </svg>
  )
}
