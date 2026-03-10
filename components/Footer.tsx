import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="footer-logo">birth<span>-hood</span></Link>
          <p className="footer-tagline">
            Education · Support · Community<br />
            Hypnobirthing, Doula support and Prenatal Yoga from<br />
            Leicester, Midlands and online UK-wide.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/birthhooduk" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="http://www.facebook.com/Birthhooduk" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@birthhooduk" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 17" fill="currentColor">
                <path d="M23.5 2.5S23.2.7 22.4.1C21.5-.7 20.5-.7 20-.6 16.7-.5 12-.5 12-.5S7.3-.5 4-.6C3.5-.7 2.5-.7 1.6.1.8.7.5 2.5.5 2.5S.1 4.7.1 7v2.1c0 2.3.4 4.5.4 4.5s.3 1.8 1.1 2.4c.9.8 2.1.7 2.6.8C5.9 17 12 17 12 17s4.7 0 8-.1c.5-.1 1.5-.1 2.4-.9.8-.6 1.1-2.4 1.1-2.4S24 11.4 24 9V6.9C24 4.7 23.5 2.5 23.5 2.5zM9.7 11.3V5.2l6.5 3.1-6.5 3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><Link href="/hypnobirthing">Hypnobirthing</Link></li>
            <li><Link href="/birth-doula">Birth Doula</Link></li>
            <li><Link href="/doula">Doula Services</Link></li>
            <li><Link href="/virtual-doula">Virtual Doula</Link></li>
            <li><Link href="/yoga">Prenatal Yoga</Link></li>
            <li><Link href="/birth-trauma">Birth Trauma</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Resources</div>
          <ul className="footer-links">
            <li><Link href="/meet-leanne">Meet Leanne</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/freebies">Freebies</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/masterclass">Masterclass</Link></li>
            <li><Link href="/course-info">Course Info</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Connect</div>
          <ul className="footer-links">
            <li><Link href="/contact">Get in Touch</Link></li>
            <li><a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer">Book a Consultation</a></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/terms">T&Cs</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} birth-hood. All rights reserved.</span>
        <span>Made with ♥ for birthing people everywhere</span>
      </div>
    </footer>
  )
}
