exports.validateCreateAuction = (req, res, next) => {
  const { title, start_price, end_time } = req.body
  if (!title) return res.status(400).json({ message: 'Title is required' })
  if (!start_price || start_price <= 0) return res.status(400).json({ message: 'Valid starting price required' })
  if (!end_time || new Date(end_time) <= new Date()) return res.status(400).json({ message: 'End time must be in the future' })
  next()
}
