import{ useEffect, useState } from "react";
import ProductsPromoCard from "./ProductsPromoCard.jsx";
import React from 'react'

function ProductsPromoCardGrid() {
   const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return null;

  return (
  <div className="container-fluid px-0 ">
      <div className="row g-0 my-4">
        {products.slice(0, 12).map((product) => (
          <div key={product._id} className="d-none d-sm-flex col-sm-3  p-0 ">
            <ProductsPromoCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsPromoCardGrid