const db = require('../config/db')
module.exports = {
  create: (data) => db.query('INSERT INTO bids SET ?', [data]),
  findByAuction: (auctionId) => db.query('SELECT b.*, u.name FROM bids b JOIN users u ON b.user_id = u.id WHERE b.auction_id = ? ORDER BY b.created_at DESC', [auctionId]),
  getHighest: (auctionId) => db.query('SELECT * FROM bids WHERE auction_id = ? ORDER BY amount DESC LIMIT 1', [auctionId]),
}
