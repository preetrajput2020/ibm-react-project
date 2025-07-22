import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
