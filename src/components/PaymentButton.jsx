import React from 'react'

// Payment Button starter — calls a server endpoint to create a Stripe Checkout session.
// You need a small server to create the session securely with your Stripe secret key.

export default function PaymentButton({ amount = 499 }){
  async function startCheckout(){
    try{
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount })
      })
      if (!res.ok) throw new Error('Server error')
      const { url } = await res.json()
      if (url) window.location.href = url
    }catch(err){
      alert('Unable to start checkout. See console for details.')
      console.error(err)
    }
  }

  return (
    <button onClick={startCheckout} className="px-3 py-1 rounded-md bg-accent text-black font-medium">Donate / Pay</button>
  )
}
