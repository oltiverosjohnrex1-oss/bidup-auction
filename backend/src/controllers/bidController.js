const db = require('../config/db')

exports.placeBid = async (req, res, next) => {
  try {
    const { auctionId, amount } = req.body
    const [auction] = await db.query('SELECT * FROM auctions WHERE id = ?', [auctionId])
    if (!auction.length) return res.status(404).json({ message: 'Auction not found' })
    if (amount <= auction[0].current_price) return res.status(400).json({ message: 'Bid must be higher than current price' })
    if (new Date(auction[0].end_time) < new Date()) return res.status(400).json({ message: 'Auction has ended' })
    await db.query('INSERT INTO bids (auction_id, user_id, amount) VALUES (?, ?, ?)', [auctionId, req.user.id, amount])
    await db.query('UPDATE auctions SET current_price = ? WHERE id = ?', [amount, auctionId])
    res.status(201).json({ message: 'Bid placed', amount })
  } catch (err) { next(err) }
}

exports.getBidHistory = async (req, res, next) => {
  try {
    const [rows] = await db.query(
      'SELECT b.*, u.name FROM bids b JOIN users u ON b.user_id = u.id WHERE b.auction_id = ? ORDER BY b.created_at DESC',
      [req.params.auctionId]
    )
    res.json(rows)
  } catch (err) { next(err) }
}
