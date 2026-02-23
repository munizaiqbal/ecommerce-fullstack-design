import React from "react";
import MainNavbar from "../components/Home/MainNavbar";
import BottomNavbar from "../components/Home/BottomNavbar";
import Footer from "../components/Home/Footer";
import ProductsSidebar from "../components/Products/ProductsSidebar";
import ProductsListingGrid from "../components/Products/ProductsListingGrid";
import Newsletter from "../components/Home/Newsletter";
import { useState ,useEffect} from "react";
import { useLocation } from "react-router-dom";

function Products() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState(""); // "New", "Used", etc.
  const [selectedRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortOption, setSortOption] = useState("Featured");
   const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(searchQuery);

  useEffect(() => {
    // Update search term if query changes (user navigates)
    setSearchTerm(searchQuery);
  }, [searchQuery]);

  // Then pass `searchTerm` to your grid component for filtering

  return (
    <>
      <MainNavbar showSearch={true} />
      <BottomNavbar />

      <div className="bg-body-secondary py-4">
        <div className="container-xxl">
          {/* Page Header */}
          <div className="d-flex  justify-content-between align-items-center mb-4">
            <h4 className="fw-bold ps-5">All Products</h4>

            <select
              className="form-select w-auto"
              style={{ cursor: "pointer" }}
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="Featured">Sort by: Featured</option>
              <option value="LowToHigh">Price: Low to High</option>
              <option value="HighToLow">Price: High to Low</option>
            </select>
          </div>

          <div className="row products-layout">
            {/* Left Sidebar */}
            <div className="col-3 products-sidebar">
              <ProductsSidebar
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedCondition={selectedCondition}
                setSelectedCondition={setSelectedCondition}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
            </div>

            {/* Right Grid */}
            <div className="col-12 col-sm-9 products-grid  ">
              <ProductsListingGrid
                selectedCategories={selectedCategories}
                selectedBrands={selectedBrands}
                selectedCondition={selectedCondition}
                selectedRating={selectedRating}
                priceRange={priceRange}
                 sortOption={sortOption} 
                  searchTerm ={ searchTerm }
              />
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
