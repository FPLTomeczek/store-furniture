import data from "../data";
import React from "react";
import Product from "./Product";

const ProductsAll = ({ filters }) => {
  return (
    <section>
      <div className="all-products">
        {data
          .filter(
            (elem) => elem.type === filters.type || filters.type === "all"
          )
          .filter((elem) =>
            elem.name.toLowerCase().includes(filters.name.toLowerCase())
          )
          .filter((elem) => elem.price <= filters.price)
          .map((e) => {
            return (
              <Product product={e} ind={e.name} page="products" key={e.name} />
            );
          })}
      </div>
    </section>
  );
};

export default ProductsAll;
