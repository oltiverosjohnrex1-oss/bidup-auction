const db = require('../config/db')
module.exports = {
  create: (data) => db.query('INSERT INTO shipments SET ?', [data]),
  findById: (id) => db.query('SELECT * FROM shipments WHERE id = ?', [id]),
  findByAuction: (auctionId) => db.query('SELECT * FROM shipments WHERE auction_id = ?', [auctionId]),
  updateStatus: (id, status) => db.query('UPDATE shipments SET status = ? WHERE id = ?', [status, id]),
}
