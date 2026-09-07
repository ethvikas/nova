import { useState } from 'react'
import { FAQS } from '../data/content.js'
import { IconChevron } from './icons.jsx'
import SectionHead from './SectionHead.jsx'
import useReveal from '../hooks/useReveal.js'

/**
 * FAQ accordion:
 * - `openIndex` in state; the clicked item opens, others close (accordion behavior)
 * - Height animation is pure CSS: grid-template-rows 0fr -> 1fr (no JS measuring)
 * - aria-expanded / aria-controls wire button <-> panel for screen readers
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref = useReveal()

  return (
    <section className="section" id="faq">
      <div className="container narrow">
        <SectionHead eyebrow="FAQ" title="Questions, answered" />
        <div className="faq-list reveal" ref={ref}>
          {FAQS.map((item, i) => {
            const open = openIndex === i
            return (
              <div className={`faq-item ${open ? 'open' : ''}`} key={item.q}>
                <h3>
                  <button
                    className="faq-q"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <IconChevron />
                  </button>
                </h3>
                <div className="faq-a" id={`faq-panel-${i}`} role="region" aria-hidden={!open}>
                  <div className="faq-a-inner"><p>{item.a}</p></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
