import { SOLUTIONS } from '../data/content.js'
import { IconCheck } from './icons.jsx'
import SectionHead from './SectionHead.jsx'
import useReveal from '../hooks/useReveal.js'

/** Solutions / use-cases grid — one card per audience. */
export default function Solutions() {
  const ref = useReveal()
  return (
    <section className="section" id="solutions">
      <div className="container">
        <SectionHead
          eyebrow="Solutions"
          title="Built for the way your team works"
          sub="Same engine, tuned for different shapes of teams."
        />
        <ul className="grid grid-4 reveal" ref={ref}>
          {SOLUTIONS.map(s => (
            <li className="card solution-card" key={s.tag}>
              <span className="pill">{s.tag}</span>
              <h3>{s.title}</h3>
              <ul className="check-list tight">
                {s.points.map(p => (
                  <li key={p}><span className="check"><IconCheck /></span>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
