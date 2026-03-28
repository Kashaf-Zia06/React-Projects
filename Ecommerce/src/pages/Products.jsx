import { useState } from "react"

const products = [
  { id: 1, name: "Shoes", price: 50, desc: "Comfortable everyday sneakers" },
  { id: 2, name: "Shirt", price: 30, desc: "Breathable cotton casual shirt" },
  { id: 3, name: "Watch", price: 100, desc: "Sleek minimalist timepiece" },
  { id: 4, name: "Bag", price: 70, desc: "Stylish carry-all tote bag" },
  { id: 5, name: "Sunglasses", price: 45, desc: "UV-protected polarized lenses" },
  { id: 6, name: "Cap", price: 25, desc: "Adjustable snapback cap" },
]

export default function Products({ cart, setCart }) {
  const [added, setAdded] = useState({})

  function addToCart(item) {
    setCart([...cart, item])
    setAdded((prev) => ({ ...prev, [item.id]: true }))
    setTimeout(() => setAdded((prev) => ({ ...prev, [item.id]: false })), 1200)
  }

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-[#3a4a00] mb-2">Our Products</h2>
      <p className="text-[#7a8a00] mb-8">Click any item to add it to your cart.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-[#d8f000]/40 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col gap-3"
          >
            <div>
              <h3 className="text-lg font-bold text-[#3a4a00]">{p.name}</h3>
              <p className="text-sm text-[#7a8a00]">{p.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xl font-extrabold text-[#8ab000]">${p.price}</span>
              <button
                onClick={() => addToCart(p)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 shadow
                  ${added[p.id]
                    ? "bg-[#3a4a00] text-[#c8e600] scale-95"
                    : "bg-[#c8e600] text-[#3a4a00] hover:bg-[#a8c800] hover:shadow-md"
                  }`}
              >
                {added[p.id] ? "✓ Added" : "+ Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
