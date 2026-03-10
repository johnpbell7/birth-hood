import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Get in touch with Leanne at birth-hood. Whether you have a question, want to make a booking or just want to say hello — she'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-eyebrow">Let&apos;s talk</div>
          <h1 className="page-title">Get in <em>Touch</em></h1>
          <p className="page-subtitle">
            Whether you have a question, want to make a booking or just want to say hello —
            Leanne would love to hear from you.
          </p>
        </div>
      </section>

      <MarqueeStrip />

      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'start' }}>
            {/* Contact info */}
            <div className="reveal">
              <div className="section-label">Ways to connect</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <a
                  href="mailto:hello@birth-hood.co.uk"
                  style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', textDecoration: 'none', color: 'var(--black)', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '3px', transition: 'border-color 0.3s, transform 0.3s' }}
                  className="contact-link"
                >
                  <div style={{ width: '44px', height: '44px', background: 'var(--pink-pale)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pink-deep)', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '0.88rem', marginBottom: '0.2rem' }}>Email</div>
                    <div style={{ color: 'var(--pink-deep)', fontSize: '0.9rem', fontWeight: 300 }}>hello@birth-hood.co.uk</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/birthhooduk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', textDecoration: 'none', color: 'var(--black)', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '3px', transition: 'border-color 0.3s, transform 0.3s' }}
                >
                  <div style={{ width: '44px', height: '44px', background: 'var(--pink-pale)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pink-deep)', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '0.88rem', marginBottom: '0.2rem' }}>Instagram</div>
                    <div style={{ color: 'var(--pink-deep)', fontSize: '0.9rem', fontWeight: 300 }}>@birthhooduk</div>
                  </div>
                </a>

                <a
                  href="http://www.facebook.com/Birthhooduk"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', textDecoration: 'none', color: 'var(--black)', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '3px', transition: 'border-color 0.3s, transform 0.3s' }}
                >
                  <div style={{ width: '44px', height: '44px', background: 'var(--pink-pale)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pink-deep)', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '0.88rem', marginBottom: '0.2rem' }}>Facebook</div>
                    <div style={{ color: 'var(--pink-deep)', fontSize: '0.9rem', fontWeight: 300 }}>Birthhooduk</div>
                  </div>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '3px' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--pink-pale)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pink-deep)', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: '0.88rem', marginBottom: '0.2rem' }}>Location</div>
                    <div style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', fontWeight: 300 }}>Leicester, England · Online UK-wide</div>
                  </div>
                </div>
              </div>

              <div style={{ background: 'var(--pink-ultra)', padding: '2rem', borderRadius: '3px', border: '1px solid rgba(232,123,195,0.3)' }}>
                <div className="section-label">Or book directly</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.7, marginBottom: '1.2rem' }}>
                  Skip the form and book a free 20-minute consultation call straight into Leanne&apos;s diary.
                </p>
                <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Book Free Consultation
                </a>
              </div>
            </div>

            {/* Contact form — client component */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
