// TODO: Card with item image, title, current bid price, countdown timer, quick-bid button
export default function AuctionCard({ auction }: { auction: any }) {
  return <div style={{ border: '1px solid #E5E7EB', borderRadius: 12, padding: 16, background: 'white' }}>{auction?.title}</div>
}
