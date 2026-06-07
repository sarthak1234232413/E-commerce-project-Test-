import React, { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [cartCount] = useState(3);

  return (
    <nav className="navbar">
      <div className="logo">
        ShopSphere
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Deals</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="nav-right">
        <input
          type="text"
          placeholder="Search products..."
          className="search-box"
        />

        <button className="cart-btn">
          🛒 Cart

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </button>

        <button className="login-btn">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;