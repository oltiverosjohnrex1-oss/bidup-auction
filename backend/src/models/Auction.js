const db = require('../config/db')
module.exports = {
  findAll: () => db.query('SELECT * FROM auctions WHERE status = "active"'),
  findById: (id) => db.query('SELECT * FROM auctions WHERE id = ?', [id]),
  create: (data) => db.query('INSERT INTO auctions SET ?', [data]),
  updatePrice: (id, price) => db.query('UPDATE auctions SET current_price = ? WHERE id = ?', [price, id]),
  updateStatus: (id, status) => db.query('UPDATE auctions SET status = ? WHERE id = ?', [status, id]),
}
