import React from "react";
import "../css/Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      review:
        "Amazing shopping experience. Products arrived quickly and quality was excellent.",
    },
    {
      id: 2,
      name: "Priya Patel",
      review:
        "Best electronics store I have used. Great customer support and offers.",
    },
    {
      id: 3,
      name: "Aman Verma",
      review:
        "Fast delivery, genuine products and very competitive prices.",
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Customers Say</h2>

      <div className="testimonial-grid">
        {reviews.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="stars">⭐⭐⭐⭐⭐</div>

            <p>{item.review}</p>

            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;