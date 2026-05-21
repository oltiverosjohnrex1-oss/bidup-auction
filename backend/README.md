# BidUp Backend

Node.js + Express + MySQL + Socket.io

## Setup
```bash
npm install
cp .env.example .env
# Fill in DB credentials and API keys
mysql -u root -p -e "CREATE DATABASE bidup_db;"
mysql -u root -p bidup_db < src/database/schema.sql
npm run seed   # optional sample data
npm run dev
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register |
| POST | /api/auth/login | Login |
| GET | /api/auctions | List auctions |
| GET | /api/auctions/:id | Auction detail |
| POST | /api/auctions | Create auction |
| POST | /api/bids | Place bid |
| GET | /api/bids/:auctionId | Bid history |
| POST | /api/payments/gcash/init | GCash payment |
| POST | /api/payments/paypal/init | PayPal payment |
| POST | /api/payments/webhook | Payment webhook |
| POST | /api/shipping/address | Save address |
| POST | /api/shipping/book | Book courier |
| GET | /api/shipping/track/:id | Track shipment |
| POST | /api/shipping/mark-shipped | Mark shipped |
