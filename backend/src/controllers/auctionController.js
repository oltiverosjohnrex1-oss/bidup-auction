const db = require('../config/db')

exports.getAll = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM auctions WHERE status = "active" ORDER BY end_time ASC')
    res.json(rows)
  } catch (err) { next(err) }
}

exports.getById = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM auctions WHERE id = ?', [req.params.id])
    if (!rows.length) return res.status(404).json({ message: 'Auction not found' })
    res.json(rows[0])
  } catch (err) { next(err) }
}

exports.create = async (req, res, next) => {
  try {
    const { title, description, start_price, end_time } = req.body
    const image_url = req.file ? `/uploads/${req.file.filename}` : null
    const [result] = await db.query(
      'INSERT INTO auctions (user_id, title, description, image_url, start_price, current_price, end_time) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [req.user.id, title, description, image_url, start_price, start_price, end_time]
    )
    res.status(201).json({ id: result.insertId, message: 'Auction created' })
  } catch (err) { next(err) }
}
