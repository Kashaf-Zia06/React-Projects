import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../products";
import "./Shop.css";

function Shop({ addToCart, cart }) {
  const navigate = useNavigate();

  return (
    <div id="shop">
      <div id="shopbar">
        <h1>ShopEasy</h1>
        <button onClick={() => navigate("/cart")}>
          Cart ({cart.length})
        </button>
      </div>

      <div id="grid">
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;