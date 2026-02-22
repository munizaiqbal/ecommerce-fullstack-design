import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function ProductsSidebar() {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);
  const totalStars = 5;

  const categories = [
    "Smartphones",
    "Laptops",
    "Cameras",
    "Accessories",
    "Tablets",
    "Headphones",
  ];

  const brands = ["Apple", "Samsung", "Sony", "Canon", "Dell", "HP"];
  return (
    <div className="bg-white p-3 border d-none d-sm-block rounded-3" style={{minWidth:'170px'}}>
      {/* Categories */}
      <div className="mb-4">
        <h6 className="fw-bold">Categories</h6>
        <ul className="list-unstyled">
          {(showAllCategories ? categories : categories.slice(0, 4)).map(
            (cat, index) => (
              <li key={index} className="mb-2">
                <input type="checkbox" className="me-2" />
                {cat}
              </li>
            ),
          )}
        </ul>
        <button
          className="btn btn-link p-0 text-decoration-none"
          onClick={() => setShowAllCategories(!showAllCategories)}
        >
          {showAllCategories ? "See Less" : "See All"}
        </button>
      </div>

      {/* Brands */}
      <div className="mb-4">
        <h6 className="fw-bold">Brands</h6>
        <ul className="list-unstyled">
          {(showAllBrands ? brands : brands.slice(0, 4)).map((brand, index) => (
            <li key={index} className="mb-2">
              <input type="checkbox" className="me-2" />
              {brand}
            </li>
          ))}
        </ul>
        <button
          className="btn btn-link p-0 text-decoration-none"
          onClick={() => setShowAllBrands(!showAllBrands)}
        >
          {showAllBrands ? "See Less" : "See All"}
        </button>
      </div>

      {/* Condition */}
      <div className="mb-4">
        <h6 className="fw-bold">Condition</h6>
        <ul className="list-unstyled">
          <li className="mb-2">
            <input type="radio" className="me-2" />
            New
          </li>
          <li className="mb-2">
            <input type="radio" className="me-2" />
            Used
          </li>
          <li className="mb-2">
            <input type="radio" className="me-2" />
            Refurbished
          </li>
        </ul>
      </div>

      {/* Ratings */}
      <div className="d-flex flex-column gap-2 mb-4">
        <h6 className="fw-bold">Ratings</h6>

        {[5, 4, 3, 2, 1].map((yellowStars) => (
          <label
            key={yellowStars}
            className="d-flex align-items-center cursor-pointer"
          >
            <input
              type="radio"
              name="rating"
              value={yellowStars}
              checked={selectedRating === yellowStars}
              onChange={() => setSelectedRating(yellowStars)}
              className="me-2"
            />
            <div className="d-flex">
              {Array.from({ length: totalStars }, (_, index) => (
                <FaStar
                  key={index}
                  color={index < yellowStars ? "#FFD700" : "#e0e0e0"}
                  size={16}
                  style={{ marginRight: "2px" }}
                />
              ))}
            </div>
          </label>
        ))}
      </div>
      {/* Price */}
      <div className="mb-4">
        <h6 className="fw-bold">Price Range</h6>
        <input type="range" className="form-range" min="0" max="2000" />
        <div className="d-flex justify-content-between">
          <small>$0</small>
          <small>$2000</small>
        </div>
      </div>
    </div>
  );
}

export default ProductsSidebar;
