import Stripe from 'stripe'

// Null when the secret key isn't configured yet, so the app builds/runs before
// Stripe is set up. API routes check this and return a clear error if missing.
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null
