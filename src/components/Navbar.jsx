import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/content.js'
import { Logo, IconMenu, IconX, IconSun, IconMoon } from './icons.jsx'
import useTheme from '../hooks/useTheme.js'

/**
 * Navbar — sticky glass header.
 * - Shadow appears after scrolling (scrollY listener)
 * - On mobile (<820px) links collapse into a hamburger menu
 * - Menu state flips aria-expanded and closes on link click / resize to desktop
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Leaving mobile layout while menu is open -> force-close it
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 820) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`nav-shell ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav container" aria-label="Primary">
        <Logo />

        <ul className={`nav-links ${open ? 'open' : ''}`} id="nav-menu">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a className="btn btn-primary" href="#pricing" onClick={() => setOpen(false)}>Get NOVA free</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title="Toggle theme"
          >
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>
          <a className="btn btn-primary nav-cta-desktop" href="#pricing">Get NOVA free</a>
          <button
            className="icon-btn hamburger"
            onClick={() => setOpen(o => !o)}
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </nav>
    </header>
  )
}
