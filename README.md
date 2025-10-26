# Quick Gaza Donations (Vercel Ready)

React + Stripe + Bitcoin donation app ready for Vercel.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Add your keys:
   - In `StripePayment.tsx`, replace `YOUR_STRIPE_PUBLISHABLE_KEY_HERE`.
   - In `BitcoinPayment.tsx`, replace `YOUR_BITCOIN_ADDRESS_HERE`.

3. On Vercel, add your Stripe secret key as an environment variable:
   ```
   STRIPE_SECRET_KEY = sk_test_your_secret_key_here
   ```

4. Deploy settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
