import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank you',
  robots: { index: false, follow: false },
}

export default function ShopSuccessPage() {
  return (
    <section className="section-pad" style={{ background: 'var(--pink-ultra)' }}>
      <div className="wrap" style={{ maxWidth: '620px', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌸</div>
        <div className="section-label" style={{ justifyContent: 'center' }}>Payment received</div>
        <h1 style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, lineHeight: 1.1, margin: '0.5rem 0 1.5rem' }}>
          Thank you for your <em style={{ fontStyle: 'italic', color: 'var(--pink-deep)' }}>purchase</em>
        </h1>
        <p style={{ color: 'var(--grey-mid)', fontSize: '1rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '2rem' }}>
          Your download links are on their way to your inbox — please check your email (and your spam
          folder, just in case). The links are personal to you and stay active for 7 days.
        </p>
        <p style={{ color: 'var(--grey-light)', fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 300, marginBottom: '2rem' }}>
          Didn&apos;t receive anything within a few minutes? Just reply to your receipt email or get in
          touch and I&apos;ll sort it straight away.
        </p>
        <Link href="/shop" className="btn-primary" style={{ background: 'var(--pink)', color: 'var(--black)' }}>
          Back to the shop
        </Link>
      </div>
    </section>
  )
}
