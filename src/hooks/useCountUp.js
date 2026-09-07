import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp — animates a number from 0 to `target` when the element
 * scrolls into view. Used by the Stats section.
 * @param {number} target   final value (e.g. 99.98)
 * @param {number} decimals digits after the decimal point
 * @param {number} duration animation time in ms
 */
export default function useCountUp(target, decimals = 0, duration = 1600) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }

    let frame
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()

      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        // easeOutCubic: fast start, gentle landing
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Number((target * eased).toFixed(decimals)))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.4 })

    observer.observe(el)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [target, decimals, duration])

  // 12,400 style thousands separators
  const display = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })

  return { ref, display }
}
