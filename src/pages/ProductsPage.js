import React, { useState } from "react";
import FilterBtns from "../components/FilterBtns";
import HeaderFilters from "../components/HeaderFilters";
import ProductsAll from "../components/ProductsAll";
import data from "../data";

const maxPrice = Math.max(...data.map((elem) => elem.price));

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    type: "all",
    price: maxPrice,
    name: "",
    max_price: maxPrice,
  });

  return (
    <div>
      <HeaderFilters filters={filters} setFilters={setFilters} />
      <ProductsAll filters={filters} />
    </div>
  );
};

export default ProductsPage;
