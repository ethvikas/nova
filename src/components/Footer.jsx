import { useState } from 'react'
import { FOOTER_COLS } from '../data/content.js'
import { Logo } from './icons.jsx'

/**
 * Footer — link columns + newsletter form with real validation:
 * trims input, checks it against an email regex, and surfaces
 * inline error / success messages (no backend, so success is simulated).
 */
export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: 'idle', msg: '' })

  const onSubmit = (e) => {
    e.preventDefault()
    const value = email.trim()
    if (!value) {
      setStatus({ type: 'error', msg: 'Please enter your work email.' })
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setStatus({ type: 'error', msg: 'That email does not look right — check the format.' })
    } else {
      setStatus({ type: 'success', msg: 'You are on the list! Product updates, once a month.' })
      setEmail('')
    }
  }

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>The AI-powered productivity platform for teams that ship.</p>
          <form className="newsletter" onSubmit={onSubmit} noValidate>
            <label htmlFor="newsletter-email">Monthly product updates</label>
            <div className="newsletter-row">
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={e => { setEmail(e.target.value); setStatus({ type: 'idle', msg: '' }) }}
                aria-describedby="newsletter-msg"
              />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </div>
            <p id="newsletter-msg" className={`newsletter-msg ${status.type}`} role="status" aria-live="polite">
              {status.msg}
            </p>
          </form>
        </div>

        {FOOTER_COLS.map(col => (
          <nav className="footer-col" key={col.title} aria-label={`Footer — ${col.title}`}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map(l => <li key={l}><a href="#top">{l}</a></li>)}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container footer-bar">
        <span>© 2026 NOVA Labs Inc. All rights reserved.</span>
        <span>Build Better. Work Smarter.</span>
      </div>
    </footer>
  )
}
