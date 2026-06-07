import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">
          <h3>ShopSphere</h3>

          <p>
            Your trusted destination for
            premium electronics, gadgets
            and accessories.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Categories</a>
          <a href="#">Deals</a>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>Email: support@shopsphere.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Mumbai, India</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 ShopSphere. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;