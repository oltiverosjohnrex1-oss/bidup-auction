const db = require('../config/db')

module.exports = async (req, res) => {
  try {
    const event = req.body
    // PayMongo (GCash) webhook
    if (event.data?.attributes?.type === 'payment.paid') {
      const auctionId = event.data.attributes.data?.attributes?.remarks?.split('#')[1]
      if (auctionId) await db.query('UPDATE payments SET status = "paid", paid_at = NOW() WHERE auction_id = ?', [auctionId])
    }
    // PayPal webhook
    if (event.event_type === 'CHECKOUT.ORDER.APPROVED') {
      const auctionId = event.resource?.purchase_units?.[0]?.reference_id?.replace('auction_', '')
      if (auctionId) await db.query('UPDATE payments SET status = "paid", paid_at = NOW() WHERE auction_id = ?', [auctionId])
    }
    res.json({ received: true })
  } catch (err) { console.error('Webhook error:', err); res.status(500).json({ error: 'Webhook failed' }) }
}
