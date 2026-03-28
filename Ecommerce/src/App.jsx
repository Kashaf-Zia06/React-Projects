import { Routes, Route, Link, useLocation } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Cart from "./pages/Cart.jsx"
import Checkout from "./pages/Checkout.jsx"

function Navbar({ cartCount }) {
  const location = useLocation()
  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/cart", label: `Cart (${cartCount})` },
  ]

  return (
    <nav className="bg-[#c8e600] shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-2xl font-extrabold text-[#3a4a00] tracking-tight">LimeShop</span>
        <div className="flex gap-6">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200
                ${location.pathname === to
                  ? "bg-[#3a4a00] text-[#c8e600]"
                  : "text-[#3a4a00] hover:bg-[#a8c800] hover:text-white"
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

function App() {
  const [cart, setCart] = useState([])

  return (
    <div className="min-h-screen bg-[#f9fce1]">
      <Navbar cartCount={cart.length} />
      <main className="max-w-5xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
