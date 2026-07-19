import type { Metadata } from 'next'
import MarqueeStrip from '@/components/MarqueeStrip'
import PageHero from '@/components/PageHero'
import ShopClient from '@/components/ShopClient'
import { getShopProducts } from '@/lib/sanity-queries'

export const metadata: Metadata = {
  title: 'Shop — Resources',
  description: 'Downloadable birth resources from birth-hood — guides, MP3s and tools to support your pregnancy, birth and beyond. Instant download after secure checkout.',
}

export default async function ShopPage() {
  const products = await getShopProducts()

  return (
    <>
      <PageHero
        eyebrow="Downloadable resources"
        title={<>The <em>Shop</em></>}
        subtitle="Handpicked guides, audio and tools to support your pregnancy, birth and beyond. Choose what you need — you'll receive your downloads by email straight after secure checkout."
        img1={{ src: '/images/hypnobirthing-class.jpg', alt: 'birth-hood resources' }}
        img2={{ src: '/images/leanne-portrait.jpg', alt: 'Leanne' }}
        ctaLabel="Browse resources"
        ctaHref="/shop"
      />

      <MarqueeStrip />

      <section className="section-pad">
        <div className="wrap">
          <div className="section-label">Resources</div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 600, marginBottom: '2.5rem', lineHeight: 1.1 }}>
            Choose your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>resources</em>
          </h2>

          {products.length > 0 ? (
            <ShopClient products={products} />
          ) : (
            <div className="card card-pink" style={{ textAlign: 'center', padding: '3rem 2rem', maxWidth: '520px', margin: '0 auto' }}>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem', fontWeight: 500, marginBottom: '0.6rem' }}>
                Resources coming soon
              </h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.92rem', lineHeight: 1.6, fontWeight: 300 }}>
                New downloadable resources are on their way. Check back shortly, or{' '}
                <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--pink-deep)', fontWeight: 500 }}>
                  book a free consultation
                </a>{' '}
                in the meantime.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
