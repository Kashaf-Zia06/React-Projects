import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  // cart is array of { id, name, price, qty }
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    // if already in cart just increase qty
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  function changeQty(id, amount) {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + amount } : item
    // remove item if qty drops to 0
    ).filter(item => item.qty > 0));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} changeQty={changeQty} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;