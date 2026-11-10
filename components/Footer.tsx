import Link from 'next/link'
import Image from 'next/image'
import { getSiteSettings } from '@/lib/sanity-queries'
import { DEFAULT_SOCIAL, EMAIL, PHONE_DIAL, PHONE_DISPLAY, WHATSAPP } from '@/lib/contact-details'

const JB_SITE = 'https://jbdesignagency.co.uk/'
const JB_ENQUIRY =
  'mailto:jb.designagency89@gmail.com?subject=' +
  encodeURIComponent('New website enquiry (via Birth Hood)') +
  '&body=' +
  encodeURIComponent("Hi John,\r\n\r\nI saw the Birth Hood site and I'd like to talk about a website for my business.\r\n\r\n")

function JbMark() {
  return (
    <svg className="jb-credit-mark" viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="jbcT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff58a" /><stop offset="1" stopColor="#ffe94a" /></linearGradient>
        <linearGradient id="jbcS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f5c400" /><stop offset="1" stopColor="#e2a400" /></linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="45" height="45" rx="10.5" fill="url(#jbcS)" stroke="#18181a" strokeWidth="1.6" />
      <rect x="5" y="3.6" width="38" height="36.4" rx="8" fill="url(#jbcT)" stroke="#e9b400" strokeWidth="0.8" />
      <path d="M37.9 29.29Q37.9 32.2 35.87 33.9Q33.83 35.61 30.2 35.61H17.4Q13.73 35.61 11.52 33.64Q9.3 31.67 9.3 27.84H14.92Q14.92 29.29 15.52 30.03Q16.11 30.78 17.24 30.78Q18.26 30.78 18.82 30.12Q19.38 29.46 19.38 28.2V12.39H29.83Q33.37 12.39 35.37 14.01Q37.37 15.63 37.37 18.41Q37.37 20.46 36.3 21.82Q35.22 23.17 33.44 23.7Q35.45 24.13 36.68 25.7Q37.9 27.27 37.9 29.29ZM25.04 21.78H28.74Q30.13 21.78 30.87 21.17Q31.62 20.56 31.62 19.37Q31.62 18.18 30.87 17.55Q30.13 16.92 28.74 16.92H25.04ZM32.18 28.53Q32.18 27.31 31.37 26.61Q30.56 25.92 29.14 25.92H25.04V31.04H29.2Q30.63 31.04 31.4 30.4Q32.18 29.75 32.18 28.53Z" fill="#18181a" transform="translate(24 21.8) scale(0.92) translate(-23.6 -24)" />
    </svg>
  )
}

const DEFAULT_TAGLINE = (
  <>
    Education · Support · Community<br />
    Hypnobirthing, Doula support and Yoga from<br />
    Leicester, Midlands and online UK-wide.
  </>
)

export default async function Footer() {
  const settings = await getSiteSettings()
  const social = { ...DEFAULT_SOCIAL, ...(settings?.social ?? {}) }
  const tagline = settings?.tagline ?? null

  return (
    <footer id="footer">
      <div className="footer-top">
        <div>
          <Link href="/" className="footer-logo">
            <Image src="/images/logo.jpg" alt="birth-hood" width={110} height={110} className="footer-logo-image" />
          </Link>
          <p className="footer-tagline">
            {tagline || DEFAULT_TAGLINE}
          </p>
          {/* Contact details here as well as on the contact page: the footer
              is where people look when they have scrolled to the bottom
              wanting to get in touch, and it is on every page. */}
          <ul className="footer-contact">
            <li>
              <a href={`mailto:${EMAIL}`}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_DIAL}`}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 5 12.8 19.8 19.8 0 0 1 1.9 4.2 2 2 0 0 1 3.9 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2Z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
                  <path d="M12.04 2.5C6.79 2.5 2.52 6.77 2.52 12.02c0 1.68.44 3.32 1.28 4.77L2.5 21.5l4.84-1.27a9.47 9.47 0 0 0 4.7 1.2h.01c5.25 0 9.52-4.27 9.52-9.52a9.46 9.46 0 0 0-2.79-6.73 9.46 9.46 0 0 0-6.74-2.79zm0 17.36h-.01a7.9 7.9 0 0 1-4.02-1.1l-.29-.17-2.99.78.8-2.91-.19-.3a7.88 7.88 0 0 1-1.21-4.21c0-4.36 3.55-7.91 7.92-7.91a7.86 7.86 0 0 1 5.59 2.32 7.86 7.86 0 0 1 2.32 5.6c0 4.36-3.55 7.9-7.92 7.9z" />
                </svg>
                Message on WhatsApp
              </a>
            </li>
          </ul>

          <div className="footer-social">
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            )}
            {social.facebook && (
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            )}
            {social.youtube && (
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 17" fill="currentColor">
                  <path d="M23.5 2.5S23.2.7 22.4.1C21.5-.7 20.5-.7 20-.6 16.7-.5 12-.5 12-.5S7.3-.5 4-.6C3.5-.7 2.5-.7 1.6.1.8.7.5 2.5.5 2.5S.1 4.7.1 7v2.1c0 2.3.4 4.5.4 4.5s.3 1.8 1.1 2.4c.9.8 2.1.7 2.6.8C5.9 17 12 17 12 17s4.7 0 8-.1c.5-.1 1.5-.1 2.4-.9.8-.6 1.1-2.4 1.1-2.4S24 11.4 24 9V6.9C24 4.7 23.5 2.5 23.5 2.5zM9.7 11.3V5.2l6.5 3.1-6.5 3z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><Link href="/hypnobirthing">Hypnobirthing</Link></li>
            <li><Link href="/birth-doula">Birth Doula</Link></li>
            <li><Link href="/doula">Doula Services</Link></li>
            <li><Link href="/virtual-doula">Antenatal &amp; Virtual Doula</Link></li>
            <li><Link href="/postnatal-doula">Postnatal Doula</Link></li>
            <li><Link href="/yoga">Yoga</Link></li>
            <li><Link href="/birth-trauma">Birth Trauma</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Resources</div>
          <ul className="footer-links">
            <li><Link href="/meet-leanne">Meet Leanne</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/podcast">Podcast</Link></li>
            <li><Link href="/freebies">Freebies</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/course-info">Courses</Link></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Connect</div>
          <ul className="footer-links">
            <li><Link href="/contact">Get in Touch</Link></li>
            <li><a href="https://calendly.com/birthhood/free-consultation" target="_blank" rel="noopener noreferrer">Book a Consultation</a></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/links">All Links</Link></li>
            <li><Link href="/terms">T&Cs</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} birth-hood. All rights reserved.</span>
        <span>Made with ♥ for birthing people everywhere</span>
      </div>

      {/* Slim JB Design Agency banner, the same one as on the cricket club
          site. A followed link to John's site (it's the backlink); email only,
          no phone number. */}
      <div className="jb-credit">
        <div className="jb-credit-inner">
          <a href={JB_SITE} target="_blank" rel="noopener" className="jb-credit-brand">
            <JbMark />
            <span>Designed &amp; built by <b>JB Design Agency</b></span>
          </a>
          <div className="jb-credit-cta">
            <span>Like this site? Let&rsquo;s build yours.</span>
            <a href={JB_ENQUIRY} className="jb-credit-btn">
              Start a project
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
