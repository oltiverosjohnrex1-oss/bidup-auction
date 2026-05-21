exports.validatePayment = (req, res, next) => {
  if (!req.body.auctionId) return res.status(400).json({ message: 'Auction ID required' })
  next()
}
