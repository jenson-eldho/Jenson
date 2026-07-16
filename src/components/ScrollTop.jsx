import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { scrollToTop } from '../lib/lenis'

export default function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => scrollToTop()

  return (
    <button
      className={`scrolltop ${show ? 'show' : ''}`}
      onClick={toTop}
      aria-label="Scroll to top"
    >
      <FiArrowUp />
    </button>
  )
}
