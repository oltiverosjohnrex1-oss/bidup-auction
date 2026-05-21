exports.validateAddress = (req, res, next) => {
  const { full_name, street, city, country, zip_code, phone } = req.body
  if (!full_name || !street || !city || !country || !zip_code || !phone)
    return res.status(400).json({ message: 'All address fields are required' })
  next()
}
