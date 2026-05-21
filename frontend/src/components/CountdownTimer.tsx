import { useCountdown } from '../hooks/useCountdown'

export default function CountdownTimer({ endTime }: { endTime: string }) {
  const { days, hours, minutes, seconds, isEnded } = useCountdown(endTime)
  if (isEnded) return <span style={{ color: '#EF4444', fontWeight: 700 }}>⏱ Auction Ended</span>
  return (
    <span style={{ fontWeight: 700, color: '#EE4D2D' }}>
      ⏱ {days > 0 ? `${days}d ` : ''}{hours}h {minutes}m {seconds}s
    </span>
  )
}
