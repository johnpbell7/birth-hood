import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import PackageQuiz from '@/components/PackageQuiz'
import PackageComparison from '@/components/PackageComparison'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { cmsOrStatic } from '@/lib/cms-page'

export const metadata: Metadata = {
  title: 'Find Your Doula Package',
  description: 'Not sure which birth doula package is right for you? Take the quick 1-minute quiz and get a personalised recommendation — Foundation, Balanced or Ultimate.',
}

const SITE = 'https://www.birth-hood.co.uk'
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Doula Services', item: `${SITE}/doula` },
    { '@type': 'ListItem', position: 3, name: 'Find Your Package', item: `${SITE}/find-your-package` },
  ],
}

function FindYourPackageStatic() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Package finder"
        title={<>Find your <em>perfect fit</em></>}
        subtitle="Answer a few quick questions about your birth, your preparation and the aftercare you'd love — and I'll suggest the doula package that fits you best. Takes about a minute."
        img1={{ src: '/images/doula-support.jpg', alt: 'Doula support' }}
        img2={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
      />

      {/* QUIZ */}
      <section className="section-pad">
        <div className="wrap" style={{ maxWidth: '760px' }}>
          <PackageQuiz />
        </div>
      </section>

      {/* FULL COMPARISON */}
      <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
        <div className="wrap">
          <div className="section-label">Prefer to compare yourself?</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '0.8rem', lineHeight: 1.1 }}>
            The full <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>comparison</em>
          </h2>
          <p style={{ color: 'var(--grey-mid)', fontSize: '1rem', lineHeight: 1.6, fontWeight: 300, maxWidth: '640px' }}>
            Every package includes continuous in-person support throughout labour and birth. Here&apos;s exactly what changes between them.
          </p>
          <PackageComparison />
          <p style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/birth-doula" style={{ color: 'var(--pink-deep)', fontWeight: 500 }}>
              See full birth doula details →
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        heading="Still not sure? Let's chat it through"
        body="Book a free, no-pressure consultation and we'll find the right level of support for your birth together."
        href="https://calendly.com/birthhood"
        label="Book Free Consultation"
      />
    </>
  )
}

export default async function FindYourPackagePage() {
  return cmsOrStatic('find-your-package', <FindYourPackageStatic />)
}
