// PayPal REST API — https://developer.paypal.com/docs/api/orders/v2
const axios = require('axios')
const BASE_URL = 'https://api-m.sandbox.paypal.com'

async function getAccessToken() {
  const res = await axios.post(`${BASE_URL}/v1/oauth2/token`, 'grant_type=client_credentials', {
    auth: { username: process.env.PAYPAL_CLIENT_ID, password: process.env.PAYPAL_SECRET },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
  return res.data.access_token
}

exports.createOrder = async ({ amount, currency = 'USD', auctionId }) => {
  const token = await getAccessToken()
  const res = await axios.post(`${BASE_URL}/v2/checkout/orders`, {
    intent: 'CAPTURE',
    purchase_units: [{ amount: { currency_code: currency, value: amount.toFixed(2) }, reference_id: `auction_${auctionId}` }],
  }, { headers: { Authorization: `Bearer ${token}` } })
  return res.data
}

exports.captureOrder = async (orderId) => {
  const token = await getAccessToken()
  const res = await axios.post(`${BASE_URL}/v2/checkout/orders/${orderId}/capture`, {}, { headers: { Authorization: `Bearer ${token}` } })
  return res.data
}
