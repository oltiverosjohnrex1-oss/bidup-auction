const db = require('../config/db')

exports.getProfile = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT id, name, email, role, country, created_at FROM users WHERE id = ?', [req.params.id])
    res.json(rows[0])
  } catch (err) { next(err) }
}

exports.updateProfile = async (req, res, next) => {
  try {
    const { name, country } = req.body
    await db.query('UPDATE users SET name = ?, country = ? WHERE id = ?', [name, country, req.user.id])
    res.json({ message: 'Profile updated' })
  } catch (err) { next(err) }
}
