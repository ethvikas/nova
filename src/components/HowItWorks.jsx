import { STEPS } from '../data/content.js'
import SectionHead from './SectionHead.jsx'
import useReveal from '../hooks/useReveal.js'

/** How it works — numbered steps with a connecting line (desktop) via CSS. */
export default function HowItWorks() {
  const ref = useReveal()
  return (
    <section className="section" id="how">
      <div className="container">
        <SectionHead
          eyebrow="How it works"
          title="Zero to automated in four steps"
          sub="No rules engine, no consultants, no six-week rollout."
        />
        <ol className="steps reveal" ref={ref}>
          {STEPS.map(s => (
            <li className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
