import type { Metadata } from 'next'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import ShopClient from '@/components/ShopClient'
import { getShopProducts, getSiteSettings } from '@/lib/sanity-queries'
import { PLACEHOLDER_PRODUCTS } from '@/lib/shop-placeholders'

// Hero wording/photos come from Sanity when set, so pick up edits within a minute.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Birth Resources Shop — Guides & MP3s',
  description:
    'Downloadable birth guides and relaxation MP3s from birth-hood, plus 1-2-1 Power Hour sessions for when you just need to talk it through with someone.',
}

export default async function ShopPage() {
  const [real, settings] = await Promise.all([getShopProducts(), getSiteSettings()])

  // Leanne can hide the shop from Site Settings while she finishes it off.
  // The page stays live — it just says the shop is on its way.
  if (settings?.shopComingSoon) {
    return (
      <>
        <CmsPageHero
          page="shop"
          title={<>The <em>Shop</em></>}
          subtitle="Downloadable guides, audio and tools to support your pregnancy, birth and beyond."
          img1={{ src: '/images/tote-bag-33.jpg', alt: 'Resources' }}
          img2={{ src: '/images/relaxation-oils-69.jpg', alt: 'Relaxation' }}
          hideFab
        />

        <MarqueeStrip />

        <section className="section-pad">
          <div className="wrap shop-soon">
            <span className="shop-soon-tag">Coming soon</span>
            <h2 className="shop-soon-title">
              The shop is nearly <em>ready</em>
            </h2>
            <p className="shop-soon-body">
              I&apos;m putting the finishing touches to the guides, relaxation audio
              and bundles. They&apos;ll be here shortly — hypnobirthing handbooks,
              birth planning tools, partner guides and the full birth-hood
              relaxation set.
            </p>
            <p className="shop-soon-body">
              In the meantime, there are free resources to get you started, or you
              can book a session and we&apos;ll talk it through properly.
            </p>
            <div className="shop-soon-actions">
              <Link href="/freebies" className="btn-primary">Free resources</Link>
              <Link href="/contact" className="btn-outline">Get in touch</Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  // Until real products are added in the Studio, show sample resources so the
  // shop is populated (checkout stays disabled in this demo mode).
  const demo = real.length === 0
  const products = demo ? PLACEHOLDER_PRODUCTS : real

  return (
    <>
      <CmsPageHero
        page="shop"
        title={<>The <em>Shop</em></>}
        subtitle="Handpicked guides, audio and tools to support your pregnancy, birth and beyond. Choose what you need — you'll receive your downloads by email straight after secure checkout."
        img1={{ src: '/images/tote-bag-33.jpg', alt: 'Resources' }}
        img2={{ src: '/images/relaxation-oils-69.jpg', alt: 'Relaxation' }}
        hideFab
      />

      <MarqueeStrip />

      <section className="section-pad">
        <div className="wrap">
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Choose your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>resources</em>
          </h2>

          {demo && (
            <p style={{ color: 'var(--grey-light)', fontSize: '0.82rem', fontWeight: 300, marginBottom: '1.5rem' }}>
              ✨ Sample resources shown below — real products &amp; checkout go live once the shop is switched on.
            </p>
          )}
          <ShopClient products={products} demo={demo} />
        </div>
      </section>
    </>
  )
}
