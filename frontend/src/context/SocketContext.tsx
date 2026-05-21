import { createContext, useContext, useEffect, useRef, ReactNode } from 'react'
import { io, Socket } from 'socket.io-client'
const SocketContext = createContext<Socket | null>(null)
export function SocketProvider({ children }: { children: ReactNode }) {
  const socketRef = useRef<Socket | null>(null)
  useEffect(() => {
    socketRef.current = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000')
    return () => { socketRef.current?.disconnect() }
  }, [])
  return <SocketContext.Provider value={socketRef.current}>{children}</SocketContext.Provider>
}
export const useSocketContext = () => useContext(SocketContext)
