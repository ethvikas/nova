import { STATS } from '../data/content.js'
import useCountUp from '../hooks/useCountUp.js'

/**
 * Statistics band — each number counts up when it scrolls into view
 * (IntersectionObserver in useCountUp; respects prefers-reduced-motion).
 */
function Stat({ value, suffix, label, decimals }) {
  const { ref, display } = useCountUp(value, decimals)
  return (
    <li className="stat" ref={ref}>
      <span className="stat-value">{display}{suffix}</span>
      <span className="stat-label">{label}</span>
    </li>
  )
}

export default function Stats() {
  return (
    <section className="stats-band" aria-label="NOVA by the numbers">
      <div className="container">
        <ul className="grid grid-4">
          {STATS.map(s => <Stat key={s.label} {...s} />)}
        </ul>
      </div>
    </section>
  )
}
