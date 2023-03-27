import React from "react";
import data from "../data";

let filtersData = ["all", ...new Set(data.map((element) => element.type))];

const FilterBtns = ({ setFilters, filters, isModalOpen }) => {
  return (
    <div className={`filter-btns ${isModalOpen && "modal"}`}>
      {filtersData.map((filter) => {
        return (
          <button
            className={`filter-btn ${
              filters.type === filter ? "active" : null
            }`}
            key={filter}
            onClick={() => setFilters({ ...filters, type: filter })}
          >
            {filter.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBtns;
