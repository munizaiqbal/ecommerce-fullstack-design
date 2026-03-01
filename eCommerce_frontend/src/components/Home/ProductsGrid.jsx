import React from "react";
import  { useEffect, useState } from "react";
import ProductsSection from "./ProductsSection";

function ProductsGrid() {
   const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Something went wrong");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h4 className="text-center mt-5">Loading...</h4>;
  if (error) return <h4 className="text-center mt-5">{error}</h4>;

  return (
    <div className="container-xxl ">
      <div className="row g-2">
        {products.map((product) => (
          <div key={product._id} className="col-12 col-sm-5  col-md-4 col-lg-3 d-flex justify-content-center">
            <ProductsSection product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsGrid;
