require('dotenv').config()
const db = require('../config/db')
const bcrypt = require('bcryptjs')

async function seed() {
  const hash = await bcrypt.hash('password123', 10)
  await db.query(`INSERT IGNORE INTO users (name, email, password_hash, role, country) VALUES
    ('Rex Oltiveros', 'rex@bidup.com', '${hash}', 'both', 'PH'),
    ('Maria Santos', 'maria@bidup.com', '${hash}', 'buyer', 'PH'),
    ('John Smith', 'john@bidup.com', '${hash}', 'buyer', 'US')`)
  await db.query(`INSERT IGNORE INTO auctions (user_id, title, description, start_price, current_price, end_time) VALUES
    (1, 'Vintage Polaroid Camera', 'Classic 1970s instant camera in great condition', 500, 500, DATE_ADD(NOW(), INTERVAL 3 DAY)),
    (1, 'Nike Air Jordan 1', 'Size 10, brand new in box, limited edition', 8000, 8000, DATE_ADD(NOW(), INTERVAL 1 DAY)),
    (1, 'MacBook Pro 2020', '8GB RAM 256GB SSD excellent condition', 40000, 40000, DATE_ADD(NOW(), INTERVAL 5 DAY))`)
  console.log('✅ Seed data inserted!')
  process.exit(0)
}
seed().catch(console.error)
