import React from "react";

const Parameters = ({ product }) => {
  const { size, material, weight } = product;

  return (
    <section>
      <div className="parameters">
        <div className="parameter">Size: {size}</div>
        <div className="parameter">Weight: {weight}</div>
        <div className="parameter">Material: {material}</div>
      </div>
    </section>
  );
};

export default Parameters;
