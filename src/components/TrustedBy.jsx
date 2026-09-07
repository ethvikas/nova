import { LOGOS } from '../data/content.js'
import { Glyph } from './icons.jsx'
import useReveal from '../hooks/useReveal.js'

/** Trusted-by strip: grayscale marks that get color on hover. */
export default function TrustedBy() {
  const ref = useReveal()
  return (
    <section className="trusted" aria-label="Companies using NOVA">
      <div className="container reveal" ref={ref}>
        <p className="trusted-label">Trusted by 12,000+ teams worldwide</p>
        <ul className="logo-row">
          {LOGOS.map(l => (
            <li key={l.name} className="logo-item"><Glyph type={l.glyph} /><span>{l.name}</span></li>
          ))}
        </ul>
      </div>
    </section>
  )
}
