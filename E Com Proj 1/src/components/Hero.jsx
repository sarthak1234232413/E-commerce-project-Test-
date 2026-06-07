import React from "react";
import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Discover Premium Electronics
        </h1>

        <p>
          Explore the latest smartphones, laptops,
          smart watches, gaming accessories and more.
          Shop with confidence and enjoy unbeatable deals.
        </p>

        <button className="shop-btn">
          Shop Now
        </button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
          alt="Electronics"
        />
      </div>
    </section>
  );
}

export default Hero;