import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { SocketProvider } from './context/SocketContext'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import AuctionList from './pages/AuctionList'
import AuctionDetail from './pages/AuctionDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import PostItem from './pages/PostItem'
import PaymentPage from './pages/PaymentPage'
import TrackingPage from './pages/TrackingPage'
import WinnerPage from './pages/WinnerPage'

export default function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/auctions" element={<AuctionList />} />
              <Route path="/auctions/:id" element={<AuctionDetail />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/post-item" element={<PostItem />} />
              <Route path="/payment/:auctionId" element={<PaymentPage />} />
              <Route path="/tracking/:shipmentId" element={<TrackingPage />} />
              <Route path="/winner/:auctionId" element={<WinnerPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SocketProvider>
    </AuthProvider>
  )
}
