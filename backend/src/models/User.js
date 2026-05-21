const db = require('../config/db')
module.exports = {
  findByEmail: (email) => db.query('SELECT * FROM users WHERE email = ?', [email]),
  findById: (id) => db.query('SELECT id, name, email, role, country, created_at FROM users WHERE id = ?', [id]),
  create: (data) => db.query('INSERT INTO users SET ?', [data]),
}
