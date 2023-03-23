import React, { useEffect, useState } from "react";
import logo from "../images/logos/mammonous-logo.png";
import { Link } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { addedProducts } = useShopContext();
  const [shopItems, setShopItems] = useState();

  useEffect(() => {
    setShopItems(
      addedProducts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        0
      )
    );
  }, [addedProducts]);

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
          <Link to="/shop">
            <li>
              <span className="shop">Shop</span>
              <span className="number">{shopItems}</span>
            </li>
          </Link>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
