import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
        <Outlet />
      </main>
    </>
  )
}
