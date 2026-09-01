# TENFOUR — Trailer Rentals

Production-ready landing page for TenFour LLC trailer rentals.

- Next.js + TypeScript + Tailwind CSS
- Dual CTA: `tel:+18605531034` (860-553-1034) and “Request a rental” form
- Fleet SKUs: DV-53, DV-48, FB-48, FB-53
- Sample-labeled rates and yard counts
- Sticky 72px nav, figures bar, search strip, fleet cards, yard table, how-it-works, 3-step booking, footer
- Form persists to `data/inquiries.jsonl`; optional email via `RESEND_API_KEY` + `INQUIRY_TO_EMAIL`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Environment (optional)

Create `.env` with:

```
RESEND_API_KEY=...
INQUIRY_TO_EMAIL=ops@example.com
```

Email is optional; persistence always writes to `data/inquiries.jsonl`.
