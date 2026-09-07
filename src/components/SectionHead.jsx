import useReveal from '../hooks/useReveal.js'

/**
 * Reusable section header (eyebrow + title + subtitle).
 * One component, every section -> consistent rhythm, zero duplication.
 */
export default function SectionHead({ eyebrow, title, sub, align = 'center' }) {
  const ref = useReveal()
  return (
    <div className={`section-head reveal align-${align}`} ref={ref}>
      {eyebrow && <p className="eyebrow pill">{eyebrow}</p>}
      <h2>{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  )
}
