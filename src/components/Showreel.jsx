import { useState, useEffect, useRef } from 'react'
import { FaPlay } from 'react-icons/fa'
import Reveal from './Reveal'

// YouTube showreel. The iframe is only mounted after the user clicks the poster,
// so no YouTube script loads (and nothing autoplays) on page load.
// `enablejsapi=1` lets us pause it via postMessage when it scrolls out of view.
const YT_ID = 'KuiAQwvGj68'
const EMBED = `https://www.youtube.com/embed/${YT_ID}?rel=0&modestbranding=1&playsinline=1&autoplay=1&enablejsapi=1`

export default function Showreel() {
  const [playing, setPlaying] = useState(false)
  const [thumbFallback, setThumbFallback] = useState(false)
  const iframeRef = useRef(null)
  const poster = `https://img.youtube.com/vi/${YT_ID}/${thumbFallback ? 'hqdefault' : 'maxresdefault'}.jpg`

  // Auto-pause the showreel when less than ~50% of it is visible. Only active
  // once playback has started (the iframe is mounted); it never re-plays on
  // re-entry — the user must press Play again.
  useEffect(() => {
    if (!playing) return
    const iframe = iframeRef.current
    if (!iframe) return

    const pauseVideo = () => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
        '*'
      )
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) pauseVideo()
      },
      { threshold: 0.5 }
    )
    observer.observe(iframe)
    return () => observer.disconnect()
  }, [playing])

  return (
    <section id="showreel" className="section">
      <div className="showreel">
        <div className="container showreel-inner">
          <Reveal className="section-head">
            <span className="eyebrow"><FaPlay /> Featured Showreel</span>
            <h2 className="section-title">A reel of frames worth rewatching</h2>
            <p className="section-sub showreel-sub">
              Watch the showreel — pacing, color, and sound across every genre I
              love to edit.
            </p>
          </Reveal>
          <Reveal className="reel-frame has-video">
            {playing ? (
              <iframe
                ref={iframeRef}
                className="reel-video"
                src={EMBED}
                title="Jenson Eldho — Showreel"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="reel-poster"
                onClick={() => setPlaying(true)}
                aria-label="Play showreel"
              >
                <img
                  src={poster}
                  alt="Jenson Eldho — Showreel: Video Editing Portfolio"
                  loading="lazy"
                  onError={() => setThumbFallback(true)}
                />
              </button>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
