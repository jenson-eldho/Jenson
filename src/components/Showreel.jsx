import { FaPlay } from 'react-icons/fa'
import Reveal from './Reveal'

// Google Drive video embed (file shared as "Anyone with the link").
const SHOWREEL_EMBED = 'https://drive.google.com/file/d/1PSOeANK-0b_SDBE4QatQoxm6LTme-n9j/preview'

export default function Showreel() {
  return (
    <section id="showreel" className="section">
      <div className="showreel">
        <div className="container" style={{ paddingTop: 84, paddingBottom: 84 }}>
          <Reveal className="section-head">
            <span className="eyebrow"><FaPlay /> Featured Showreel</span>
            <h2 className="section-title">A reel of frames worth rewatching</h2>
            <p className="section-sub showreel-sub">
              Watch the showreel — pacing, color, and sound across every genre I
              love to edit.
            </p>
          </Reveal>
          <Reveal className="reel-frame has-video">
            <iframe
              className="reel-video"
              src={SHOWREEL_EMBED}
              title="Jenson Eldho — Showreel"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
