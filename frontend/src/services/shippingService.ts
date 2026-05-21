import api from './api'
export const shippingService = {
  saveAddress: (data: any) => api.post('/shipping/address', data),
  bookPickup: (auctionId: string, courier: string) => api.post('/shipping/book', { auctionId, courier }),
  getTracking: (shipmentId: string) => api.get(`/shipping/track/${shipmentId}`),
  markShipped: (auctionId: string, data: any) => api.post('/shipping/mark-shipped', { auctionId, ...data }),
}
