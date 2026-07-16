import { FaYoutube, FaInstagram, FaLinkedinIn, FaBehance } from 'react-icons/fa'
import { SiGoogledrive } from 'react-icons/si'

const DRIVE_URL = 'https://drive.google.com/drive/folders/1F2YVh0emk5rKyzZfyq59B2xFz9cOc4OY?usp=sharing'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <span className="logo-mark">JE</span>
              Jenson Eldho
            </a>
            <p>
              Professional video editor crafting cinematic stories for brands,
              artists, and creators worldwide.
            </p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <h5>Services</h5>
              <a href="#video-editing">Video Editing</a>
              <a href="#motion-graphics">Motion Graphics</a>
              <a href="#color-grading">Color Grading</a>
              <a href="#short-form-content">Short-form</a>
            </div>
            <div className="footer-col">
              <h5>Explore</h5>
              <a href="#work">Work</a>
              <a href="#showreel">Showreel</a>
              <a href="#skills">Skills</a>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jensoneldho@gmail.com&su=Project%20Inquiry&body=Hi%20Jenson,%0A%0AI%20found%20your%20portfolio%20and%20I'm%20interested%20in%20discussing%20a%20video%20editing%20project.%0A%0ALooking%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards,"
                target="_blank"
                rel="noopener noreferrer"
              >jensoneldho@gmail.com</a>
              <a href="#contact">Start a project</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Jenson Eldho. All rights reserved.</span>
          <div className="socials">
            <a href="https://youtube.com/@jensoneldho904?si=udlKvJRbkPaQoNVz" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://www.instagram.com/jenson_eldho?igsh=MWdrOHgyNXpqMG1kZg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/jenson-eldho-7a3097342?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.behance.net/jensoneldho" target="_blank" rel="noopener noreferrer" aria-label="Behance"><FaBehance /></a>
            <a href={DRIVE_URL} target="_blank" rel="noopener noreferrer" aria-label="Google Drive portfolio"><SiGoogledrive /></a>
          </div>
        </div>
        <p className="footer-credit">
          Designed &amp; Developed by{' '}
          <a
            href="https://www.instagram.com/basil_areeckal_/"
            target="_blank"
            rel="noopener noreferrer"
          >Basil</a>
        </p>
      </div>
    </footer>
  )
}
