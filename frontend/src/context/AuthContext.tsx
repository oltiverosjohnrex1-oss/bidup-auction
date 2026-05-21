import { createContext, useContext, useState, ReactNode } from 'react'
const AuthContext = createContext<any>(null)
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const login = (userData: any, token: string) => { localStorage.setItem('token', token); setUser(userData) }
  const logout = () => { localStorage.removeItem('token'); setUser(null) }
  return <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>{children}</AuthContext.Provider>
}
export const useAuthContext = () => useContext(AuthContext)
