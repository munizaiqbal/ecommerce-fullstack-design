import React from "react";
import products from "../../data/products.js";
import ProductsListingCard from "./ProductsListingCard.jsx";

function ProductsListingGrid({
  selectedCategories = [],
  selectedBrands = [],
  selectedCondition = "",
  selectedRating = null,
  priceRange = [0, 2000],
  sortOption = "Featured",
   searchTerm =""
}) {
  // Filter products based on sidebar state
  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const matchBrand =
      selectedBrands.length === 0 || selectedBrands.includes(p.brand);
    const matchCondition =
      !selectedCondition || p.condition === selectedCondition;
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchRating =
      !selectedRating || (p.rating && p.rating >= selectedRating);

       // Add searchTerm filter
  const matchSearch =
    !searchTerm ||
    p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchBrand && matchCondition && matchPrice && matchRating && matchSearch;
  });

  // Apply sorting
  if (sortOption === "LowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "HighToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } // Featured can keep original order
  return (
    <div className="container-xxl">
      <div className="row g-md-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-12 col-md-4 d-flex justify-content-center"
            >
              <ProductsListingCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-5">
            <p>No products found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsListingGrid;