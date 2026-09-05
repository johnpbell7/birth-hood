'use client'

import { useState } from 'react'
import type { Review } from '@/lib/reviews'

/** Reviews longer than this are collapsed behind a "Read more". */
const COLLAPSE_AT = 320

export default function ReviewCard({ review }: { review: Review }) {
  const [open, setOpen] = useState(false)
  const paragraphs = review.text.split('\n\n').map((p) => p.trim()).filter(Boolean)
  const isLong = review.text.length > COLLAPSE_AT

  // Collapsed view: enough of the opening to be worth reading, cut on a word.
  const preview = isLong
    ? review.text.slice(0, COLLAPSE_AT).replace(/\s+\S*$/, '') + '…'
    : review.text

  return (
    <div className="review-card">
      <div className="review-service">{review.service}</div>

      {isLong && !open ? (
        <p className="review-text">{preview}</p>
      ) : (
        paragraphs.map((p, i) => (
          <p key={i} className="review-text">{p}</p>
        ))
      )}

      {isLong && (
        <button type="button" className="review-more" onClick={() => setOpen(!open)}>
          {open ? 'Read less' : 'Read more'}
        </button>
      )}

      <div className="review-author">
        {review.when ? `${review.name} · ${review.when}` : review.name}
        <span className="review-stars">★★★★★</span>
      </div>
    </div>
  )
}
