import { useState, useEffect } from 'react'
export function useCountdown(endTime: string) {
  const [timeLeft, setTimeLeft] = useState(Math.max(0, new Date(endTime).getTime() - Date.now()))
  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(Math.max(0, new Date(endTime).getTime() - Date.now())), 1000)
    return () => clearInterval(interval)
  }, [endTime])
  return {
    days: Math.floor(timeLeft / 86400000),
    hours: Math.floor((timeLeft / 3600000) % 24),
    minutes: Math.floor((timeLeft / 60000) % 60),
    seconds: Math.floor((timeLeft / 1000) % 60),
    isEnded: timeLeft === 0,
  }
}
