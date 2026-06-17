import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.birth-hood.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'birth-hood — education · support · community',
    template: '%s | birth-hood',
  },
  description:
    'Hypnobirthing, Doula support and Prenatal Yoga from Leanne in Leicester, Midlands and online UK-wide. Helping you feel powerful, prepared and genuinely excited for birth.',
  keywords: ['hypnobirthing', 'doula', 'birth doula', 'prenatal yoga', 'birth trauma', 'Leicester', 'UK'],
  openGraph: {
    type: 'website',
    siteName: 'birth-hood',
    locale: 'en_GB',
    url: SITE_URL,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'birth-hood — hypnobirthing, doula & prenatal yoga' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: SITE_URL },
}

// LocalBusiness structured data — helps Google show birth-hood in local / Maps results
const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'birth-hood',
  description:
    'Hypnobirthing, doula support and prenatal yoga in Leicester, the Midlands and online across the UK.',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  email: 'hello@birth-hood.co.uk',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Leicester',
    addressRegion: 'Leicestershire',
    addressCountry: 'GB',
  },
  areaServed: ['Leicester', 'Leicestershire', 'North West Leicestershire', 'Midlands', 'United Kingdom (online)'],
  sameAs: [
    'https://www.instagram.com/birthhooduk',
    'https://www.youtube.com/@birthhooduk',
    'https://calendly.com/birthhood',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Nav />
        <ScrollRevealInit />
        <main className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
