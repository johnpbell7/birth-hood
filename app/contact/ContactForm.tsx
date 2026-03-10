'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      dueDate: (form.elements.namedItem('dueDate') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error ?? 'Something went wrong')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="reveal reveal-d2" style={{ padding: '3rem', textAlign: 'center', background: 'var(--pink-ultra)', borderRadius: '3px', border: '1px solid rgba(232,123,195,0.3)' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌸</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.8rem' }}>
          Message sent!
        </h2>
        <p style={{ color: 'var(--grey-mid)', fontWeight: 300 }}>
          Thank you for getting in touch. Leanne will be in touch within 24–48 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="reveal reveal-d2">
      <div className="section-label">Send a message</div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div>
          <label className="form-label" htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="First & last name" className="form-input" required />
        </div>
        <div>
          <label className="form-label" htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" className="form-input" required />
        </div>
        <div>
          <label className="form-label" htmlFor="service">How can Leanne help?</label>
          <select id="service" name="service" className="form-select">
            <option value="">Select a service...</option>
            <option>Hypnobirthing Course</option>
            <option>Birth Doula</option>
            <option>Postnatal Doula</option>
            <option>Virtual Doula</option>
            <option>Prenatal Yoga</option>
            <option>Birth Trauma Support</option>
            <option>General enquiry</option>
          </select>
        </div>
        <div>
          <label className="form-label" htmlFor="dueDate">Estimated due date (optional)</label>
          <input id="dueDate" name="dueDate" type="month" className="form-input" />
        </div>
        <div>
          <label className="form-label" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell Leanne a little about you and what you're looking for..."
            className="form-textarea"
            required
          />
        </div>

        {status === 'error' && (
          <p style={{ color: '#c0392b', fontSize: '0.85rem', background: '#fff5f5', padding: '0.75rem 1rem', borderRadius: '3px' }}>
            {errorMsg}
          </p>
        )}

        <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ marginTop: '0.5rem' }}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        <p style={{ fontSize: '0.75rem', color: 'var(--grey-mid)', fontWeight: 300 }}>
          By submitting this form you agree to being contacted by Leanne at birth-hood. Your data is never shared.
        </p>
      </form>
    </div>
  )
}
