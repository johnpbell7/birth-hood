'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type Key = 'foundation' | 'balanced' | 'ultimate'
type Score = Record<Key, number>

// helper so the "in-between" answers are easy to read
const s = (foundation: number, balanced: number, ultimate: number): Score => ({ foundation, balanced, ultimate })

const QUESTIONS: { q: string; help?: string; options: { label: string; score: Score }[] }[] = [
  {
    q: 'How are you feeling about giving birth?',
    help: 'There are no wrong answers — this just helps gauge how much preparation would help.',
    options: [
      { label: "It's my first baby and I'm feeling anxious about it", score: s(0, 1, 3) },
      { label: "First baby, but I'm feeling fairly calm and curious", score: s(0, 3, 2) },
      { label: "I've birthed before and want solid support again", score: s(2, 2, 0) },
      { label: "I've birthed before and know exactly what I want", score: s(3, 1, 1) },
    ],
  },
  {
    q: 'How much preparation would you like with me before the birth?',
    options: [
      { label: 'Just the essentials — one good session', score: s(3, 0, 0) },
      { label: 'A couple of sessions so I feel really ready', score: s(1, 3, 0) },
      { label: 'Plenty of prep, with hypnobirthing built in', score: s(0, 2, 2) },
      { label: 'As much as possible — in-depth and tailored to me', score: s(0, 0, 3) },
    ],
  },
  {
    q: 'How much support would you like in the weeks after birth?',
    options: [
      { label: 'A visit and a couple of weeks of contact', score: s(3, 0, 0) },
      { label: 'Ongoing support for around six weeks', score: s(0, 3, 1) },
      { label: 'More than six weeks — but I might not need everything', score: s(0, 2, 2) },
      { label: 'Lots — several visits, a recovery kit and 12 weeks unlimited', score: s(0, 0, 3) },
    ],
  },
  {
    q: 'How hands-on would you like me to be through your pregnancy?',
    help: 'Things like check-ins between sessions, attending appointments and flexible timing.',
    options: [
      { label: 'Mainly around the birth itself', score: s(3, 0, 0) },
      { label: 'A few check-ins between our sessions', score: s(1, 3, 0) },
      { label: 'Regular contact throughout my pregnancy', score: s(0, 2, 2) },
      { label: 'Very involved — attend appointments with me, fully flexible', score: s(0, 0, 3) },
    ],
  },
  {
    q: 'Would you like equipment and resources included?',
    help: 'Such as a birth pool, TENS machine and the full online hub.',
    options: [
      { label: "Not needed — I'll sort my own if I want them", score: s(3, 0, 0) },
      { label: 'Pool & TENS included would be handy', score: s(0, 3, 1) },
      { label: 'Yes — and I want every digital resource too', score: s(0, 1, 3) },
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
const RANK: Record<Key, number> = { foundation: 0, balanced: 1, ultimate: 2 }

type Outcome = { winner: Key; stepUp: Key | null; totals: Score }

function tally(answers: number[]): Outcome {
  const totals: Score = { foundation: 0, balanced: 0, ultimate: 0 }
  answers.forEach((optIdx, qIdx) => {
    const sc = QUESTIONS[qIdx].options[optIdx].score
    totals.foundation += sc.foundation
    totals.balanced += sc.balanced
    totals.ultimate += sc.ultimate
  })
  // rank keys by score, breaking ties with ORDER priority
  const ranked = (['foundation', 'balanced', 'ultimate'] as Key[]).sort((a, b) => {
    if (totals[b] !== totals[a]) return totals[b] - totals[a]
    return ORDER.indexOf(a) - ORDER.indexOf(b)
  })
  const winner = ranked[0]
  // Only ever suggest stepping UP a tier — never down — and only when the
  // visitor's answers are genuinely close to that higher package (within ~20%).
  const stepUp =
    (['foundation', 'balanced', 'ultimate'] as Key[])
      .filter((k) => RANK[k] > RANK[winner] && totals[winner] > 0 && totals[k] >= totals[winner] * 0.8)
      .sort((a, b) => totals[b] - totals[a] || RANK[a] - RANK[b])[0] ?? null
  return { winner, stepUp, totals }
}

export default function PackageQuiz({ onClose, compact = false }: { onClose?: () => void; compact?: boolean }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const topRef = useRef<HTMLDivElement>(null)
  const mounted = useRef(false)

  const total = QUESTIONS.length
  const done = step >= total

  // Keep the quiz anchored in the same spot on every step so the page doesn't
  // jump as questions change height. Skip the very first render (don't yank the
  // page down on load).
  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return }
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [step])

  function choose(optIdx: number) {
    const next = [...answers]
    next[step] = optIdx
    setAnswers(next)
    setStep(step + 1)
  }
  function back() { if (step > 0) setStep(step - 1) }
  function restart() { setStep(0); setAnswers([]) }

  if (done) {
    const { winner, stepUp } = tally(answers)
    const r = RESULTS[winner]
    return (
      <div ref={topRef} className={`quiz${compact ? ' quiz--compact' : ''}`}>
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
            {stepUp && (
              <p className="quiz-result-runner">
                If you&apos;d like even more support, you&apos;re also close to <strong>{RESULTS[stepUp].name}</strong> ({RESULTS[stepUp].price}) —
                worth a look, and we can compare the two on your free call.
              </p>
            )}
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
    <div ref={topRef} className={`quiz quiz--asking${compact ? ' quiz--compact' : ''}`}>
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
