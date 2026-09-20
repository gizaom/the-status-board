# The Status Board

Paid weekday technical politics brief covering **federal + Florida**.

This repo currently ships **Phase A**: a marketing lander (hero, what you get, real Sep 18 brief sample with primary-source citation, pricing, waitlist, Stripe Checkout stub). Florida receipts / live board feed are **Phase B** and are not built yet.

## Stack

- Next.js App Router (TypeScript)
- Stripe Checkout (optional — stubbed until env keys are set)
- Waitlist POST stub (in-memory + optional webhook)

## Run locally

```bash
npm install
npm run build
npm run start
```

For development:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in when ready. **Do not invent secrets** — leave placeholders empty until you create real Stripe / webhook credentials.

| Variable | Purpose |
| --- | --- |
| `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (client; reserved for future Elements use) |
| `STRIPE_SECRET_KEY` | Stripe secret key — required for Checkout Session creation |
| `STRIPE_PRICE_ID` | Stripe Price ID for the $9/mo subscription |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret (Phase A unused; reserved) |
| `WAITLIST_WEBHOOK_URL` | Optional URL to forward waitlist signups (Zapier, Loops, etc.) |
| `NEXT_PUBLIC_SITE_URL` | Public site origin for Stripe success/cancel redirects |

### Waitlist (`POST /api/waitlist`)

- Accepts `{ "email": "…" }`.
- Always stubs persistence in memory and logs the signup.
- If `WAITLIST_WEBHOOK_URL` is set, also `POST`s the email to that URL.
- If unset, still returns **200** with a friendly message.

### Stripe Checkout (`POST /api/checkout`)

- When `STRIPE_SECRET_KEY` **and** `STRIPE_PRICE_ID` are set, creates a Stripe Checkout Session and returns `{ url }`.
- When unset, returns **503** JSON explaining Stripe is not configured (UI prompts the waitlist). Never invents keys.

## Phase A vs Phase B

| | Phase A (this lander) | Phase B (not yet) |
| --- | --- | --- |
| Marketing page | ✅ | — |
| Sample excerpt from a prior brief (Sep 18) with primary-source link | ✅ | — |
| Waitlist stub | ✅ | Harden / durable store |
| Stripe Checkout stub | ✅ | Live $9/mo |
| Florida receipts / live ticks | ❌ | Planned |
| Real brief delivery | ❌ | Planned |

## Design notes

The lander sample is a real excerpt from the Sep 18, 2026 weekday brief (H.R. 5334), with a visible Congress.gov citation — not placeholder status cards.

Editorial instrument board aesthetic: paper background, dark accents, serif headlines. No stock photography, no purple SaaS gradients.

## License

Private — all rights reserved.
