import React from "react";

const Newsletter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="newsletter">
      <h2>Newsletter</h2>
      <form>
        <input
          type="email"
          id="newsletter-email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
