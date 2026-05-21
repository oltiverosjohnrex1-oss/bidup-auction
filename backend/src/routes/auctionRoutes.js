const router = require('express').Router()
const { getAll, getById, create } = require('../controllers/auctionController')
const { protect } = require('../middleware/authMiddleware')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: 'src/uploads/',
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
})
const upload = multer({ storage })
router.get('/', getAll)
router.get('/:id', getById)
router.post('/', protect, upload.single('image'), create)
module.exports = router
