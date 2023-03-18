import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Newsletter</h2>
      <form>
        <input
          type="email"
          id="newsletter-email"
          placeholder="Enter your email"
        />
        <button type="button" className="btn-primary">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
