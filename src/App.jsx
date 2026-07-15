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
