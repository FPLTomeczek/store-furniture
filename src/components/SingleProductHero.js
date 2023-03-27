import React, { useEffect, useState } from "react";
import Background from "./Background";
import { formatPrice } from "../helpers";
import { useShopContext } from "../context/ShopContext";

const SingleProductHero = ({ product }) => {
  const { handleSettingTotalAmount } = useShopContext();
  const { image, name, price, id } = product;
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [itemsAdded, setItemsAdded] = useState(1);
  const [isItemAdded, setIsItemAdded] = useState({ type: null, value: null });
  const [clickSwitcher, setClickSwitcher] = useState(false);
  const { setAddedProducts, addedProducts } = useShopContext();

  const handleImageLoad = () => {
    const image = document.getElementById("singleProductImage");
    if (image) {
      setImageSize({
        width: image.getBoundingClientRect().width,
        height: image.getBoundingClientRect().height,
      });
    }
  };
  useEffect(() => {
    const imageBg = document.querySelector(".image-bg");
    new ResizeObserver(handleImageLoad).observe(imageBg);
  }, []);

  useEffect(() => {
    setIsItemAdded({ type: null, value: null });
  }, [product]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsItemAdded({ type: false, value: null });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [clickSwitcher]);

  const handleAddingProducts = () => {
    const product = addedProducts.find((product) => product.id === id);
    setIsItemAdded({ type: true, value: itemsAdded });
    setClickSwitcher(!clickSwitcher);
    if (product) {
      product.amount += itemsAdded;
      handleSettingTotalAmount(addedProducts);
      setAddedProducts([...addedProducts]);
    } else {
      const newProducts = [
        ...addedProducts,
        {
          amount: itemsAdded,
          image: image,
          price: price,
          name: name,
          id,
        },
      ];
      setAddedProducts(newProducts);
      handleSettingTotalAmount(newProducts);
    }
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
              <div className="add-remove-price-item">
                <div className="add-remove">
                  <div
                    className="btn"
                    onClick={() =>
                      setItemsAdded((prev) => {
                        if (prev - 1 > 0) {
                          return prev - 1;
                        }
                        return prev;
                      })
                    }
                  >
                    <i className="fa-solid fa-minus"></i>
                  </div>
                  <span>{itemsAdded}</span>
                  <div
                    className="btn"
                    onClick={() => setItemsAdded((prev) => prev + 1)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <span className="price">{formatPrice(price * itemsAdded)}</span>
              </div>
              <button
                className="add-to-cart btn-primary"
                onClick={handleAddingProducts}
              >
                ADD TO CART
              </button>
            </div>
            <span className="item-added">
              {isItemAdded.type
                ? isItemAdded.value > 1
                  ? "Items added to cart"
                  : "Item added to cart"
                : null}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductHero;
