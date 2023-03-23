import React from "react";
import { useShopContext } from "../context/ShopContext";
import ShopItemsSummary from "../components/ShopItemsSummary";
import Checkout from "../components/Checkout";
import ShopAdvertise from "../components/ShopAdvertise";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const { addedProducts } = useShopContext();

  return (
    <div className="shop-container">
      <div className="shop-advertise">
        <ShopAdvertise />
      </div>
      <div className="shop-items-summary">
        {addedProducts.length <= 0 ? (
          <div className="no-products-info">
            <h2>No Products Added To Cart</h2>
            <Link to="/products">
              <button className="btn-primary">Go Back To Products</button>
            </Link>
          </div>
        ) : (
          <ShopItemsSummary />
        )}
      </div>
      <div className="checkout">
        <Checkout />
      </div>
    </div>
  );
};

export default ShopPage;
