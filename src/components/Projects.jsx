import { useState, useEffect } from 'react'
import { FaPlay } from 'react-icons/fa'
import Reveal from './Reveal'
import { projects } from '../data/content'

// Project card = clickable button showing the YouTube thumbnail. No iframe is
// created here; the video only loads inside the modal when a card is clicked.
function ProjectCard({ p, i, onPlay }) {
  // Prefer a custom cover image, then fall back to YouTube thumbnails (maxres → hq)
  // if the cover is missing, so the card never shows a broken image.
  const sources = [
    ...(p.cover ? [`${import.meta.env.BASE_URL}${p.cover}`] : []),
    `https://img.youtube.com/vi/${p.youtubeId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${p.youtubeId}/hqdefault.jpg`,
  ]
  const [srcIdx, setSrcIdx] = useState(0)
  const thumb = sources[Math.min(srcIdx, sources.length - 1)]

  return (
    <Reveal
      as="button"
      type="button"
      variant="scale"
      className="project"
      onClick={() => onPlay(p)}
      aria-label={`Play ${p.title}`}
      style={{ transitionDelay: `${i * 60}ms` }}
    >
      <span className="project-thumb">
        <img src={thumb} alt={p.title} loading="lazy" onError={() => setSrcIdx((n) => n + 1)} />
        <span className="play-sm"><FaPlay /></span>
      </span>
      <span className="project-info">
        <strong>{p.title}</strong>
        <span>{p.cat}</span>
      </span>
    </Reveal>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  // While the modal is open: close on Escape and lock background scroll (which
  // preserves the exact scroll position when the modal closes).
  useEffect(() => {
    if (!active) return
    const onKey = (e) => { if (e.key === 'Escape') setActive(null) }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [active])

  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-sub">
            A snapshot of recent edits across documentary, music, brand, and social.
          </p>
        </Reveal>
        <div className="grid grid-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} onPlay={setActive} />
          ))}
        </div>
      </div>

      {active && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div className="project-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setActive(null)}
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="project-modal-frame">
              <iframe
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
