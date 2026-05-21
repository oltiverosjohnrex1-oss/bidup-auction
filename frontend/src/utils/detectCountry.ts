export async function detectCountry(): Promise<string> {
  try {
    const res = await fetch('https://ipapi.co/json/')
    const data = await res.json()
    return data.country_code || 'US'
  } catch { return 'US' }
}
export const getPaymentMethod = (country: string) => country === 'PH' ? 'gcash' : 'paypal'
