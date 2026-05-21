const router = require('express').Router()
const { placeBid, getBidHistory } = require('../controllers/bidController')
const { protect } = require('../middleware/authMiddleware')
router.post('/', protect, placeBid)
router.get('/:auctionId', getBidHistory)
module.exports = router
