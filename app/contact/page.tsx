import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import ContactForm from './ContactForm'
import { cmsOrStatic } from '@/lib/cms-page'

// Leanne's mobile in international form, as wa.me requires (no leading zero,
// no spaces). Same number as the tel: link above it.
const WHATSAPP = 'https://wa.me/447814504865'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Contact Leanne at birth-hood',
  description:
    'Get in touch with Leanne at birth-hood in NW Leicestershire — a question, a booking, or just a chat about what support might suit you best.',
}

function ContactPageStatic() {
  return (
    <>
      <CmsPageHero
        page="contact"
        title={<>Get in <em>Touch</em></>}
        subtitle="For enquiries, please contact me directly via this page. I'll get back to you ASAP! I can't wait to help you prepare for your birth, knowing your rights, your options, and feeling like you did everything you could to prepare to start parenthood positively."
        img1={{ src: '/images/leanne-ball-doorway-118.jpg', alt: 'Leanne' }}
      />

      <MarqueeStrip />

      <section className="section-pad">
        <div className="wrap">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'start' }}>
            {/* Contact info */}
            <div className="reveal">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <a
                  href="mailto:leanne@birth-hood.co.uk"
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
                    <div style={{ color: 'var(--pink-deep)', fontSize: '0.9rem', fontWeight: 300 }}>leanne@birth-hood.co.uk</div>
                  </div>
                </a>

                {/* Phone and WhatsApp share one box, split down the middle.
                    An anchor cannot be nested inside another anchor, so the
                    box is a plain div holding two separate links. */}
                <div className="contact-split">
                  <a href="tel:07814504865" className="contact-split-main">
                    <div style={{ width: '44px', height: '44px', background: 'var(--pink-pale)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pink-deep)', flexShrink: 0 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: '0.88rem', marginBottom: '0.2rem' }}>Phone</div>
                      <div style={{ color: 'var(--pink-deep)', fontSize: '0.9rem', fontWeight: 300 }}>07814 504865</div>
                    </div>
                  </a>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-wa"
                  >
                    {/* The WhatsApp glyph — filled, not a line icon, because
                        it is a logo and has to be recognisable at 26px. */}
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z"/>
                      <path d="M12.04 2.5C6.79 2.5 2.52 6.77 2.52 12.02c0 1.68.44 3.32 1.28 4.77L2.5 21.5l4.84-1.27a9.47 9.47 0 0 0 4.7 1.2h.01c5.25 0 9.52-4.27 9.52-9.52a9.46 9.46 0 0 0-2.79-6.73 9.46 9.46 0 0 0-6.74-2.79zm0 17.36h-.01a7.9 7.9 0 0 1-4.02-1.1l-.29-.17-2.99.78.8-2.91-.19-.3a7.88 7.88 0 0 1-1.21-4.21c0-4.36 3.55-7.91 7.92-7.91a7.86 7.86 0 0 1 5.59 2.32 7.86 7.86 0 0 1 2.32 5.6c0 4.36-3.55 7.9-7.92 7.9z"/>
                    </svg>
                    <span>Message me on WhatsApp</span>
                  </a>
                </div>

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
                  href="https://www.facebook.com/Birthhooduk"
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
                    <div style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', fontWeight: 300 }}>NW Leicestershire · Online UK-wide</div>
                  </div>
                </div>
              </div>

              <div style={{ background: 'var(--pink-ultra)', padding: '2rem', borderRadius: '3px', border: '1px solid rgba(254,127,204,0.3)' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--grey-mid)', fontWeight: 300, lineHeight: 1.7, marginBottom: '1.2rem' }}>
                  Skip the form and book a free consultation call straight into my diary.
                </p>
                <a href="https://calendly.com/birthhood/free-consultation" target="_blank" rel="noopener noreferrer" className="btn-primary">
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

export default async function ContactPage() {
  return cmsOrStatic('contact', <ContactPageStatic />)
}
