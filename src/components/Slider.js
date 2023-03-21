import React from "react";
import products from "../data";
import Product from "./Product";

const Slider = () => {
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
      <h1>TOP SELLED PRODUCTS</h1>
      <div className="slider-products">
        <div className="btn" onClick={slideLeft}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <section>
          <div className="products" id="slider">
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
