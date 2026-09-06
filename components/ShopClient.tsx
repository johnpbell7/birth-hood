'use client'

import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import type { ShopProduct } from '@/lib/sanity-queries'

export default function ShopClient({ products, demo = false }: { products: ShopProduct[]; demo?: boolean }) {
  const [cart, setCart] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)
  // Only portal to <body> after mount (document isn't available during SSR).
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const add = (id: string) => {
    setNotice(null)
    setCart((prev) => new Set(prev).add(id))
  }
  const remove = (id: string) =>
    setCart((prev) => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })

  const cartItems = useMemo(() => products.filter((p) => cart.has(p._id)), [products, cart])
  const total = useMemo(() => cartItems.reduce((s, p) => s + (p.price || 0), 0), [cartItems])

  const checkout = async () => {
    if (cart.size === 0) return
    if (demo) {
      setNotice('These are sample resources — checkout goes live once the shop is switched on. 🌸')
      return
    }
    setLoading(true)
    setNotice(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: [...cart] }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else {
        setNotice(data.error || 'Something went wrong. Please try again.')
        setLoading(false)
      }
    } catch {
      setNotice('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <div className="shop-grid">
        {products.map((p) => {
          const inCart = cart.has(p._id)
          return (
            <div key={p._id} className={`shop-card${inCart ? ' selected' : ''}`}>
              <div className="shop-ph">
                {/* Only the two tags that say something the title doesn't.
                    The PDF/Audio tags were removed — they were derived from the
                    file, so Leanne couldn't control them anyway. */}
                {p.bookingUrl ? (
                  <span className="shop-tag shop-tag--book">1-2-1 session</span>
                ) : p.kind === 'bundle' ? (
                  <span className="shop-tag shop-tag--bundle">
                    Bundle{p.fileCount ? ` · ${p.fileCount} files` : ''}
                  </span>
                ) : null}
                {p.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.imageUrl} alt={p.title} className="shop-ph-photo" />
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" width="42" height="42" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M4 19l5-5 4 3 3-3 4 4" />
                    </svg>
                    <span className="shop-ph-label">Placeholder</span>
                  </>
                )}
              </div>
              <div className="shop-card-body">
                <h3 className="shop-card-title">{p.title}</h3>
                {p.description && <p className="shop-card-desc">{p.description}</p>}
                {p.kind === 'bundle' && p.includes && p.includes.length > 0 && (
                  <ul className="shop-bundle-list">
                    {p.includes.map((item) => (
                      <li key={item._id}>{item.title}</li>
                    ))}
                  </ul>
                )}
                <div className="shop-card-foot">
                  {/* Leanne sets the prices; until then, say so rather than
                      showing £0.00. */}
                  <span className="shop-price">
                    {p.price > 0 ? `£${p.price.toFixed(2)}` : 'Price coming soon'}
                  </span>
                  {p.bookingUrl ? (
                    <a
                      className="shop-add shop-add--book"
                      href={p.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.bookingLabel || 'Book now'}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className={`shop-add${inCart ? ' on' : ''}`}
                      onClick={() => (inCart ? remove(p._id) : add(p._id))}
                      aria-pressed={inCart}
                    >
                      {inCart ? '✓ In cart' : 'Add to cart'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Sticky cart footer — rendered into <body> via a portal so it's always
          fixed to the viewport (no ancestor transform can trap it), staying at
          the bottom of the screen while you scroll. Only shows once you add. */}
      {mounted &&
        createPortal(
          <div className={`cart-bar${cart.size > 0 ? ' open' : ''}`} aria-hidden={cart.size === 0}>
            <div className="cart-bar-inner">
              <div className="cart-bar-summary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20" aria-hidden="true">
                  <circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" />
                  <path d="M2 3h2.2l2.1 12.3a1 1 0 0 0 1 .8h9.4a1 1 0 0 0 1-.79L20 7H6" />
                </svg>
                <span><strong>{cart.size}</strong> {cart.size === 1 ? 'resource' : 'resources'}</span>
                <span className="cart-bar-total">£{total.toFixed(2)}</span>
              </div>

              <div className="cart-bar-chips">
                {cartItems.map((p) => (
                  <button key={p._id} className="cart-chip" onClick={() => remove(p._id)} title="Remove">
                    {p.title} <span aria-hidden="true">×</span>
                  </button>
                ))}
              </div>

              <button type="button" className="cart-checkout" onClick={checkout} disabled={loading}>
                {loading ? 'Redirecting…' : 'Checkout securely →'}
              </button>
            </div>
            {notice && <p className="cart-bar-notice">{notice}</p>}
          </div>,
          document.body,
        )}
    </>
  )
}
