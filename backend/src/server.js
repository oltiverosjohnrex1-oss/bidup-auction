const app = require('./app')
const http = require('http')
const { Server } = require('socket.io')
const { initBidSocket } = require('./sockets/bidSocket')

const PORT = process.env.PORT || 5000
const server = http.createServer(app)

const io = new Server(server, {
  cors: { origin: process.env.FRONTEND_URL || 'http://localhost:3000', methods: ['GET', 'POST'] }
})

initBidSocket(io)

server.listen(PORT, () => console.log(`🚀 BidUp server running on port ${PORT}`))
