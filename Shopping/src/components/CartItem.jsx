import "./CartItem.css";

function CartItem({ item, removeFromCart, changeQty }) {
  return (
    <div className="citem">
      <div className="cinfo">
        <p className="cname">{item.name}</p>
        <p className="cprice">${item.price * item.qty}</p>
      </div>

      <div className="cqty">
        <button onClick={() => changeQty(item.id, -1)}>−</button>
        <span>{item.qty}</span>
        <button onClick={() => changeQty(item.id, 1)}>+</button>
      </div>

      <button className="cremove" onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;