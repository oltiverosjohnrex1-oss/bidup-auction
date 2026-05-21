// TODO: Replace with nodemailer + real SMTP credentials
exports.emailService = {
  sendWinnerEmail: async (userId, auctionId, amount) => {
    console.log(`📧 Winner email → user #${userId} | auction #${auctionId} | ₱${amount}`)
  },
  sendShippedEmail: async (userId, trackingNumber, courier) => {
    console.log(`📧 Shipped email → user #${userId} | ${courier} ${trackingNumber}`)
  },
}
