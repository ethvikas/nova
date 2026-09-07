import { useEffect, useRef, useState } from 'react'
import { IconPlay, IconX } from './icons.jsx'

/**
 * Hero — headline, CTAs and a pure-CSS product mockup.
 * Contains the bonus "demo modal" (its trigger lives here, so its state lives here too).
 */
export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="eyebrow pill"><span className="pulse-dot" aria-hidden="true" /> New: AI Automations 2.0 is live</p>
        <h1>Build Better.<br /><span className="grad-text">Work Smarter.</span></h1>
        <p className="hero-sub">
          NOVA is the AI-powered productivity platform that manages projects,
          automates repetitive tasks and keeps your whole team in sync — so you
          ship more with less effort.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary btn-lg" href="#pricing">Start free — no card needed</a>
          <button className="btn btn-ghost btn-lg" onClick={() => setDemoOpen(true)}>
            <IconPlay /> Watch demo
          </button>
        </div>
        <p className="hero-note">Free forever plan · 14-day Pro trial · Cancel anytime</p>

        {/* CSS-only dashboard mockup: bars, kanban columns and an “AI” chip */}
        <div className="mockup" role="img" aria-label="Preview of the NOVA dashboard interface">
          <div className="mockup-bar">
            <span className="dot" /><span className="dot" /><span className="dot" />
            <span className="mockup-url">nova.app/workspace</span>
          </div>
          <div className="mockup-body">
            <aside className="mock-side">
              <span className="side-item active" /><span className="side-item" /><span className="side-item" /><span className="side-item short" />
            </aside>
            <div className="mock-main">
              <div className="mock-head">
                <span className="mock-title" />
                <span className="ai-chip">✦ AI: 3 flows running</span>
              </div>
              <div className="mock-cols">
                {[70, 45, 85].map((h, i) => (
                  <div className="mock-col" key={i}>
                    {[0, 1, 2].map(j => (
                      <div className="mock-card" key={j} style={{ '--w': `${h - j * 15}%` }}>
                        <span className="mock-line" /><span className="mock-line small" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {demoOpen && <DemoModal onClose={() => setDemoOpen(false)} />}
    </section>
  )
}

/**
 * DemoModal — accessible dialog:
 * closes on ESC, on overlay click, locks body scroll, moves focus inside on open.
 */
function DemoModal({ onClose }) {
  const closeRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="NOVA product demo"
        onClick={e => e.stopPropagation()} // clicks inside must not close
      >
        <button ref={closeRef} className="icon-btn modal-close" onClick={onClose} aria-label="Close demo">
          <IconX />
        </button>
        <div
          className={`demo-screen ${playing ? 'playing' : ''}`}
          onClick={() => setPlaying(p => !p)}
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setPlaying(p => !p)}
          aria-label={playing ? 'Pause demo' : 'Play demo'}
        >
          {!playing && <span className="demo-play"><IconPlay /></span>}
          {playing && <div className="demo-shimmer"><span /><span /><span /></div>}
        </div>
        <p className="modal-caption">NOVA in 90 seconds — boards, automations and AI notes.</p>
      </div>
    </div>
  )
}
