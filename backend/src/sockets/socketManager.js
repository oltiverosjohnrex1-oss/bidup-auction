let io = null
exports.init = (socketIo) => { io = socketIo }
exports.getIO = () => { if (!io) throw new Error('Socket.io not initialized'); return io }
exports.emitToAuction = (auctionId, event, data) => io?.to(`auction_${auctionId}`).emit(event, data)
