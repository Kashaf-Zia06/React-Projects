import { useState } from "react"

export default function Checkout() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [placed, setPlaced] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setPlaced(true)
  }

  if (placed) {
    return (
      <div className="max-w-md mx-auto text-center py-20">
        <div className="text-7xl mb-6"></div>
        <h2 className="text-3xl font-extrabold text-[#3a4a00] mb-3">Order Placed!</h2>
        <p className="text-[#7a8a00] text-lg">Thanks, <span className="font-bold text-[#3a4a00]">{name}</span>! Your order is on its way.</p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-extrabold text-[#3a4a00] mb-2">Checkout</h2>
      <p className="text-[#7a8a00] mb-8">Fill in your details to complete the order.</p>

      <form onSubmit={handleSubmit} className="bg-white border border-[#d8f000]/40 rounded-2xl p-8 shadow-sm flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-[#3a4a00]">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-2 border-[#d8f000]/60 focus:border-[#c8e600] outline-none rounded-xl px-4 py-3 text-[#3a4a00] placeholder-[#b0c000] transition-all"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold text-[#3a4a00]">Delivery Address</label>
          <input
            type="text"
            placeholder="123 Main St, City"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="border-2 border-[#d8f000]/60 focus:border-[#c8e600] outline-none rounded-xl px-4 py-3 text-[#3a4a00] placeholder-[#b0c000] transition-all"
          />
        </div>

        <button
          type="submit"
          className="bg-[#c8e600] text-[#3a4a00] font-extrabold py-4 rounded-full shadow-lg hover:bg-[#a8c800] hover:shadow-xl transition-all duration-200 text-lg mt-2"
        >
          Place Order
        </button>
      </form>
    </div>
  )
}
