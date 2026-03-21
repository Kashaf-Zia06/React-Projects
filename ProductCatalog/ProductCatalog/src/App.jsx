import { useState } from 'react'
import cap from './assets/cap.jpeg'
import tshirt from './assets/tshirt.jpg'
import jeans from './assets/jeans.jpeg'
import sneakers from './assets/sneakers.jpeg'
import shoes from './assets/shoes.jpeg'
import jacket from './assets/jacket.jpeg'

import './App.css'

function App() {

  const products = [
    { id: 1, name: "Classic T-Shirt", category: "Men", price: 20, image: tshirt },
    { id: 2, name: "Denim Jeans", category: "Men", price: 40, image: jeans },
    { id: 3, name: "Running Sneakers", category: "Men", price: 60, image: sneakers },
    { id: 4, name: "Baseball Cap", category: "Men", price: 15, image: cap },
    { id: 5, name: "Leather Jacket", category: "Men", price: 120, image: jacket },
    { id: 6, name: "Formal Shoes", category: "Men", price: 80, image: shoes }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Filter logic
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.price.toString().includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">

      {/* 🔍 Search Box */}
      <h1 className="text-3xl font-bold mt-10">Product Catalog</h1>

      <input
        type="text"
        placeholder="Search by name or price..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-5 w-80 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* 🛍️ Product Grid */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 px-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div
              key={p.id}
              className="w-56 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col items-center"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-40 h-40 object-cover rounded-md"
              />

              <h2 className="mt-3 font-semibold text-lg text-center">
                {p.name}
              </h2>

              <p className="text-gray-500 text-sm">{p.category}</p>

              <p className="mt-2 font-bold text-blue-600">
                ${p.price}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-10">
            No products found 😔
          </p>
        )}
      </div>
    </div>
  )
}

export default App