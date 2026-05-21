// TODO: Full delivery address form — name, street, city, country dropdown, zip, phone
import { useState } from 'react'
export default function ShippingForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [form, setForm] = useState({ full_name: '', street: '', city: '', country: 'PH', zip_code: '', phone: '' })
  return (
    <div>
      <h3 style={{ marginBottom: 16, fontWeight: 700 }}>Shipping Address</h3>
      {Object.keys(form).map(key => (
        <input key={key} placeholder={key.replace(/_/g, ' ')} value={(form as any)[key]}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
          style={{ display: 'block', width: '100%', marginBottom: 10, padding: '10px 14px', border: '1.5px solid #E5E7EB', borderRadius: 8 }} />
      ))}
      <button onClick={() => onSubmit(form)} style={{ background: '#EE4D2D', color: 'white', padding: '12px 24px', border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }}>
        Save Address
      </button>
    </div>
  )
}
