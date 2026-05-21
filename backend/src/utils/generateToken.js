const jwt = require('jsonwebtoken')
const { JWT_SECRET, JWT_EXPIRES } = require('../config/env')
module.exports = (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES })
