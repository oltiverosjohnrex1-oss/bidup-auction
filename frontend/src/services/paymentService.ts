import api from './api'
export const paymentService = {
  initGCash: (auctionId: string) => api.post('/payments/gcash/init', { auctionId }),
  initPayPal: (auctionId: string) => api.post('/payments/paypal/init', { auctionId }),
  getStatus: (auctionId: string) => api.get(`/payments/status/${auctionId}`),
}
