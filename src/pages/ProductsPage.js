import React, { useEffect, useState } from "react";
import HeaderFilters from "../components/HeaderFilters";
import ProductsAll from "../components/ProductsAll";
import data from "../data";
import { useLocation } from "react-router-dom";

const maxPrice = Math.max(...data.map((elem) => elem.price));

const ProductsPage = () => {
  const location = useLocation();
  const { item } = location.state || "";

  const [filters, setFilters] = useState({
    type: "all",
    price: maxPrice,
    name: "",
    max_price: maxPrice,
  });

  useEffect(() => {
    if (item) {
      setFilters({ ...filters, type: item });
    } else {
      setFilters({ ...filters, type: "all" });
    }
  }, [item]);

  return (
    <div>
      <HeaderFilters filters={filters} setFilters={setFilters} />
      <ProductsAll filters={filters} />
    </div>
  );
};

export default ProductsPage;
