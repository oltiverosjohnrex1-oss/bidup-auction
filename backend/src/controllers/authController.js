const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../config/db')
const { JWT_SECRET, JWT_EXPIRES } = require('../config/env')

exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body
    const hash = await bcrypt.hash(password, 10)
    const [result] = await db.query(
      'INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)',
      [name, email, hash, role || 'buyer']
    )
    const token = jwt.sign({ id: result.insertId, role }, JWT_SECRET, { expiresIn: JWT_EXPIRES })
    res.status(201).json({ token, user: { id: result.insertId, name, email, role } })
  } catch (err) { next(err) }
}

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email])
    if (!rows.length) return res.status(401).json({ message: 'Invalid credentials' })
    const valid = await bcrypt.compare(password, rows[0].password_hash)
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' })
    const { password_hash, ...user } = rows[0]
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES })
    res.json({ token, user })
  } catch (err) { next(err) }
}

exports.getMe = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT id, name, email, role, country, created_at FROM users WHERE id = ?', [req.user.id])
    res.json(rows[0])
  } catch (err) { next(err) }
}
