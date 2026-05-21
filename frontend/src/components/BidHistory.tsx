// TODO: Scrollable list of bids — bidder avatar, name, amount, timestamp
export default function BidHistory({ bids }: { bids: any[] }) {
  return (
    <div>
      <h3 style={{ marginBottom: 12, fontWeight: 700 }}>Bid History</h3>
      {bids?.length ? bids.map((bid, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F0F0F0' }}>
          <span>{bid.name}</span><span style={{ fontWeight: 700, color: '#EE4D2D' }}>₱{bid.amount?.toLocaleString()}</span>
        </div>
      )) : <p style={{ color: '#9CA3AF' }}>No bids yet. Be the first!</p>}
    </div>
  )
}
