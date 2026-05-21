const db = require('../config/db')
const { emailService } = require('./emailService')

exports.finalizeAuction = async (auctionId) => {
  const [bids] = await db.query('SELECT * FROM bids WHERE auction_id = ? ORDER BY amount DESC LIMIT 1', [auctionId])
  if (!bids.length) {
    await db.query('UPDATE auctions SET status = "ended_no_bids" WHERE id = ?', [auctionId])
    return null
  }
  const winner = bids[0]
  await db.query('UPDATE auctions SET status = "ended", winner_id = ? WHERE id = ?', [winner.user_id, auctionId])
  await db.query('INSERT INTO payments (auction_id, winner_id, amount, status) VALUES (?, ?, ?, "pending")', [auctionId, winner.user_id, winner.amount])
  await emailService.sendWinnerEmail(winner.user_id, auctionId, winner.amount)
  console.log(`🏆 Auction #${auctionId} ended. Winner: user #${winner.user_id}`)
  return winner
}
