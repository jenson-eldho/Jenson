import { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'
import { statsBig } from '../data/content'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Counts 0 → target with an easeOutCubic curve when `run` becomes true (once).
function CountUp({ target, suffix, run, duration = 1800 }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!run) return
    if (prefersReduced()) { setValue(target); return }

    let raf
    let startTime
    const ease = (t) => 1 - Math.pow(1 - t, 3)
    const tick = (now) => {
      if (startTime === undefined) startTime = now
      const p = Math.min((now - startTime) / duration, 1)
      setValue(Math.round(ease(p) * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, duration])

  return <>{value}{suffix}</>
}

export default function Statistics() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section className="section section-tight">
      <div className="container">
        <div ref={ref} className={`stats-band reveal reveal-up ${inView ? 'is-visible' : ''}`}>
          {statsBig.map((s) => (
            <div className="stat-cell" key={s.label}>
              <div className="stat-big">
                <CountUp target={s.target} suffix={s.suffix} run={inView} />
              </div>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
