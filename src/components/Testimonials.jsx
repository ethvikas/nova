import { useEffect, useRef, useState } from 'react'
import { TESTIMONIALS } from '../data/content.js'
import { IconArrowLeft, IconArrowRight } from './icons.jsx'
import SectionHead from './SectionHead.jsx'
import useReveal from '../hooks/useReveal.js'

/**
 * Testimonial carousel:
 * - state: active index
 * - auto-advances every 6s, pauses on hover/focus
 * - arrows + dots are real buttons with aria labels; slide changes via
 *   transform on a flex track (translateX(-index * 100%))
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)
  const headRef = useReveal()
  const count = TESTIMONIALS.length

  const go = (i) => setIndex(((i % count) + count) % count) // wraps around

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(() => setIndex(i => (i + 1) % count), 6000)
    return () => clearInterval(timer.current)
  }, [paused, count])

  return (
    <section
      className="section"
      id="testimonials"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container">
        <div ref={headRef}>
          <SectionHead eyebrow="Testimonials" title="Teams feel the difference in week one" />
        </div>

        <div className="carousel">
          <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {TESTIMONIALS.map((t, i) => (
              <figure
                className="quote card"
                key={t.name}
                aria-hidden={i !== index}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
              >
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <span className="avatar">{t.initials}</span>
                  <span><strong>{t.name}</strong><small>{t.role}</small></span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="carousel-nav">
            <button className="icon-btn" onClick={() => go(index - 1)} aria-label="Previous testimonial"><IconArrowLeft /></button>
            <div className="dots" role="tablist" aria-label="Choose testimonial">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  className={`dot-btn ${i === index ? 'active' : ''}`}
                  onClick={() => go(i)}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="icon-btn" onClick={() => go(index + 1)} aria-label="Next testimonial"><IconArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
