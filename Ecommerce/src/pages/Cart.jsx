import { Link } from "react-router-dom"

export default function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-3xl font-extrabold text-[#3a4a00] mb-2">Your Cart</h2>
      <p className="text-[#7a8a00] mb-8">{cart.length} item{cart.length !== 1 ? "s" : ""} in your cart</p>

      {cart.length === 0 ? (
        <div className="bg-white border border-[#d8f000]/40 rounded-2xl p-12 text-center shadow-sm">
          <p className="text-[#7a8a00] text-lg font-medium mb-6">Your cart is empty</p>
          <Link
            to="/products"
            className="bg-[#c8e600] text-[#3a4a00] font-bold px-6 py-3 rounded-full hover:bg-[#a8c800] transition-all duration-200 shadow"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {cart.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#d8f000]/40 rounded-xl px-5 py-4 flex justify-between items-center shadow-sm"
            >
              <span className="font-semibold text-[#3a4a00]">{item.name}</span>
              <span className="font-bold text-[#8ab000] text-lg">${item.price}</span>
            </div>
          ))}

          {/* Total */}
          <div className="bg-[#c8e600]/30 border border-[#c8e600] rounded-xl px-5 py-4 flex justify-between items-center mt-2">
            <span className="font-bold text-[#3a4a00] text-lg">Total</span>
            <span className="font-extrabold text-[#3a4a00] text-2xl">${total}</span>
          </div>

          <Link to="/checkout" className="mt-2">
            <button className="w-full bg-[#c8e600] text-[#3a4a00] font-extrabold py-4 rounded-full shadow-lg hover:bg-[#a8c800] hover:shadow-xl transition-all duration-200 text-lg">
              Proceed to Checkout →
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
