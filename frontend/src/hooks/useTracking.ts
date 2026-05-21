import { useState, useEffect } from 'react'
export function useTracking(shipmentId: string) {
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`/api/shipping/track/${shipmentId}`)
      .then(r => r.json()).then(d => setEvents(d.events || [])).catch(console.error)
      .finally(() => setLoading(false))
  }, [shipmentId])
  return { events, loading }
}
