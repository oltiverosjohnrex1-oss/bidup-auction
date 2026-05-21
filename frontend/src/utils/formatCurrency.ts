export const formatCurrency = (amount: number, currency = 'PHP') =>
  new Intl.NumberFormat('en-PH', { style: 'currency', currency }).format(amount)
