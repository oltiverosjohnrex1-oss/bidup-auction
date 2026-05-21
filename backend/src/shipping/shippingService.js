exports.calculateCost = ({ originCountry, destinationCountry, weightKg = 1 }) => {
  const isLocal = originCountry === destinationCountry && originCountry === 'PH'
  if (isLocal) return { cost: 150, currency: 'PHP', courier: 'J&T Express' }
  if (destinationCountry === 'PH') return { cost: 800, currency: 'PHP', courier: 'LBC Express' }
  return { cost: 25, currency: 'USD', courier: 'DHL Express' }
}

exports.getAvailableCouriers = (country) =>
  country === 'PH' ? ['J&T Express', 'LBC Express', 'Ninja Van'] : ['DHL Express', 'FedEx', 'UPS']
