const db = require('../config/db')

exports.initGCash = async (req, res, next) => {
  try {
    // TODO: Integrate PayMongo API for GCash
    const { auctionId } = req.body
    res.json({ message: 'GCash payment initiated', paymentUrl: 'https://gcash.placeholder.com/pay', auctionId })
  } catch (err) { next(err) }
}

exports.initPayPal = async (req, res, next) => {
  try {
    // TODO: Integrate PayPal SDK
    const { auctionId } = req.body
    res.json({ message: 'PayPal payment initiated', orderId: 'PAYPAL_ORDER_PLACEHOLDER', auctionId })
  } catch (err) { next(err) }
}

exports.getStatus = async (req, res, next) => {
  try {
    const [rows] = await db.query('SELECT * FROM payments WHERE auction_id = ?', [req.params.auctionId])
    res.json(rows[0] || { status: 'pending' })
  } catch (err) { next(err) }
}
