const db = require('../config/db')
module.exports = {
  create: (data) => db.query('INSERT INTO payments SET ?', [data]),
  findByAuction: (auctionId) => db.query('SELECT * FROM payments WHERE auction_id = ?', [auctionId]),
  updateStatus: (id, status) => db.query('UPDATE payments SET status = ?, paid_at = NOW() WHERE id = ?', [status, id]),
}
