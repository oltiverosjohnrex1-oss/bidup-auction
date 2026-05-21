const { finalizeAuction } = require('../services/auctionService')

exports.initBidSocket = (io) => {
  io.on('connection', (socket) => {
    console.log(`🔌 Connected: ${socket.id}`)

    socket.on('join_auction', (auctionId) => {
      socket.join(`auction_${auctionId}`)
    })

    socket.on('new_bid', ({ auctionId, amount, userId, userName }) => {
      io.to(`auction_${auctionId}`).emit('bid_update', { auctionId, amount, userId, userName, timestamp: new Date().toISOString() })
    })

    socket.on('auction_end', async ({ auctionId }) => {
      const winner = await finalizeAuction(auctionId)
      io.to(`auction_${auctionId}`).emit('auction_finished', { auctionId, winner })
    })

    socket.on('disconnect', () => console.log(`🔌 Disconnected: ${socket.id}`))
  })
}
