const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/env')

exports.protect = (req, res, next) => {
  const auth = req.headers.authorization
  if (!auth?.startsWith('Bearer ')) return res.status(401).json({ message: 'Unauthorized' })
  try {
    req.user = jwt.verify(auth.split(' ')[1], JWT_SECRET)
    next()
  } catch { res.status(401).json({ message: 'Invalid token' }) }
}

exports.requireRole = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) return res.status(403).json({ message: 'Forbidden' })
  next()
}
