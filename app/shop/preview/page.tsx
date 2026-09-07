import type { Metadata } from 'next'
import Link from 'next/link'
import MarqueeStrip from '@/components/MarqueeStrip'
import CmsPageHero from '@/components/CmsPageHero'
import ShopClient from '@/components/ShopClient'
import { getShopProducts } from '@/lib/sanity-queries'

// The shop as it will look on launch day, so Leanne can check the cards while
// /shop still shows the "Coming soon" holding page to everyone else. Checkout
// is switched off here — a preview should never take real money.
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Shop preview',
  // Kept out of search and out of the sitemap. It is unlisted rather than
  // password-protected: nothing here is secret, the download files are still
  // behind Stripe, and a password would be one more thing to lose.
  robots: { index: false, follow: false },
}

export default async function ShopPreviewPage() {
  const products = await getShopProducts()

  return (
    <>
      <div className="preview-bar">
        <strong>Shop preview</strong>
        <span>
          Only people with this link can see it — <Link href="/shop">/shop</Link> still
          shows the Coming soon page. Checkout is switched off.
        </span>
      </div>

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
          {products.length === 0 ? (
            <p>No products found in the Studio.</p>
          ) : (
            /* demo mode: the products are the real ones, but the checkout
               button reports back instead of creating a Stripe session. */
            <ShopClient products={products} demo />
          )}
        </div>
      </section>
    </>
  )
}
