import { useState } from 'react'
import { FaStar, FaInstagram } from 'react-icons/fa'
import Reveal from './Reveal'
import { testimonials } from '../data/content'

// Client photo with graceful fallback to the initials monogram if it fails to load.
function ClientAvatar({ image, initials }) {
  const [failed, setFailed] = useState(false)
  const src = image ? `${import.meta.env.BASE_URL}${image}` : null

  if (!src || failed) {
    return <span className="testi-logo" aria-hidden="true">{initials}</span>
  }
  return (
    <img
      className="testi-avatar"
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Kind words</span>
          <h2 className="section-title">What clients say</h2>
        </Reveal>
        <div className="grid grid-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} className="card testi" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="testi-stars">
                {Array.from({ length: 5 }).map((_, k) => <FaStar key={k} />)}
              </div>
              <p>“{t.quote}”</p>
              <div className="testi-user">
                <ClientAvatar image={t.image} initials={t.initials} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                  <a
                    className="testi-ig"
                    href={t.url || `https://www.instagram.com/${t.handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram /> @{t.handle}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
