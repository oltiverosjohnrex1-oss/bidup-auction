import { useState } from 'react'
export function useAuth() {
  const [user, setUser] = useState<any>(null)
  const token = localStorage.getItem('token')
  const logout = () => { localStorage.removeItem('token'); setUser(null) }
  return { user, token, logout }
}
