import { useEffect, useState } from 'react'

// Lightweight 3s handwritten "JE" signature intro. It plays once per refresh and
// then removes itself from the DOM. It does NOT gate page rendering — the app
// mounts underneath immediately; this is only a timed overlay on top.
export default function Loader() {
  const [ready, setReady] = useState(false) // begin fade-out
  const [gone, setGone] = useState(false)   // unmount

  useEffect(() => {
    const fade = setTimeout(() => setReady(true), 2450)
    const done = setTimeout(() => setGone(true), 3000)
    return () => { clearTimeout(fade); clearTimeout(done) }
  }, [])

  if (gone) return null

  return (
    <div className={`loader ${ready ? 'is-ready' : ''}`} role="status" aria-label="Loading">
      <div className="intro-sign" aria-hidden="true">JE</div>
    </div>
  )
}
