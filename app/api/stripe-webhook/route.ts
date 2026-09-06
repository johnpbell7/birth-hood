import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { getShopProductsByIds } from '@/lib/sanity-queries'
import { signDownload, isDownloadConfigured } from '@/lib/download-token'

export const dynamic = 'force-dynamic'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.birth-hood.co.uk'

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!stripe || !webhookSecret) {
    return NextResponse.json({ error: 'Stripe not configured.' }, { status: 503 })
  }

  // Stripe signature verification needs the raw, unparsed body.
  const rawBody = await req.text()
  const sig = req.headers.get('stripe-signature') ?? ''

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    try {
      await fulfil(session)
    } catch (err) {
      console.error('Fulfilment error:', err)
      // Return 200 anyway so Stripe doesn't retry forever; the error is logged.
    }
  }

  return NextResponse.json({ received: true })
}

async function fulfil(session: Stripe.Checkout.Session) {
  const ids = (session.metadata?.productIds ?? '').split(',').filter(Boolean)
  const email = session.customer_details?.email
  if (!ids.length || !email) return

  const products = await getShopProductsByIds(ids)
  if (!products.length) return

  // A bundle delivers every file it contains, each as its own signed link.
  const links = products.flatMap((p) =>
    p.files.map((f, idx) => {
      const token = isDownloadConfigured() ? signDownload(p._id, email, idx) : ''
      const url = token ? `${SITE_URL}/api/download?token=${encodeURIComponent(token)}` : f.url
      const name = f.label || f.name || p.title
      return { title: p.files.length > 1 ? `${p.title} — ${name}` : p.title, url }
    }),
  )

  const resend = new Resend(process.env.RESEND_API_KEY)

  const rows = links
    .map(
      (l) => `
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f7d4ee;">
          <strong>${l.title}</strong><br/>
          <a href="${l.url}" style="color:#c955a8;font-weight:600;">Download →</a>
        </td>
      </tr>`,
    )
    .join('')

  // Delivery email to the buyer
  await resend.emails.send({
    from: 'birth-hood <noreply@birth-hood.co.uk>',
    to: email,
    subject: 'Your birth-hood downloads 🌸',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#c955a8;">Thank you for your purchase!</h2>
        <p>Your download${links.length > 1 ? 's are' : ' is'} ready. Just click the link${links.length > 1 ? 's' : ''} below:</p>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        <p style="margin-top:16px;color:#888;font-size:13px;">These links are personal to you and expire in 7 days. If a link stops working, just reply and I'll send a fresh one.</p>
        <p>Warmly,<br/>Leanne<br/><em>birth-hood</em></p>
        <hr style="margin:24px 0;border:none;border-top:1px solid #f7d4ee;" />
        <p style="color:#888;font-size:12px;">birth-hood · Leicester, England · <a href="https://www.birth-hood.co.uk" style="color:#c955a8;">birth-hood.co.uk</a></p>
      </div>`,
  })

  // Notification to Leanne
  const to = process.env.CONTACT_EMAIL_TO ?? 'leanne@birth-hood.co.uk'
  await resend.emails.send({
    from: 'birth-hood shop <noreply@birth-hood.co.uk>',
    to,
    subject: `New shop order — ${products.map((p) => p.title).join(', ')}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
        <h2 style="color:#c955a8;">New shop order</h2>
        <p><strong>Buyer:</strong> ${email}</p>
        <p><strong>Items:</strong></p>
        <ul>${products.map((p) => `<li>${p.title} — £${(p.price ?? 0).toFixed(2)}</li>`).join('')}</ul>
        <p style="color:#888;font-size:12px;">Full details in your Stripe dashboard.</p>
      </div>`,
  })
}
