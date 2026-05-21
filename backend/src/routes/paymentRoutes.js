const router = require('express').Router()
const { initGCash, initPayPal, getStatus } = require('../controllers/paymentController')
const { protect } = require('../middleware/authMiddleware')
router.post('/gcash/init', protect, initGCash)
router.post('/paypal/init', protect, initPayPal)
router.get('/status/:auctionId', protect, getStatus)
router.post('/webhook', require('../payments/webhookHandler'))
module.exports = router
