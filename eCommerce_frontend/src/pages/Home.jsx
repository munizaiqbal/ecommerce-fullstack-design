import React from "react";
import MainNavbar from "../components/Home/MainNavbar";
import Footer from "../components/Home/Footer";
import BottomNavbar from "../components/Home/BottomNavbar";
import CategorySidebar from "../components/Home/CategorySidebar";
import HeroBanner from "../components/Home/HeroBanner";
import PromoCards from "../components/Home/PromoCards";
import Avatar from "../assets/Home/Avatar.png";
function Home() {
  return (
    <>
      <MainNavbar />
      <BottomNavbar />

      <div className="bg-body-secondary ">
        <div className="container-xxl ">
          {/* top Section */}
          <div className="row  "  style={{ minHeight: "400px" }}>
            <div className=" col-12 col-md-3 d-none d-md-block">
              <CategorySidebar />
            </div>

            <div className="col-12 col-md-9 col-lg-6 p-0 overflow-hidden">
              <HeroBanner />
            </div>

            <div className=" col-12 d-none d-lg-block col-lg-3   mt-3 mt-md-0 ">
              <div className="d-flex flex-column flex-wrap gap-2 justify-content-center">
                <PromoCards
                  bgColor="#55BDC3"
                  Image={Avatar}
                  description="Hey User!Lets get started"
                  buttons={[
                    {
                      text: "Join Now",
                      variant: "primary",
                      onClick: () => alert("Start "),
                    },
                    {
                      text: "Log in",
                      variant: "secondary",
                      onClick: () => alert("Logged in"),
                    },
                  ]}
                />
                <PromoCards
                  bgColor="#F38332"
                  description="Get US $10 off with a new supplier"
                />
                <PromoCards
                  bgColor="#55BDC3"
                  description="Send quotes with supplier preferences"
                />
              </div>
            </div>
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
