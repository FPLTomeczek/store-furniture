import React from "react";
import logo from "../images/logos/mammonous-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <section>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <li>Shop</li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
