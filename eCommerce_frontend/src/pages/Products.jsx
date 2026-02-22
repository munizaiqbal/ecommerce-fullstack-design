import React from "react";
import MainNavbar from "../components/Home/MainNavbar";
import BottomNavbar from "../components/Home/BottomNavbar";
import Footer from "../components/Home/Footer";
import ProductsSidebar from "../components/Products/ProductsSidebar";
import ProductsListingGrid from "../components/Products/ProductsListingGrid";
import Newsletter from "../components/Home/Newsletter";


function Products() {
  return (
    <>
      <MainNavbar />
      <BottomNavbar />

      <div className="bg-body-secondary py-4">
        <div className="container-xxl">
          {/* Page Header */}
          <div className="d-flex  justify-content-between align-items-center mb-4">
            <h4 className="fw-bold ps-5">All Products</h4>

            <select
              className="form-select w-auto"
              style={{ cursor: "pointer" }}
            >
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="row products-layout">
            {/* Left Sidebar */}
            <div className="col-3 products-sidebar">
              <ProductsSidebar />
            </div>

            {/* Right Grid */}
            <div className="col-12 col-sm-9 products-grid  ">
              <ProductsListingGrid />
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12  d-flex gap-2 mt-3 bg-body-secondary p-4 justify-content-center">
            <Newsletter />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
