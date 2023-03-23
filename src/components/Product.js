import React from "react";
import { formatPrice } from "../helpers";
import { Link } from "react-router-dom";

const Product = ({ product, ind, page }) => {
  const { image, name, price, id } = product;
  return (
    <Link to={`/products/${id}`}>
      <div className="product" id={`product-${ind}`}>
        <img src={image} alt="product" />
        {name && name.length > 12 && page === "home" ? (
          <h3>{name.substring(0, 9)}..</h3>
        ) : (
          <h3>{name}</h3>
        )}
        <span>{formatPrice(price)}</span>
      </div>
    </Link>
  );
};

export default Product;
