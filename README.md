# Secure Login

A full-featured, multi-step secure login flow built using **Next.js**, **Tailwind CSS**, and **ShadCN UI**.  
This project replicates a real-world secure authentication experience including:

- ✅ Username validation  
- ✅ Secure word confirmation  
- ✅ Password verification (hashed)  
- ✅ 6-digit OTP-based MFA  

> 💡 Designed to be accessible, responsive, and production-ready.

---

## Live Demo

🔗 [https://secure-login-iota.vercel.app](https://secure-login-iota.vercel.app)

---

## Features

-  **Multi-step login flow**
  1. Username
  2. Secure Word
  3. Hashed Password
  4. MFA (6-digit OTP)
- OTP expires after 2 minutes
- Retry limit (3 attempts)
- In-memory mock user & transaction data
- Token/session stored via `localStorage`
- Dashboard with mock transactions
- Mobile responsive + accessible UI
- Logout support on dashboard

---

## Tech Stack

| Tech           | Description                              |
|----------------|------------------------------------------|
| Next.js        | React framework with App Router          |
| Tailwind CSS   | Utility-first CSS framework              |
| ShadCN UI      | Accessible UI components (Radix-based)   |
| crypto-js      | SHA256 password hashing                  |
| localStorage   | Lightweight session handling             |
| Vercel         | Deployed frontend hosting (CI/CD)        |

---

## Local Development

```bash
git clone https://github.com/pkarthip91/secure-login.git
cd secure-login
npm install
npm run dev
