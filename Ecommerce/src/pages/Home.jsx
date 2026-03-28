import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center gap-8 py-16">
      {/* Hero badge */}
      <span className="bg-[#c8e600] text-[#3a4a00] text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow">
        New Arrivals 2026
      </span>

      {/* Headline */}
      <h1 className="text-5xl font-extrabold text-[#3a4a00] leading-tight max-w-xl">
        Fresh Picks. <br />
        <span className="text-[#8ab000]">Lime Prices.</span>
      </h1>

      <p className="text-[#5a6a00] text-lg max-w-md">
        Discover our curated collection of top-quality products at unbeatable prices. Shop smart, shop fresh.
      </p>

      {/* CTA buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/products"
          className="bg-[#c8e600] text-[#3a4a00] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-[#a8c800] hover:shadow-xl transition-all duration-200 text-base"
        >
          Shop Now →
        </Link>
        <Link
          to="/cart"
          className="border-2 border-[#c8e600] text-[#5a6a00] font-bold px-8 py-3 rounded-full hover:bg-[#c8e600] hover:text-[#3a4a00] transition-all duration-200 text-base"
        >
          View Cart
        </Link>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full">
        {[
          { title: "Fast Delivery", desc: "Get your order in 2-3 business days." },
          { title: "Premium Quality", desc: "Every product is carefully selected." },
          { title: "Secure Checkout", desc: "Your data is always safe with us." },
        ].map(({ title, desc }) => (
          <div
            key={title}
            className="bg-white border border-[#d8f000]/40 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <h3 className="font-bold text-[#3a4a00] text-lg mb-1">{title}</h3>
            <p className="text-[#7a8a00] text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
