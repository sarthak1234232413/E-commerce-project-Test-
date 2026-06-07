import React from "react";
import ProductCard from "./ProductCard";
import "../css/Products.css";

function Products() {

  const featuredProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
      name: "iPhone 15 Pro",
      price: 129999,
      rating: 4.9
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      name: "MacBook Air",
      price: 99999,
      rating: 4.8
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      name: "Wireless Headphones",
      price: 8999,
      rating: 4.7
    }
  ];

  const bestSellers = [
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
      name: "Smart Watch",
      price: 12999,
      rating: 4.8
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500",
      name: "Gaming Controller",
      price: 4999,
      rating: 4.6
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500",
      name: "Bluetooth Speaker",
      price: 3499,
      rating: 4.5
    }
  ];

  const newArrivals = [
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
      name: "Gaming Laptop",
      price: 119999,
      rating: 4.9
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      name: "Premium Smart Watch",
      price: 15999,
      rating: 4.7
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
      name: "Noise Cancelling Headphones",
      price: 14999,
      rating: 4.8
    }
  ];

  return (
    <section className="products">

      <h2 className="section-title">
        Featured Products
      </h2>

      <div className="products-grid">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>

      <h2 className="section-title">
        Best Sellers
      </h2>

      <div className="products-grid">
        {bestSellers.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>

      <h2 className="section-title">
        New Arrivals
      </h2>

      <div className="products-grid">
        {newArrivals.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>

    </section>
  );
}

export default Products;