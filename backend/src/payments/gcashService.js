// GCash via PayMongo — https://developers.paymongo.com
const axios = require('axios')
const BASE_URL = 'https://api.paymongo.com/v1'

exports.createPaymentLink = async ({ amount, description, auctionId }) => {
  const key = Buffer.from((process.env.PAYMONGO_SECRET_KEY || '') + ':').toString('base64')
  const res = await axios.post(`${BASE_URL}/links`, {
    data: { attributes: { amount: amount * 100, description, remarks: `BidUp Auction #${auctionId}` } }
  }, { headers: { Authorization: `Basic ${key}`, 'Content-Type': 'application/json' } })
  return res.data.data.attributes.checkout_url
}
