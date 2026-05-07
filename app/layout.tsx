import type { Metadata } from 'next'
import { Questrial, Work_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

// Self-hosted via next/font — no Google DNS lookup, no render-blocking @import,
// no layout shift. Fonts are inlined as CSS variables on <html>.
// Matches the brand: Questrial for headings, Work Sans for body.
const questrial = Questrial({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-questrial',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-work-sans',
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
    <html lang="en" className={`${questrial.variable} ${workSans.variable}`}>
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
