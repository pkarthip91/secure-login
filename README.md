# Secure Login – Web Engineer Assessment

A full-featured, multi-step secure login flow built using **Next.js**, **Tailwind CSS**, and **ShadCN UI**. This project replicates a real-world secure authentication experience including username validation, secure word confirmation, password verification, and 6-digit OTP-based MFA.

> ✅ Designed to be accessible, responsive, and production-ready.

---

## Features

- 🔸 Multi-step login flow
  - Step 1: Username
  - Step 2: Secure Word
  - Step 3: Password (hashed)
  - Step 4: OTP (6-digit MFA)
- 🔸 OTP expires after 2 minutes
- 🔸 3 retry limits on OTP
- 🔸 Mock user and transaction data using in-memory stores
- 🔸 Session-based dashboard using `localStorage`
- 🔸 Logout flow on dashboard
- 🔸 Mobile-first responsive layout
- 🔸 Accessible via ShadCN/Dialog/A11Y standards

---

## Tech Stack

| Tech           | Purpose                         |
|----------------|----------------------------------|
| Next.js        | React framework with App Router |
| Tailwind CSS   | Utility-first CSS styling       |
| ShadCN UI      | UI components using Radix + Tailwind |
| crypto-js      | SHA256 password hashing         |
| localStorage   | Auth/session handling           |
| GitHub Pages   | Static deployment option        |

---


## ⚙️ Local Development

### ✅ Clone & Run

```bash
git clone https://github.com/pkarthip91/secure-login.git
cd secure-login
npm install
npm run dev

Visit 👉 http://localhost:3000

