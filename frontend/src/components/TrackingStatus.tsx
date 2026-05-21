// TODO: Visual stepper — Picked Up → Sorting Hub → In Transit → Out for Delivery → Delivered
export default function TrackingStatus({ events }: { events: any[] }) {
  const steps = ['Picked Up', 'Sorting Hub', 'In Transit', 'Out for Delivery', 'Delivered']
  return (
    <div>
      <h3 style={{ marginBottom: 16, fontWeight: 700 }}>📦 Tracking Status</h3>
      {events?.length ? events.map((e, i) => (
        <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <span>✅</span>
          <div>
            <div style={{ fontWeight: 700 }}>{e.status}</div>
            <div style={{ fontSize: 12, color: '#9CA3AF' }}>{e.location} — {e.time}</div>
          </div>
        </div>
      )) : <p style={{ color: '#9CA3AF' }}>No tracking events yet.</p>}
    </div>
  )
}
