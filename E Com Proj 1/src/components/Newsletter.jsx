import React, { useState } from "react";
import "../css/Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }

    alert("Subscribed Successfully!");
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2>Subscribe To Our Newsletter</h2>

      <p>
        Get the latest offers, discounts and new
        product updates directly in your inbox.
      </p>

      <div className="newsletter-box">
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default Newsletter;