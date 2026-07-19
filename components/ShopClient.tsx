'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import type { ShopProduct } from '@/lib/sanity-queries'

export default function ShopClient({ products, demo = false }: { products: ShopProduct[]; demo?: boolean }) {
  const [cart, setCart] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)

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
              {p.imageUrl ? (
                <div className="shop-card-img">
                  <Image src={p.imageUrl} alt={p.title} fill style={{ objectFit: 'cover' }} sizes="(max-width:820px) 100vw, 33vw" />
                </div>
              ) : (
                <div className="shop-card-img shop-card-img--placeholder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" width="40" height="40">
                    <rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M4 19l5-5 4 3 3-3 4 4" />
                  </svg>
                </div>
              )}
              <div className="shop-card-body">
                <h3 className="shop-card-title">{p.title}</h3>
                {p.description && <p className="shop-card-desc">{p.description}</p>}
                <div className="shop-card-foot">
                  <span className="shop-price">£{(p.price || 0).toFixed(2)}</span>
                  <button
                    type="button"
                    className={`shop-add${inCart ? ' on' : ''}`}
                    onClick={() => (inCart ? remove(p._id) : add(p._id))}
                    aria-pressed={inCart}
                  >
                    {inCart ? '✓ In cart' : 'Add to cart'}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Floating cart footer — only shows once something is added */}
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
      </div>
    </>
  )
}
