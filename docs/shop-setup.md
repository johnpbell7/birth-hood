# Shop — how to add products

Everything about the shop is edited in the Studio under **Shop — Paid Resources**.
Nothing needs setting up in Stripe: prices are read from Sanity at checkout, so
whatever you type in the Price field is what the customer is charged.

## Adding an individual resource

1. **Type**: Individual resource
2. **SKU**: your own code, e.g. `BH-BIRTHPREP`. Not shown to buyers.
3. **Title** and **Short description** — the description shows on the card.
4. **Cover image** — optional but the cards look much better with one.
5. **Price (£)** — e.g. `12.50`
6. **Download files** — add the PDF, MP3s, whatever the buyer gets. Add as many
   as you like; each arrives as its own download link, so a set of MP3s does not
   need zipping. Give each a **Name shown to the buyer** if the filename isn't
   friendly.
7. **Show in shop** — untick to hide it without deleting.

## Adding a bundle

1. **Type**: Bundle
2. Fill in SKU, title, description, image and price as above.
3. **Bundle contains** — pick the individual resources it includes. Their files
   are delivered automatically, so **do not upload the same files again**. This
   matters for the MP3s: upload each one once, on its own product, and every
   bundle that contains it just points at it.
4. Only add something to **Download files** on a bundle if it is exclusive to
   that bundle and doesn't exist as its own product.

The shop card shows a "Bundle" tag, the number of files, and a list of what's
inside.

## What the buyer gets

On payment, Stripe tells the site what was bought and the buyer is emailed one
signed download link per file. Links are valid for 7 days and are tied to their
email address. The files themselves are never exposed as public URLs.

## Switching the shop on

The shop needs three environment variables in Vercel before checkout works:

| Variable | Where it comes from |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe → Developers → API keys → **secret** key (`sk_live_…`) |
| `STRIPE_WEBHOOK_SECRET` | Stripe → Developers → Webhooks → your endpoint → signing secret (`whsec_…`) |
| `DOWNLOAD_SIGNING_SECRET` | any long random string — `openssl rand -hex 32` |

The webhook endpoint to add in Stripe is:

```
https://www.birth-hood.co.uk/api/stripe-webhook
```

listening for **checkout.session.completed**.

`RESEND_API_KEY` must also be set, since that's what sends the delivery email.

Until the Stripe keys are set, product cards still show but checkout returns
"The shop is not set up yet" — the rest of the site is unaffected.

## A note on file sizes

Sanity stores the files. Large MP3s are fine, but they count towards the
project's asset storage and bandwidth, so keep an eye on the Sanity usage page
if the audio library grows. Exporting MP3s at a sensible bitrate (128kbps mono
is plenty for spoken relaxation tracks) keeps them a fraction of the size with
no audible difference.
