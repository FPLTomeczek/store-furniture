import React, { useEffect, useRef } from "react";
import FilterBtns from "./FilterBtns";
import { formatPrice } from "../helpers";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  filters,
  setFilters,
  updatePrice,
}) => {
  let modalContainer = useRef();

  //close modal
  useEffect(() => {
    let handler = (e) => {
      if (!modalContainer.current.contains(e.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="modal-background">
      <div className="modal-container" ref={modalContainer}>
        <FilterBtns
          filters={filters}
          setFilters={setFilters}
          isModalOpen={isModalOpen}
        />
        <div className="range-price modal-rp">
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
    </div>
  );
};

export default Modal;
