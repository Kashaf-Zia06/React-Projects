import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className="pcard">
      <p className="pname">{product.name}</p>
      <p className="pprice">${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;