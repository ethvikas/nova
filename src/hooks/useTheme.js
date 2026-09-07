import { useEffect, useState } from 'react'

/**
 * useTheme — dark/light mode.
 * - Initial value: saved preference, else the OS setting (prefers-color-scheme)
 * - Applies `data-theme` on <html>; CSS custom properties in tokens.css react to it
 * - Persists the choice to localStorage
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('nova-theme')
    if (saved === 'dark' || saved === 'light') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('nova-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}
