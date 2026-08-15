'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import PackageQuiz from './PackageQuiz'

export default function PackageQuizModal({
  label = 'Find your package',
  className = 'btn-primary',
}: {
  label?: string
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
      </button>

      {mounted && open && createPortal(
        <div className="quiz-modal-overlay" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="Package finder quiz">
          <div className="quiz-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="quiz-modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <div className="quiz-modal-head">
              <div className="quiz-modal-eyebrow">Package finder</div>
              <h2 className="quiz-modal-title">Which doula package is right for you?</h2>
              <p className="quiz-modal-sub">Answer a few quick questions and I&apos;ll suggest your best-fit package.</p>
            </div>
            <PackageQuiz compact onClose={() => setOpen(false)} />
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
