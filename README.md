# 🔨 BidUp — Online Auction System

A full-stack auction system with real-time bidding, GCash/PayPal payments, and worldwide courier shipping.

## Project Structure
```
bidup/
├── frontend/    → React + TypeScript + Tailwind CSS + Vite
└── backend/     → Node.js + Express + MySQL + Socket.io
```

## Quick Start

### 1. Backend
```bash
cd backend
npm install
cp .env.example .env
# Fill in your values in .env
mysql -u root -p -e "CREATE DATABASE bidup_db;"
mysql -u root -p bidup_db < src/database/schema.sql
npm run seed
npm run dev
# Runs on http://localhost:5000
```

### 2. Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
# Runs on http://localhost:3000
```

## Tech Stack
| Layer | Tech |
|-------|------|
| Frontend | React 18, TypeScript, Tailwind CSS, Vite |
| State | React Context + Hooks |
| Real-time | Socket.io |
| Backend | Node.js, Express |
| Database | MySQL |
| Auth | JWT + bcryptjs |
| File Upload | Multer |
| Payments PH | GCash via PayMongo |
| Payments Intl | PayPal REST API |
| Shipping PH | J&T Express, LBC, Ninja Van |
| Shipping Intl | DHL Express, FedEx, UPS |

## Features
- 🔐 JWT Auth — Buyer / Seller / Both roles
- ⚡ Real-time bidding via Socket.io
- ⏱️ Countdown timer per auction
- 🖼️ Image upload for items (Multer)
- 💳 Auto payment method — GCash (PH) or PayPal (abroad)
- 📦 Courier booking + parcel tracking
- 📧 Email notifications (winner, shipped)
- 📊 Seller dashboard with shipment management

## Author
Rex Oltiveros
