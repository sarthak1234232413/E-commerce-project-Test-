import React from "react";
import "../css/Categories.css";

function Categories() {
  const categories = [
    "Smartphones",
    "Laptops",
    "Headphones",
    "Smart Watches",
    "Gaming",
    "Accessories"
  ];

  return (
    <section className="categories">
      <h2 className="section-title">Shop By Category</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;