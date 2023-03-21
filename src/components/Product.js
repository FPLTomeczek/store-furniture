import React from "react";
import { formatPrice } from "../helpers";

const Product = ({ product, ind, page }) => {
  const { image, name, price } = product;
  return (
    <div className="product" id={`product-${ind}`}>
      <img src={image} alt="product" />
      {name.length > 12 && page === "home" ? (
        <h3>{name.substring(0, 9)}..</h3>
      ) : (
        <h3>{name}</h3>
      )}
      <span>{formatPrice(price)}</span>
    </div>
  );
};

export default Product;
