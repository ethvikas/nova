import useReveal from '../hooks/useReveal.js'

/** Final call-to-action band. */
export default function CTA() {
  const ref = useReveal()
  return (
    <section className="cta-band" id="cta">
      <div className="container reveal" ref={ref}>
        <h2>Ready to get your evenings back?</h2>
        <p>Join 12,000+ teams building better and working smarter with NOVA.</p>
        <div className="hero-cta center">
          <a className="btn btn-light btn-lg" href="#pricing">Start free today</a>
          <a className="btn btn-outline-light btn-lg" href="#product">Explore the product</a>
        </div>
        <small>No credit card required · Set up in under 5 minutes</small>
      </div>
    </section>
  )
}
