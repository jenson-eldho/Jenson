import { useEffect } from 'react'
import 'lenis/dist/lenis.css'
import { initLenis, destroyLenis, scrollToHash } from './lib/lenis'
import Loader from './components/Loader'
import ScrollTop from './components/ScrollTop'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Showreel from './components/Showreel'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Toolkit from './components/Toolkit'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Statistics from './components/Statistics'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    initLenis()

    // Route every in-page anchor (nav, footer, hero/about/contact buttons, etc.)
    // through Lenis instead of the browser's native jump.
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const hash = a.getAttribute('href')
      if (!scrollToHash(hash)) return
      e.preventDefault()
      // Re-trigger the service-card highlight (the `:target` glow) via a class,
      // since Lenis scrolling doesn't change the URL fragment.
      const el = hash !== '#top' ? document.querySelector(hash) : null
      if (el && el.classList.contains('service')) {
        el.classList.remove('svc-highlight')
        void el.offsetWidth
        el.classList.add('svc-highlight')
      }
    }

    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
      destroyLenis()
    }
  }, [])

  return (
    <>
      <Loader />
      <Nav />
      <main>
        <Hero />
        <Showreel />
        <About />
        <Services />
        <Projects />
        <Toolkit />
        <Process />
        <Testimonials />
        <Statistics />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
