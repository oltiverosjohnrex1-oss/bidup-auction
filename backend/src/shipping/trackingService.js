const { getTracking } = require('./courierAPI')

exports.getTrackingEvents = async (courier, trackingNumber) => {
  try {
    const raw = await getTracking(courier, trackingNumber)
    return raw.map(e => ({ status: e.status, location: e.location, time: e.timestamp, description: e.description }))
  } catch (err) { console.error('Tracking error:', err); return [] }
}
