import React from "react";
import "../css/ProductCard.css";

function ProductCard({
  image,
  name,
  price,
  rating
}) {
  const handleCart = () => {
    alert(`${name} added to cart`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />

      <div className="product-info">
        <h3>{name}</h3>

        <p className="price">
          ₹{price}
        </p>

        <p className="rating">
          ⭐ {rating}
        </p>

        <button onClick={handleCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;