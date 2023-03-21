import React, { useEffect, useState } from "react";
import data from "../data";
import Background from "./Background";

const SingleProductImage = ({ product }) => {
  const { image, size, material, weight, name } = product;
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [itemsAdded, setItemsAdded] = useState(1);
  console.log(product);

  const handleImageLoad = () => {
    console.log(
      document.getElementById("singleProductImage").getBoundingClientRect()
        .width,
      document.getElementById("singleProductImage").getBoundingClientRect()
        .height
    );
    setImageSize({
      width: document
        .getElementById("singleProductImage")
        .getBoundingClientRect().width,
      height: document
        .getElementById("singleProductImage")
        .getBoundingClientRect().height,
    });
  };

  return (
    <section>
      <div className="single-product-container">
        <div className="image-bg">
          <img
            src={image}
            alt="product"
            id="singleProductImage"
            onLoad={handleImageLoad}
          />
          <Background imageSize={imageSize} />
        </div>
        <div className="product-info">
          <div className="product-info-content">
            <div>
              <h2>{name}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat dolore odio numquam debitis? Quaerat, ipsa enim!
                Temporibus totam explicabo est nemo laborum delectus nostrum
                asperiores repellat, maiores, quas fuga saepe quaerat. Placeat
                sit incidunt veniam, voluptatibus eaque, officiis adipisci
                exercitationem cupiditate possimus dolores at non nisi quia
                nihil sint tempore?
              </p>
            </div>
            <div className="cart-btns">
              <div className="add-remove-item">
                <div className="btn">
                  <i class="fa-solid fa-minus"></i>
                </div>
                <span>{itemsAdded}</span>
                <div className="btn">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
              <button className="add-to-cart btn-primary">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductImage;
