import React from "react";
import Product from "./Product";

const Slider = ({ products, page }) => {
  let gapSize = 65;

  const slideLeft = () => {
    let width = document
      .getElementById("product-0")
      .getBoundingClientRect().width;
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - width - gapSize;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    let width = document
      .getElementById("product-0")
      .getBoundingClientRect().width;
    slider.scrollLeft = slider.scrollLeft + width + gapSize;
  };
  return (
    <div className="slider">
      <h1>
        {page === "home-page" ? "TOP SELLED PRODUCTS" : "SIMILAR PRODUCTS"}
      </h1>
      <div
        className={`slider-products ${
          page === "home-page" ? "home" : "single-product"
        }`}
      >
        <div className="btn" onClick={slideLeft}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <section>
          <div
            className={`products ${
              page === "home-page" ? "home" : "single-product"
            }`}
            id="slider"
          >
            {products.map((product, index) => {
              return (
                <Product
                  product={product}
                  key={index}
                  ind={index}
                  page="home"
                />
              );
            })}
          </div>
        </section>
        <div className="btn" onClick={slideRight}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Slider;
