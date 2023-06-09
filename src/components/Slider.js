import React from "react";
import Product from "./Product";
import { phoneWidth } from "../constants";

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

  if (products.length === 0) {
    return (
      <div className="slider">
        <h1>
          {page === "home-page" ? "TOP SELLED PRODUCTS" : "SIMILAR PRODUCTS"}
        </h1>
        <h3 style={{ textAlign: "center" }}>... Products Not Found</h3>
      </div>
    );
  }
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
        {window.outerWidth > phoneWidth ? (
          products.length > 5 ? (
            <div className="btn" onClick={slideLeft}>
              <i className="fa-solid fa-arrow-left"></i>
            </div>
          ) : null
        ) : products.length > 1 ? (
          <div className="btn" onClick={slideLeft}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
        ) : null}
        {/* {products.length > 5 ? (
          <div className="btn" onClick={slideLeft}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
        ) : null} */}

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
        {window.outerWidth > phoneWidth ? (
          products.length > 5 ? (
            <div className="btn" onClick={slideRight}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          ) : null
        ) : products.length > 1 ? (
          <div className="btn" onClick={slideRight}>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Slider;
