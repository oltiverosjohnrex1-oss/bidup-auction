const router = require('express').Router()
const { saveAddress, bookPickup, getTracking, markShipped } = require('../controllers/shippingController')
const { protect } = require('../middleware/authMiddleware')
router.post('/address', protect, saveAddress)
router.post('/book', protect, bookPickup)
router.get('/track/:shipmentId', protect, getTracking)
router.post('/mark-shipped', protect, markShipped)
module.exports = router
