import React from "react";
import "./style.css";
const WishBtnCards = ({
  width = "36px",
  height = "52px",
  position = "absolute",
  top = "0",
  left = "0",
  bgColor,
  ...res
}) => {
  return (
    <div
      className="btn"
      style={{
        width: width,
        height: height,
        position: position,
        top: top,
        left: left,
        backgroundColor: bgColor && bgColor,
      }}
      {...res}
    >
      <span className="icon">+</span>
    </div>
  );
};

export default WishBtnCards;
