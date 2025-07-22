import React from "react";
import ProductCard from "../Productcard/Productcard";
import products from "../../data/products";
import "./Productlist.css";

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
