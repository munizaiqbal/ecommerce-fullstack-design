import products from "../../data/products.js";
import ProductsPromoCard from "./ProductsPromoCard.jsx";
import React from 'react'

function ProductsPromoCardGrid() {
  return (
  <div className="container-fluid px-0 ">
      <div className="row g-0">
        {products.map((product) => (
          <div key={product.id} className="d-none d-sm-flex col-sm-3  p-0 ">
            <ProductsPromoCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPromoCardGrid