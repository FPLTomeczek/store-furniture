import React from "react";
import { useShopContext } from "../context/ShopContext";
import { formatPrice } from "../helpers";

const Checkout = () => {
  const { addedProducts, totalAmount, shipping } = useShopContext();

  return (
    <div className="checkout-container">
      {addedProducts.map((product) => {
        const { amount, price, name, id } = product;
        return (
          <div className="checkout-item" key={id}>
            <h4 className="checkout-item-name">{name}</h4>
            <h4>
              Price: {amount} X {formatPrice(price)}
            </h4>
          </div>
        );
      })}
      <div className="price-summary">
        <h3>Items Price: {formatPrice(totalAmount)}</h3>
        <h3 id="shipping">
          Shipping: {formatPrice(shipping)}
          <div className="underline"></div>
        </h3>
        <h3 className="total-price">
          Total Price: {formatPrice(totalAmount + shipping)}
        </h3>
      </div>
      <div className="btn-container">
        <button className="remove-btn">BUY</button>
      </div>
    </div>
  );
};

export default Checkout;
