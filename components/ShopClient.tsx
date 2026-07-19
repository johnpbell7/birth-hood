'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import type { ShopProduct } from '@/lib/sanity-queries'

export default function ShopClient({ products }: { products: ShopProduct[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const total = useMemo(
    () => products.filter((p) => selected.has(p._id)).reduce((s, p) => s + (p.price || 0), 0),
    [products, selected],
  )

  const checkout = async () => {
    if (selected.size === 0) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: [...selected] }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
        setLoading(false)
      }
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <div className="shop-grid">
        {products.map((p) => {
          const on = selected.has(p._id)
          return (
            <div key={p._id} className={`shop-card${on ? ' selected' : ''}`}>
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
                    className={`shop-add${on ? ' on' : ''}`}
                    onClick={() => toggle(p._id)}
                    aria-pressed={on}
                  >
                    {on ? '✓ Added' : 'Add'}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {selected.size > 0 && (
        <div className="shop-bar">
          <div className="shop-bar-inner">
            <span className="shop-bar-total">
              {selected.size} item{selected.size > 1 ? 's' : ''} · <strong>£{total.toFixed(2)}</strong>
            </span>
            <button type="button" className="btn-primary" onClick={checkout} disabled={loading} style={{ background: 'var(--pink)', color: 'var(--black)' }}>
              {loading ? 'Redirecting…' : 'Checkout securely'}
            </button>
          </div>
          {error && <p className="shop-bar-error">{error}</p>}
        </div>
      )}
    </>
  )
}
