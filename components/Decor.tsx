// Decorative brand vectors (sparkle stars + squiggle lines) used as animated
// overlays on the homepage. Purely presentational + CSS-animated, so these can
// render inside server or client components. Hidden from assistive tech.

const STAR_PATH =
  'M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z'

export type SparkleItem = {
  top?: string
  left?: string
  right?: string
  bottom?: string
  size: number
  delay?: number
  dur?: number
  white?: boolean
}

export function Sparkles({
  items,
  className = '',
}: {
  items: SparkleItem[]
  className?: string
}) {
  return (
    <div className={`decor-layer ${className}`} aria-hidden="true">
      {items.map((s, i) => (
        <span
          key={i}
          className={`decor-sparkle${s.white ? ' white' : ''}`}
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay ?? 0}s`,
            animationDuration: `${s.dur ?? 3}s`,
          }}
        >
          <svg viewBox="0 0 24 24">
            <path d={STAR_PATH} fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  )
}

export function Squiggle({
  variant = 'wave',
  className = '',
  style,
}: {
  variant?: 'wave' | 'loop'
  className?: string
  style?: React.CSSProperties
}) {
  const d =
    variant === 'loop'
      ? 'M4 40 C 40 4, 70 4, 80 30 S 70 70, 50 56 S 60 14, 110 24 S 180 50, 196 18'
      : 'M2 30 C 28 6, 48 54, 78 30 S 128 6, 158 30 S 196 50, 198 28'
  return (
    <svg
      className={`decor-squiggle ${className}`}
      style={style}
      viewBox="0 0 200 72"
      fill="none"
      aria-hidden="true"
    >
      <path d={d} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}
