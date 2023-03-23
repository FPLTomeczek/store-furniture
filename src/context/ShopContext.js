import React, { useContext, useState } from "react";

const ShopContext = React.createContext();

export const ShopContextProvider = ({ children }) => {
  const [shipping, setShipping] = useState(999);
  const [totalAmount, setTotalAmount] = useState(0);
  const [addedProducts, setAddedProducts] = useState([]);

  const handleSettingTotalAmount = (data) => {
    setTotalAmount(
      data.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.amount * currentValue.price,
        0
      )
    );
  };

  return (
    <ShopContext.Provider
      value={{
        totalAmount,
        shipping,
        setAddedProducts,
        addedProducts,
        // setTotalAmount,
        handleSettingTotalAmount,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => {
  return useContext(ShopContext);
};
