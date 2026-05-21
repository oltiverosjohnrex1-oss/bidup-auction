export function usePayment() {
  const detectMethod = (country: string) => country === 'PH' ? 'gcash' : 'paypal'
  return { detectMethod }
}
