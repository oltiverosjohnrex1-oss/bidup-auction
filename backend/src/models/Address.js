const db = require('../config/db')
module.exports = {
  create: (data) => db.query('INSERT INTO addresses SET ?', [data]),
  findByUser: (userId) => db.query('SELECT * FROM addresses WHERE user_id = ?', [userId]),
}
