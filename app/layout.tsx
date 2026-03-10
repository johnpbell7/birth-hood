import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: '116px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
