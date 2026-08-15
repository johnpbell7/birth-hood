'use client'

import { useState } from 'react'
import Link from 'next/link'

type Key = 'foundation' | 'balanced' | 'ultimate'
type Score = Record<Key, number>

const QUESTIONS: { q: string; help?: string; options: { label: string; score: Score }[] }[] = [
  {
    q: 'Is this your first baby?',
    help: 'First-time parents often value extra preparation.',
    options: [
      { label: 'Yes — my first baby', score: { foundation: 0, balanced: 1, ultimate: 2 } },
      { label: "No — I've given birth before", score: { foundation: 2, balanced: 1, ultimate: 0 } },
    ],
  },
  {
    q: 'How much birth preparation would you like beforehand?',
    options: [
      { label: 'Just the essentials — one solid session', score: { foundation: 2, balanced: 0, ultimate: 0 } },
      { label: 'A good amount — a couple of sessions + hypnobirthing', score: { foundation: 0, balanced: 2, ultimate: 1 } },
      { label: 'As much as possible — in-depth, personalised prep', score: { foundation: 0, balanced: 1, ultimate: 2 } },
    ],
  },
  {
    q: 'Would you like equipment like a birth pool & TENS machine included?',
    options: [
      { label: "Not essential — I'll sort my own if needed", score: { foundation: 2, balanced: 0, ultimate: 0 } },
      { label: 'Yes please — included would be ideal', score: { foundation: 0, balanced: 2, ultimate: 1 } },
    ],
  },
  {
    q: 'How much support would you like after your baby arrives?',
    options: [
      { label: 'A visit and a couple of weeks of contact', score: { foundation: 2, balanced: 0, ultimate: 0 } },
      { label: 'Ongoing support for around 6 weeks', score: { foundation: 0, balanced: 2, ultimate: 1 } },
      { label: 'Lots — several visits, a recovery kit & 12 weeks unlimited', score: { foundation: 0, balanced: 0, ultimate: 2 } },
    ],
  },
  {
    q: 'Would you like me to attend appointments with you and keep sessions flexible?',
    options: [
      { label: "Not needed", score: { foundation: 1, balanced: 1, ultimate: 0 } },
      { label: 'That would be reassuring sometimes', score: { foundation: 0, balanced: 1, ultimate: 1 } },
      { label: 'Yes — accompaniment & flexibility matter to me', score: { foundation: 0, balanced: 0, ultimate: 2 } },
    ],
  },
  {
    q: 'Which investment level feels most comfortable?',
    help: 'Payment plans are available on every package.',
    options: [
      { label: 'Around £1,095 — essential support', score: { foundation: 2, balanced: 0, ultimate: 0 } },
      { label: 'Around £1,495 — enhanced support', score: { foundation: 0, balanced: 2, ultimate: 0 } },
      { label: '£2,000 — the complete, comprehensive experience', score: { foundation: 0, balanced: 0, ultimate: 2 } },
    ],
  },
]

const RESULTS: Record<Key, { name: string; price: string; tag: string; blurb: string; highlights: string[] }> = {
  foundation: {
    name: 'Foundation', price: '£1,095', tag: 'Essential',
    blurb: 'Streamlined, essential doula support — everything you need for a calm, well-supported birth without the extras.',
    highlights: ['1 antenatal session + birth planning', 'On-call from 39 weeks', 'Full continuous in-person birth support', '1 postnatal visit + 2 weeks aftercare'],
  },
  balanced: {
    name: 'Balanced', price: '£1,495', tag: 'Enhanced',
    blurb: 'Our most popular choice — more preparation, birth pool & TENS included, and longer aftercare. A brilliant all-rounder.',
    highlights: ['2 antenatal sessions + hypnobirthing hub', 'Birth pool & TENS machine included', 'On-call from 10 days before your due date', 'Ongoing support for 6 weeks'],
  },
  ultimate: {
    name: 'Ultimate', price: '£2,000', tag: 'Comprehensive',
    blurb: 'The complete experience — maximum preparation, access, flexibility and aftercare, tailored closely around you.',
    highlights: ['4 antenatal sessions + appointment accompaniment', '3 postnatal visits + bespoke recovery kit', 'On-call from 38 weeks', 'Unlimited support for 12 weeks'],
  },
}

const ORDER: Key[] = ['balanced', 'ultimate', 'foundation'] // tie-break priority

function tally(answers: number[]): Key {
  const totals: Score = { foundation: 0, balanced: 0, ultimate: 0 }
  answers.forEach((optIdx, qIdx) => {
    const s = QUESTIONS[qIdx].options[optIdx].score
    totals.foundation += s.foundation
    totals.balanced += s.balanced
    totals.ultimate += s.ultimate
  })
  let best = ORDER[0]
  ORDER.forEach((k) => { if (totals[k] > totals[best]) best = k })
  return best
}

export default function PackageQuiz({ onClose, compact = false }: { onClose?: () => void; compact?: boolean }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])

  const total = QUESTIONS.length
  const done = step >= total

  function choose(optIdx: number) {
    const next = [...answers]
    next[step] = optIdx
    setAnswers(next)
    setStep(step + 1)
  }
  function back() { if (step > 0) setStep(step - 1) }
  function restart() { setStep(0); setAnswers([]) }

  if (done) {
    const key = tally(answers)
    const r = RESULTS[key]
    return (
      <div className={`quiz${compact ? ' quiz--compact' : ''}`}>
        <div className="quiz-result">
          <div className="quiz-result-eyebrow">Your best match</div>
          <div className="quiz-result-card">
            <div className="quiz-result-head">
              <span className="quiz-result-name">{r.name}</span>
              <span className="quiz-result-price">{r.price}</span>
            </div>
            <div className="quiz-result-tag">{r.tag} support</div>
            <p className="quiz-result-blurb">{r.blurb}</p>
            <ul className="quiz-result-list">
              {r.highlights.map((h) => (
                <li key={h}><span className="quiz-tick">✓</span>{h}</li>
              ))}
            </ul>
            <div className="quiz-result-actions">
              <a href="https://calendly.com/birthhood" target="_blank" rel="noopener noreferrer" className="btn-primary quiz-btn">
                Book a free consultation
              </a>
              <Link href="/birth-doula" className="btn-outline quiz-btn" onClick={onClose}>
                See full package details
              </Link>
            </div>
          </div>
          <p className="quiz-result-note">
            This is a friendly guide, not a rule — every birth is unique. We&apos;ll confirm the perfect fit together on your free call.
          </p>
          <button type="button" className="quiz-restart" onClick={restart}>↻ Retake the quiz</button>
        </div>
      </div>
    )
  }

  const cur = QUESTIONS[step]
  return (
    <div className={`quiz${compact ? ' quiz--compact' : ''}`}>
      <div className="quiz-progress">
        <div className="quiz-progress-bar" style={{ width: `${(step / total) * 100}%` }} />
      </div>
      <div className="quiz-step-count">Question {step + 1} of {total}</div>
      <h3 className="quiz-q">{cur.q}</h3>
      {cur.help && <p className="quiz-help">{cur.help}</p>}
      <div className="quiz-options">
        {cur.options.map((o, i) => (
          <button key={o.label} type="button" className="quiz-option" onClick={() => choose(i)}>
            <span>{o.label}</span>
            <span className="quiz-option-arrow">→</span>
          </button>
        ))}
      </div>
      {step > 0 && (
        <button type="button" className="quiz-back" onClick={back}>← Back</button>
      )}
    </div>
  )
}
