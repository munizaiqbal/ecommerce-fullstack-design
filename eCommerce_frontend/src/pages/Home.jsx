import React from "react";
import MainNavbar from "../components/Home/MainNavbar";
import Footer from "../components/Home/Footer";
import BottomNavbar from "../components/Home/BottomNavbar";
import CategorySidebar from "../components/Home/CategorySidebar";

function Home() {
  return (
    <>
      <MainNavbar />
      <BottomNavbar />

      <div className="bg-body-secondary">
        <div className="container mt-4 bg-body-light">
          {/* top Section */}
          <div className="row">
            <div className="d-none d-md-block col-md-3">
              <CategorySidebar />
            </div>

            <div className="col-md-6">Hero Section</div>

            <div className="d-none d-md-block col-md-3">Promo Cards</div>
          </div>
  </div>
      </div>
          {/* Product Section */}
          <div className="mt-5">Products Section</div>

          {/* Promo Banner */}
          <div className="mt-5">Blue Banner</div>

          {/* More Products */}
          <div className="mt-5">More Products</div>
      

      <Footer />
    </>
  );
}

export default Home;
