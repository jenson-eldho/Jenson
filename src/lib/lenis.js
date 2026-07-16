import Lenis from 'lenis'

// Sticky nav height — matches the existing `[id] { scroll-margin-top: 92px }`.
const HEADER_OFFSET = 92
// Premium, consistent duration for navigation actions (~1.0–1.2s).
const NAV_DURATION = 1.1

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let lenis = null
let rafId = 0

// Create the single global Lenis instance and start its RAF loop.
export function initLenis() {
  if (lenis) return lenis
  const reduce = prefersReduced()
  lenis = new Lenis({
    duration: NAV_DURATION,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !reduce,
  })
  const raf = (time) => {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)
  return lenis
}

export function destroyLenis() {
  if (!lenis) return
  cancelAnimationFrame(rafId)
  lenis.destroy()
  lenis = null
}

// Smoothly scroll to a "#hash" target, offsetting for the fixed header.
// Returns true when the target exists and Lenis handled it.
export function scrollToHash(hash) {
  if (!lenis || !hash || hash === '#') return false
  const opts = { duration: NAV_DURATION, immediate: prefersReduced() }
  if (hash === '#top') {
    lenis.scrollTo(0, opts)
    return true
  }
  const el = document.querySelector(hash)
  if (!el) return false
  lenis.scrollTo(el, { ...opts, offset: -HEADER_OFFSET })
  return true
}

// Smoothly scroll back to the Hero (top) via Lenis.
export function scrollToTop() {
  if (!lenis) return false
  lenis.scrollTo(0, { duration: NAV_DURATION, immediate: prefersReduced() })
  return true
}
