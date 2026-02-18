import React from "react";
import products from "../../data/products.js";
import ProductCard from "./ProductsSection";

function ProductsGrid() {
  return (
    <div className="container-xxl ">
      <div className="row g-2">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-sm-4 col-lg-3 d-flex">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsGrid;
