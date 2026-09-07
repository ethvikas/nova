import { useState } from 'react'
import { PLANS } from '../data/content.js'
import { IconCheck } from './icons.jsx'
import SectionHead from './SectionHead.jsx'
import useReveal from '../hooks/useReveal.js'

/**
 * Pricing — monthly/annual toggle.
 * One boolean state (`annual`); prices render conditionally from data.
 */
export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  const ref = useReveal()

  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHead
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          sub="Start free. Upgrade when the whole team is hooked."
        />

        <div className="billing-toggle reveal" ref={ref}>
          <span className={!annual ? 'active' : ''}>Monthly</span>
          <button
            className="switch"
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual(a => !a)}
            aria-label="Toggle annual billing"
          ><i /></button>
          <span className={annual ? 'active' : ''}>Annual <em className="save">save 20%</em></span>
        </div>

        <ul className="grid grid-3 pricing-grid">
          {PLANS.map(p => {
            const price = p.monthly === null ? null : annual ? p.annual : p.monthly
            return (
              <li className={`card plan ${p.popular ? 'popular' : ''}`} key={p.name}>
                {p.popular && <span className="pill pill-pop">Most popular</span>}
                <h3>{p.name}</h3>
                <p className="plan-blurb">{p.blurb}</p>
                <p className="price">
                  {price === null
                    ? <span className="amount">Custom</span>
                    : <><span className="amount">${price}</span><span className="per">/ user / month</span></>}
                </p>
                {price !== null && annual && <p className="billed-as">billed annually</p>}
                <a
                  className={`btn ${p.popular ? 'btn-primary' : 'btn-outline'} btn-block`}
                  href="#cta"
                >{p.cta}</a>
                <ul className="check-list tight">
                  {p.features.map(f => (
                    <li key={f}><span className="check"><IconCheck /></span>{f}</li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
