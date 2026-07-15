import { useEffect, useState } from 'react'

// Full-page branded loading screen. Reveals the site once the critical assets are
// ready — web fonts + the hero image — with a small minimum brand-display time.
// It deliberately does NOT wait on window 'load' (that would block on the external
// showreel iframe), and has a hard safety cap so it can never get stuck.
export default function Loader() {
  const [ready, setReady] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let cancelled = false

    const minTime = new Promise((r) => setTimeout(r, 850))
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve()
    const heroImage = new Promise((r) => {
      const img = new Image()
      img.onload = img.onerror = r
      img.src = `${import.meta.env.BASE_URL}person.png`
    })

    Promise.all([minTime, fontsReady, heroImage]).then(() => {
      if (!cancelled) setReady(true)
    })

    const safety = setTimeout(() => !cancelled && setReady(true), 4000)
    return () => { cancelled = true; clearTimeout(safety) }
  }, [])

  useEffect(() => {
    if (!ready) return
    const t = setTimeout(() => setGone(true), 600) // matches CSS fade duration
    return () => clearTimeout(t)
  }, [ready])

  if (gone) return null

  return (
    <div className={`loader ${ready ? 'is-ready' : ''}`} role="status" aria-live="polite">
      <div className="loader-inner">
        <div className="loader-mark">JE</div>
        <div className="loader-spinner" aria-hidden="true" />
        <p className="loader-text">Loading&nbsp;portfolio…</p>
      </div>
    </div>
  )
}
