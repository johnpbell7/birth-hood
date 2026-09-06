import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { getShopProductsByIds } from '@/lib/sanity-queries'

export const dynamic = 'force-dynamic'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.birth-hood.co.uk'

export async function POST(req: NextRequest) {
  if (!stripe) {
    return NextResponse.json({ error: 'The shop is not set up yet.' }, { status: 503 })
  }
  try {
    const { ids } = (await req.json()) as { ids?: string[] }
    if (!Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'No items selected.' }, { status: 400 })
    }

    // Fetch authoritative prices from Sanity — never trust prices from the client.
    const all = await getShopProductsByIds(ids)
    // A product with no price set would become a £0 line item — Stripe accepts
    // that and the webhook would then email out the files for nothing. Drop
    // them rather than sell them, so an unpriced product in the Studio can
    // never give the shop away.
    const products = all.filter((p) => typeof p.price === 'number' && p.price > 0)
    if (products.length === 0) {
      return NextResponse.json({ error: 'Selected items are unavailable.' }, { status: 400 })
    }

    const line_items = products.map((p) => ({
      quantity: 1,
      price_data: {
        currency: 'gbp',
        unit_amount: Math.round((p.price ?? 0) * 100),
        product_data: {
          name: p.title,
          ...(p.description ? { description: p.description } : {}),
        },
      },
    }))

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      // The webhook uses this to know what was bought and deliver the files.
      metadata: { productIds: products.map((p) => p._id).join(',') },
      success_url: `${SITE_URL}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/shop?cancelled=1`,
      // Collect an email so we can deliver the downloads.
      customer_creation: 'if_required',
      billing_address_collection: 'auto',
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json({ error: 'Could not start checkout. Please try again.' }, { status: 500 })
  }
}
