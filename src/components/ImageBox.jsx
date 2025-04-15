import React from "react";
import "./imagebox.css";
const ImageBox = ({ image, title }) => {
  return (
    <div className="image-box">
      <img src={image} alt="Creation" />
      <span>{title}</span>
    </div>
  );
};

export default ImageBox;
