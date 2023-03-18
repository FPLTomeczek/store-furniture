import React from "react";
import { formatPrice } from "../helpers";

const Product = ({ product }) => {
  const { image, name, price } = product;
  return (
    <div className="product">
      <img src={image} alt="product" />
      <h3>{name}</h3>
      <span>{formatPrice(price)}</span>
    </div>
  );
};

export default Product;
