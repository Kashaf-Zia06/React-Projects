import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import "./Cart.css";

function Cart({ cart, removeFromCart, changeQty }) {
  const navigate = useNavigate();

  // total = sum of price * qty for each item
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div id="cart">
      <div id="cartbar">
        <h1>Your Cart</h1>
        <button onClick={() => navigate("/")}>← Back to Shop</button>
      </div>

      {cart.length === 0
        ? <p>Your cart is empty.</p>
        : <>
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                changeQty={changeQty}
              />
            ))}
            <div id="total">
              <b>Total: ${total}</b>
            </div>
          </>
      }
    </div>
  );
}

export default Cart;