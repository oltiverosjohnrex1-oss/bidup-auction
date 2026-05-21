module.exports = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || 'bidup_secret',
  JWT_EXPIRES: process.env.JWT_EXPIRES || '7d',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  GCASH_API_KEY: process.env.PAYMONGO_SECRET_KEY,
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
  PAYPAL_SECRET: process.env.PAYPAL_SECRET,
}
