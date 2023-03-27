import React, { useState } from "react";
import { formatPrice } from "../helpers";
import FilterBtns from "./FilterBtns";
import Modal from "./Modal";

const HeaderFilters = ({ filters, setFilters }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updatePrice = (e) => {
    setFilters({ ...filters, price: Number(e.target.value) });
  };
  return (
    <div className="header-filters">
      <input
        type="text"
        placeholder="Enter product name"
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        value={filters.name}
      />
      <FilterBtns filters={filters} setFilters={setFilters} />
      <i
        className="fa-solid fa-sliders"
        onClick={() => setIsModalOpen(true)}
      ></i>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          filters={filters}
          setFilters={setFilters}
          isModalOpen={isModalOpen}
          updatePrice={updatePrice}
        />
      )}
      <div className="range-price">
        <input
          type="range"
          min={0}
          max={filters.max_price}
          value={filters.price}
          onChange={updatePrice}
        />
        <h3>{formatPrice(filters.price)}</h3>
      </div>
    </div>
  );
};

export default HeaderFilters;
