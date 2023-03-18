import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import products from "../data";
import Product from "./Product";

const Slider = () => {
  const [lastItem, setLastItem] = useState(5);
  console.log(products);
  return (
    <div className="slider">
      <h1>TOP SELLED PRODUCTS</h1>
      <div className="slider-products">
        <IconContext.Provider value={{ size: "60px" }}>
          <BsFillArrowLeftCircleFill />
        </IconContext.Provider>
        <section>
          <div className="products">
            {products.slice(lastItem - 5, lastItem).map((product) => {
              return <Product product={product} />;
            })}
          </div>
        </section>
        <IconContext.Provider value={{ size: "60px" }}>
          <BsFillArrowRightCircleFill />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Slider;
