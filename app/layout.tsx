import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'
import { getNavigation } from '@/lib/sanity-queries'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.birth-hood.co.uk'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'birth-hood — education · support · community',
    template: '%s | birth-hood',
  },
  description:
    'Hypnobirthing, doula support and pregnancy yoga from Leanne in Leicestershire and online UK-wide. Feel powerful, prepared and genuinely excited for birth.',
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
  email: 'leanne@birth-hood.co.uk',
  telephone: '+447814504865',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Leicester',
    addressRegion: 'Leicestershire',
    addressCountry: 'GB',
  },
  areaServed: [
    'North West Leicestershire', 'Leicestershire', 'Derbyshire', 'Warwickshire', 'Nottinghamshire',
    'Coalville', 'Ashby-de-la-Zouch', 'Loughborough', 'Leicester', 'Swadlincote', 'Nuneaton',
    'Nottingham', 'Derby', 'Midlands', 'United Kingdom (online)',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '67',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.instagram.com/birthhooduk',
    'https://www.youtube.com/@birthhooduk',
    'https://calendly.com/birthhood/free-consultation',
  ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // CMS-managed main menu (falls back to the built-in default inside Nav)
  const navItems = await getNavigation()
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Nav items={navItems} />
        <ScrollRevealInit />
        <main className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
