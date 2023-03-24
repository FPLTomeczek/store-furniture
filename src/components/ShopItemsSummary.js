import React from "react";
import { useShopContext } from "../context/ShopContext";
import { formatPrice } from "../helpers";

const ShopItemsSummary = () => {
  const { addedProducts, setAddedProducts, handleSettingTotalAmount } =
    useShopContext();

  const handleAddingRemovingProducts = (id, type) => {
    let product = addedProducts.find((product) => product.id === id);
    if (type === "add") {
      product.amount += 1;
    } else if (type === "remove") {
      if (product.amount - 1 > 0) {
        product.amount -= 1;
      }
    }
    console.log(product);
    setAddedProducts([...addedProducts]);
    handleSettingTotalAmount(addedProducts);
  };

  const removeItem = (id) => {
    const newProducts = addedProducts.filter((product) => product.id !== id);
    console.log(newProducts);
    setAddedProducts(newProducts);
    handleSettingTotalAmount(newProducts);
  };

  return (
    <div>
      {addedProducts.map((product) => {
        const { amount, image, price, name, id } = product;
        return (
          <div className="shop-item" key={id}>
            <div className="image-bg">
              <img src={image} alt="product"></img>
              <div className="bg"></div>
            </div>
            <p>{name}</p>
            <div className="add-remove-item">
              <div
                className="btn"
                onClick={() => handleAddingRemovingProducts(id, "remove")}
              >
                <i className="fa-solid fa-minus"></i>
              </div>
              <span>{amount}</span>
              <div
                className="btn"
                onClick={() => handleAddingRemovingProducts(id, "add")}
              >
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <h4>{formatPrice(price * amount)}</h4>
            <button className="remove-btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ShopItemsSummary;
