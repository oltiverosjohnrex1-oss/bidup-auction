import api from './api'
export const auctionService = {
  getAll: (params?: any) => api.get('/auctions', { params }),
  getById: (id: string) => api.get(`/auctions/${id}`),
  create: (data: FormData) => api.post('/auctions', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  placeBid: (auctionId: string, amount: number) => api.post('/bids', { auctionId, amount }),
  getBidHistory: (auctionId: string) => api.get(`/bids/${auctionId}`),
}
