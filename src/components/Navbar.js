import React from "react";
import logo from "../images/logos/mammonous-logo.png";

const Navbar = () => {
  return (
    <nav>
      <section>
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>Products</li>
          <li>Shop</li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
