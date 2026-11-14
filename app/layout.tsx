import type { Metadata } from 'next'
import './fonts.css'   // Poppins and Dancing Script, hosted with the site (same Google files)
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'
import Analytics from '@/components/Analytics'
import { getNavigation, getSiteSettings } from '@/lib/sanity-queries'
import { getAreas, areaServed } from '@/lib/areas'
import { DEFAULT_SOCIAL, EMAIL } from '@/lib/contact-details'

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
  // Carried over from the Wix site, which proved ownership to Google with this
  // same tag. Without it the Search Console property un-verifies the moment DNS
  // moves — losing the migration reporting exactly when it is needed.
  verification: {
    google: '2nCx1IK9QFAJpFwskGrGd35gVj3Z3lu3BsyGw3wNs0E',
  },
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
}

// LocalBusiness structured data — helps Google show birth-hood in local / Maps results
function buildBusinessJsonLd(areas: string[], sameAs: string[]) {
  return {
  '@context': 'https://schema.org',
  // LocalBusiness is the type Google's local results read; HealthAndBeautyBusiness is the closer fit.
  '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: 'birth-hood',
  alternateName: 'Birth Hood',
  description:
    'Hypnobirthing, doula support and prenatal yoga in Leicester, the Midlands and online across the UK.',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.jpg`,
  image: `${SITE_URL}/og-image.jpg`,
  founder: {
    '@type': 'Person',
    name: 'Leanne',
    url: `${SITE_URL}/meet-leanne`,
  },
  email: EMAIL,
  telephone: '+447814504865',
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Leicester',
    addressRegion: 'Leicestershire',
    addressCountry: 'GB',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '67',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs,
  areaServed: areas,
  }
}

// Gives Google the site's name, so it can show "birth-hood" above the result.
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'birth-hood',
  alternateName: 'Birth Hood',
  url: SITE_URL,
  inLanguage: 'en-GB',
  publisher: { '@id': `${SITE_URL}/#business` },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // CMS-managed main menu (falls back to the built-in default inside Nav)
  const navItems = await getNavigation()
  // Coverage comes from Site Settings, so adding a town in the Studio puts it
  // straight into the location data Google reads.
  // The same social profiles the footer links to (Site Settings, else the defaults).
  const settings = await getSiteSettings()
  const social = { ...DEFAULT_SOCIAL, ...(settings?.social ?? {}) }
  const sameAs = [social.instagram, social.facebook, social.youtube, social.tiktok].filter(
    (u): u is string => Boolean(u),
  )
  const businessJsonLd = buildBusinessJsonLd(areaServed(await getAreas()), sameAs)
  return (
    <html lang="en">
      <head>
        {/* the hero headline's weights, fetched first (fonts are hosted with the site: app/fonts.css) */}
        <link rel="preload" href="/fonts/poppins-600-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/poppins-600i-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Nav items={navItems} />
        <ScrollRevealInit />
        <main className="site-main">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
