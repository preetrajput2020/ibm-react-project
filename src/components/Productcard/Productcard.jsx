import React from "react";
import "./Productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="artisan">{product.artisan}</p>
        <p className="story">{product.story}</p>
      </div>
    </div>
  );
};

export default ProductCard;
