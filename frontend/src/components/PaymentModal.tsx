// TODO: Payment modal — auto-shows GCash form (PH) or PayPal button (international)
export default function PaymentModal({ open, onClose, country }: { open: boolean; onClose: () => void; country: string }) {
  if (!open) return null
  const method = country === 'PH' ? '💙 GCash' : '🌐 PayPal'
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
      <div style={{ background: 'white', borderRadius: 16, padding: 32, minWidth: 320 }}>
        <h2>Pay via {method}</h2>
        <p style={{ color: '#9CA3AF', marginTop: 8 }}>Payment form — coming soon</p>
        <button onClick={onClose} style={{ marginTop: 16 }}>Close</button>
      </div>
    </div>
  )
}
