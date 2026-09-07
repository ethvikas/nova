import { FEATURES } from '../data/content.js'
import { FEATURE_ICONS } from './icons.jsx'
import SectionHead from './SectionHead.jsx'
import useReveal from '../hooks/useReveal.js'

/** Features grid — 6 cards rendered from data, hover lift + icon glow in CSS. */
export default function Features() {
  const ref = useReveal()
  return (
    <section className="section" id="features">
      <div className="container">
        <SectionHead
          eyebrow="Features"
          title="Everything your team needs, nothing it doesn't"
          sub="Six building blocks that replace a stack of disconnected tools."
        />
        <ul className="grid grid-3 reveal" ref={ref}>
          {FEATURES.map(f => {
            const Icon = FEATURE_ICONS[f.icon]
            return (
              <li className="card feature-card" key={f.title}>
                <span className="feature-icon"><Icon /></span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
