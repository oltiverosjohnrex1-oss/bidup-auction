// TODO: Modal — enter bid amount, shows min bid, confirm button
export default function BidModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
      <div style={{ background: 'white', borderRadius: 16, padding: 32, minWidth: 320 }}>
        <h2>Place Your Bid</h2>
        <button onClick={onClose} style={{ marginTop: 16 }}>Close</button>
      </div>
    </div>
  )
}
