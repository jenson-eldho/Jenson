import Reveal from './Reveal'

export default function Showreel() {
  return (
    <section id="showreel" className="section">
      <div className="showreel">
        <div className="container" style={{ paddingTop: 84, paddingBottom: 84 }}>
          <Reveal className="section-head">
            <span className="eyebrow">▶ Featured Showreel</span>
            <h2 className="section-title">A reel of frames worth rewatching</h2>
            <p className="section-sub showreel-sub">
              Two minutes of my best cuts — pacing, color, and sound across every
              genre I love to edit.
            </p>
          </Reveal>
          <Reveal className="reel-frame">
            <img src="https://picsum.photos/seed/showreel-main/1280/720" alt="Showreel" loading="lazy" />
            <div className="reel-play">
              <button className="play-btn" aria-label="Play showreel">▶</button>
            </div>
            <div className="reel-chips">
              <span className="glass">4K · 60FPS</span>
              <span className="glass">02:14</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
