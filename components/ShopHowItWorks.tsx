import Link from 'next/link'

/**
 * A short welcome and "how it works" for the shop page, in Leanne's voice.
 * Every step is what the checkout does (app/api/checkout, stripe-webhook, download):
 * Stripe's payment page, links by email, personal links that last 7 days.
 * `open` is false while the shop is on "coming soon", so it says "will".
 */
export default function ShopHowItWorks({ open }: { open: boolean }) {
  const lead = { fontWeight: 600, color: 'var(--black)' } as const
  return (
    <div className="wrap shop-soon" style={open ? undefined : { marginTop: '3.5rem' }}>
      <h2 className="shop-soon-title">
        {open ? <>How it <em>works</em></> : <>How it will <em>work</em></>}
      </h2>
      <p className="shop-soon-body">
        {open
          ? 'Everything here is made by birth-hood to help you feel prepared for pregnancy, birth and the weeks that follow. The guides and audio are digital downloads, and if you’d rather talk things through, my 1-2-1 Power Hour sessions are booked with me directly.'
          : 'When the shop opens, everything in it will be made by birth-hood to help you feel prepared for pregnancy, birth and the weeks that follow. The guides and audio will be digital downloads, and if you’d rather talk things through, you can book a 1-2-1 session with me.'}
      </p>
      <p className="shop-soon-body">
        <strong style={lead}>Choose.</strong> Add the guides and audio you&apos;d like to your cart.
      </p>
      <p className="shop-soon-body">
        <strong style={lead}>Pay.</strong> Checkout is on Stripe&apos;s secure payment page.
      </p>
      <p className="shop-soon-body">
        <strong style={lead}>Check your email.</strong> Your download links arrive by email straight after you pay. If they&apos;re not there, have a look in your spam folder.
      </p>
      <p className="shop-soon-body">
        <strong style={lead}>Save your files.</strong> The links are personal to you and last for 7 days. If one stops working, just reply to the email and I&apos;ll send a fresh one.
      </p>
      {open && (
        <p className="shop-soon-body">
          Power Hour sessions are different: you book a time with me through my calendar, rather than adding them to your cart.
        </p>
      )}
      <p className="shop-soon-body">
        Anything else? <Link href="/contact" style={{ color: 'var(--pink-deep)' }}>Get in touch</Link>, and you&apos;ll find the details on digital products in my <Link href="/terms" style={{ color: 'var(--pink-deep)' }}>terms</Link>.
      </p>
    </div>
  )
}
