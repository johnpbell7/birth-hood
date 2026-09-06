# Shop — how to add products

Everything about the shop is edited in the Studio under **Shop — Paid Resources**.
Nothing needs setting up in Stripe: prices are read from Sanity at checkout, so
whatever you type in the Price field is what the customer is charged.

## Adding an individual resource

Every product form has the same fields, in this order:

1. **Type** — Individual resource
2. **Title** — e.g. Birth-hood Birth Plan Tool Kit
3. **Short description** — the selling line on the card, e.g. "Because your
   birth plan should cover more than Plan A."
4. **Cover image** — optional, but the cards look much better with one
5. **Price (£)** — e.g. `12.50`
6. **Files the buyer downloads** — this is where the actual PDF or MP3 goes.
   **You can add as many as you want.** Four MP3s means four files here, and the
   buyer gets four separate download links. Nothing needs zipping.
7. **SKU** — optional, near the bottom. Just a code for your own records that
   buyers never see. Leave it blank if you don't want one.

## Adding a bundle

Same form, one difference: **you don't upload any files.**

1. **Type** — Bundle. (A new box appears further down.)
2. **Title**, **Short description**, **Cover image**, **Price** — as above.
3. **Files the buyer downloads** — leave this empty.
4. **What is in this bundle** — pick the individual resources from a list. No
   typing, no re-uploading. Their files are sent to the buyer automatically.

So for the Hypnobirthing Bundle you'd tick Birth Prep Handbook, Partner Script,
Birth Planning Guide, Meditation Scripts, Weekly Agenda, Colouring Affirmations
and the four MP3s — and the buyer receives every one of those files.

**This is why each file is only ever uploaded once.** The Fourth Trimester Guide
is in four different bundles; it exists as one product, and the four bundles
point at it. Change the file later and every bundle updates at once.

You don't need to write out what's in a bundle in the description either — the
shop card builds that list itself from what you ticked.

Only put something in **Files the buyer downloads** on a bundle if it exists
*only* in that bundle and isn't sold on its own.

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
