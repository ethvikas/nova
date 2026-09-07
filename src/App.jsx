import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import Features from './components/Features.jsx'
import Product from './components/Product.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Stats from './components/Stats.jsx'
import Solutions from './components/Solutions.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

/**
 * App — page composition only.
 * Every section is a self-contained component; all copy/data lives in src/data/content.js
 * so the UI is a pure "data -> view" render (easy to update, easy to test).
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustedBy />
        <Features />
        <Product />
        <HowItWorks />
        <Stats />
        <Solutions />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
