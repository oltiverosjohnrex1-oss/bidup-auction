const db = require('../config/db')
exports.validateBid = async (auctionId, amount) => {
  const [auction] = await db.query('SELECT * FROM auctions WHERE id = ?', [auctionId])
  if (!auction.length) throw new Error('Auction not found')
  if (auction[0].status !== 'active') throw new Error('Auction is not active')
  if (new Date(auction[0].end_time) < new Date()) throw new Error('Auction has ended')
  if (amount <= auction[0].current_price) throw new Error(`Bid must exceed ₱${auction[0].current_price}`)
  return auction[0]
}
