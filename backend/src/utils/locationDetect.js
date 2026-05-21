exports.getPaymentMethod = (country) => country === 'PH' ? 'gcash' : 'paypal'
exports.getCourier = (country) => country === 'PH' ? 'J&T Express' : 'DHL Express'
exports.isLocalDelivery = (sellerCountry, buyerCountry) => sellerCountry === buyerCountry
