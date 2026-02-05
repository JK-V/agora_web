# 🚀 Agora Trading Platform

A modern, full-stack stock trading dashboard with OTP authentication, real-time market visualization, and comprehensive portfolio management.

## Features

### 🔐 Authentication
- Email/Phone OTP verification
- Secure 5-minute OTP expiration
- Dual identifier support (email & phone)

### 📊 Dashboard
- **Portfolio Overview** - Visual representation of your stock holdings
- **Interactive Charts** - Candlestick charts with timeframe controls
- **Market Trends** - Real-time market overview
- **Favorites** - Quick access to preferred stocks

### 📈 Stock Market
- Advanced filtering (Technology, Healthcare, Finance, etc.)
- Comprehensive stock table with price/change indicators
- Trend visualization with mini charts
- One-click trading actions

## Quick Start

```bash
# Install dependencies
npm install

# Terminal 1: Start backend (port 3000)
npm start

# Terminal 2: Start dev server (port 5173)
npm run dev
```

Visit `http://localhost:5173`

## Tech Stack
- **Frontend:** React 18 + TypeScript + Vite
- **Backend:** Node.js + Express
- **Styling:** CSS3 with Glass-morphism effects

## Project Structure
```
├── client/src/components/      # React components
│   ├── Dashboard components    # Portfolio, Charts, Trends
│   ├── Stock page components   # Filters, Table, Trends
│   └── Shared components       # Header, Sidebar, Footer
├── server.js                   # Express backend
└── client/src/index.css        # Global styles
```

## Demo Credentials
- **OTP for testing:** `000000`

## License
MIT

---
**Agora** - Empowering traders with intelligent tools and real-time insights.

Notes
- Input `Email or Mobile` accepts an email (contains `@`) or a phone number (digits, optional `+`, 7–15 digits).
- For demo purposes the server returns the OTP in the JSON response and the browser logs it to console. In production integrate an email/SMS provider and never return OTPs in API responses.

React/TypeScript client

1. Install dev dependencies (root of project):

```bash
npm install
```

2. Run Vite dev server:

```bash
npm run dev
```

3. Build client into `public/` for the Express server to serve:

```bash
npm run build
```

After `npm run build` the app will be available at http://localhost:3000 when the Express server is running.
