import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import ShopClient from '@/components/ShopClient'
import { getShopProducts } from '@/lib/sanity-queries'
import { PLACEHOLDER_PRODUCTS } from '@/lib/shop-placeholders'

export const metadata: Metadata = {
  title: 'Shop — Resources',
  description: 'Downloadable birth resources from birth-hood — guides, MP3s and tools to support your pregnancy, birth and beyond. Instant download after secure checkout.',
}

export default async function ShopPage() {
  const real = await getShopProducts()
  // Until real products are added in the Studio, show sample resources so the
  // shop is populated (checkout stays disabled in this demo mode).
  const demo = real.length === 0
  const products = demo ? PLACEHOLDER_PRODUCTS : real

  return (
    <>
      <PageHero
        eyebrow="Downloadable resources"
        title={<>The <em>Shop</em></>}
        subtitle="Handpicked guides, audio and tools to support your pregnancy, birth and beyond. Choose what you need — you'll receive your downloads by email straight after secure checkout."
        img1={{ src: '/images/hypnobirthing-class.jpg', alt: 'birth-hood resources' }}
        img2={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        hideFab
      />

      <MarqueeStrip />

      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Resources</div>
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
