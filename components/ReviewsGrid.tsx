'use client'

import { useState } from 'react'
import type { Review } from '@/lib/reviews'
import ReviewCard from './ReviewCard'

/** How many show before the reader asks for more. */
const INITIAL = 6

export default function ReviewsGrid({ reviews }: { reviews: Review[] }) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? reviews : reviews.slice(0, INITIAL)
  const remaining = reviews.length - INITIAL

  return (
    <>
      <div className={`reviews-track${expanded ? '' : ' reviews-track--collapsed'}`}>
        {shown.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>

      {remaining > 0 && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            type="button"
            className="btn-primary"
            style={{ background: 'var(--pink)', color: 'var(--black)', border: 0, cursor: 'pointer', font: 'inherit', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show fewer reviews' : 'Read more reviews'}
          </button>
        </div>
      )}
    </>
  )
}
