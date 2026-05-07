import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, Abril_Fatface } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

// Self-hosted via next/font — no Google DNS lookup, no render-blocking @import,
// no layout shift. Fonts are inlined as CSS variables on <html>.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const abril = Abril_Fatface({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-abril',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'birth-hood — education · support · community',
    template: '%s | birth-hood',
  },
  description:
    'Hypnobirthing, Doula support and Prenatal Yoga from Leanne in Leicester, Midlands and online UK-wide. Helping you feel powerful, prepared and genuinely excited for birth.',
  keywords: ['hypnobirthing', 'doula', 'birth doula', 'prenatal yoga', 'birth trauma', 'Leicester', 'UK'],
  openGraph: {
    siteName: 'birth-hood',
    locale: 'en_GB',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${abril.variable}`}>
      <body>
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
