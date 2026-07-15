import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import Reveal from './Reveal'

// Google Drive video embed (file shared as "Anyone with the link").
const SHOWREEL_EMBED = 'https://drive.google.com/file/d/1PSOeANK-0b_SDBE4QatQoxm6LTme-n9j/preview'
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
              <iframe
                className="reel-video"
                src={`${SHOWREEL_EMBED}?autoplay=1`}
                title="Jenson Eldho — Showreel"
                allow="autoplay; fullscreen"
                allowFullScreen
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
