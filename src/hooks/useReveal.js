import { useEffect, useRef } from 'react'

/**
 * useReveal — adds `.is-visible` to the element the first time it enters
 * the viewport. CSS in base.css animates opacity/translate on that class.
 * Returns a ref to attach to the element you want animated.
 */
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Users who prefer reduced motion get content instantly, no animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-visible')
        observer.disconnect() // reveal once, not every scroll
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
