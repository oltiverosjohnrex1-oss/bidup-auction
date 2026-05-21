exports.validateBid = (req, res, next) => {
  const { auctionId, amount } = req.body
  if (!auctionId) return res.status(400).json({ message: 'Auction ID required' })
  if (!amount || amount <= 0) return res.status(400).json({ message: 'Valid bid amount required' })
  next()
}
