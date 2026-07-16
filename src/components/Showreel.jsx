import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import Reveal from './Reveal'

// Direct, hosted video file (MP4/WebM served over https with byte-range support).
// Paste your hosted showreel URL here — e.g. a CDN / object-storage link.
const SHOWREEL_VIDEO_URL = 'REPLACE_WITH_YOUR_HOSTED_MP4_URL'
const POSTER = `${import.meta.env.BASE_URL}images/showreel-thumbnail.jpg`

export default function Showreel() {
  const [playing, setPlaying] = useState(false)

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
              <video
                className="reel-video"
                src={SHOWREEL_VIDEO_URL}
                poster={POSTER}
                controls
                autoPlay
                playsInline
                preload="metadata"
                title="Jenson Eldho — Showreel"
              />
            ) : (
              <button
                type="button"
                className="reel-poster"
                onClick={() => setPlaying(true)}
                aria-label="Play showreel"
              >
                <img src={POSTER} alt="Jenson Eldho — Showreel: Video Editing Portfolio" loading="lazy" />
              </button>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
