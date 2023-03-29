import React from "react";

const Background = ({ imageSize }) => {
  return (
    <div
      className="bg"
      style={{ width: imageSize.width, height: imageSize.height }}
    ></div>
  );
};

export default Background;
