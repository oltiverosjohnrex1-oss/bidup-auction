const db = require('../config/db')

exports.saveAddress = async (req, res, next) => {
  try {
    const { full_name, street, city, country, zip_code, phone } = req.body
    const [result] = await db.query(
      'INSERT INTO addresses (user_id, full_name, street, city, country, zip_code, phone) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [req.user.id, full_name, street, city, country, zip_code, phone]
    )
    res.status(201).json({ id: result.insertId, message: 'Address saved' })
  } catch (err) { next(err) }
}

exports.bookPickup = async (req, res, next) => {
  try {
    const { auctionId, courier } = req.body
    const tracking_number = `${courier.replace(/\s/g, '-').toUpperCase()}-${Date.now()}`
    const [result] = await db.query(
      'INSERT INTO shipments (auction_id, courier, tracking_number, status) VALUES (?, ?, ?, "booked")',
      [auctionId, courier, tracking_number]
    )
    res.status(201).json({ shipmentId: result.insertId, tracking_number })
  } catch (err) { next(err) }
}

exports.getTracking = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM shipments WHERE id = ?', [req.params.shipmentId])
    // TODO: Fetch live events from courierAPI
    res.json({ shipment: rows[0], events: [] })
  } catch (err) { next(err) }
}

exports.markShipped = async (req, res, next) => {
  try {
    const { auctionId, courier, tracking_number } = req.body
    await db.query(
      'UPDATE shipments SET courier = ?, tracking_number = ?, status = "shipped", shipped_at = NOW() WHERE auction_id = ?',
      [courier, tracking_number, auctionId]
    )
    res.json({ message: 'Marked as shipped' })
  } catch (err) { next(err) }
}
