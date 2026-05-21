const router = require('express').Router()
const { getProfile, updateProfile } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')
router.get('/:id', getProfile)
router.put('/me', protect, updateProfile)
module.exports = router
