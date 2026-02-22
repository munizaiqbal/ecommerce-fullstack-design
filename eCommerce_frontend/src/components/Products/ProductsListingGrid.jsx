import React from "react";
import products from "../../data/products.js";
import ProductsListingCard from "./ProductsListingCard.jsx";

function ProductsGrid() {
  return (
    <div className="container-xxl ">
      <div className="row g-md-2">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-12 col-md-4  d-flex justify-content-center">
            <ProductsListingCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsGrid;
