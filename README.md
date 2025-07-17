#  React Cryptocurrency Converter

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-darkred?style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![CoinGecko API](https://img.shields.io/badge/CoinGecko%20API-green?style=for-the-badge)


A simple cryptocurrency converter built with **React**, styled using **Tailwind CSS**, **shadcn/ui**, and powered by live exchange rates from the [CoinGecko API](https://www.coingecko.com/en/api).  
Supports crypto-to-crypto and crypto-to-fiat conversions with metadata (logos, symbols, names).

---

##  Features

- Real-time conversion rates via [CoinGecko API](https://www.coingecko.com/en/api)
- Clean dark UI with Sora font and gradient background
- Fully responsive design
- Switch button to reverse currencies
- Coin logos, names, and symbols
- Built with React + Axios + Tailwind CSS + shadcn/ui

---

## Demo

> Coming soon — add your Vercel or Netlify link here!

---

## Tech Stack

- **React** (Vite)
- **Axios** – For fetching exchange rates
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui** – Elegant UI components
- **Sora** – Sleek Google font
- **CoinGecko API** – Free public crypto exchange rate API

---

## 🛠️ Getting Started

### 1. Clone the repo


git clone https://github.com/tonymphomilanzi/crypto-converter.git
cd crypto-converter


2. Install dependencies
npm install


3. Run the app
npm run dev 


## API Usage (CoinGecko)
We're using the simple/price and coins/list endpoints to:

Fetch exchange rates
GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd

Fetch full list of coins (names, symbols, IDs)

⚠️ This setup does not use a backend, so some fiat currencies like MWK may face CORS issues when hosted locally.
On production hosts like Vercel or Netlify, CORS is typically not an issue.
