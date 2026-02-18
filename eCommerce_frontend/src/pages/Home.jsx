import React from "react";
import MainNavbar from "../components/Home/MainNavbar";
import Footer from "../components/Home/Footer";
import BottomNavbar from "../components/Home/BottomNavbar";
import CategorySidebar from "../components/Home/CategorySidebar";
import HeroBanner from "../components/Home/HeroBanner";
import PromoCards from "../components/Home/PromoCards";
import Avatar from "../assets/Home/Avatar.png";
import LeftPromoCards from "../components/Home/LeftPromoCards";
import ProductsGrid from "../components/Home/ProductsGrid";
import leftCard from "../assets/Home/leftCard1.png";
import leftCard2 from "../assets/Home/leftCard2.png";
import BlogSection from "../components/Home/BlogSection";
import ProductsPromoCardsGrid from "../components/Home/ProductsPromoCardGrid";
import ServicesList from "../components/Home//ServicesList";




function Home() {
  return (
    <>
      <MainNavbar />
      <BottomNavbar />

      <div className="bg-body-secondary ">
        <div className="container-xxl ">
          {/* top Section */}
          <div className="row  " style={{ minHeight: "400px" }}>
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
      <div className=" container-xxl ">
        <div className="row">
          <div className="col-md-3 d-flex flex-column justify-content-centre align-items-center gap-3">
            <LeftPromoCards
              bgColor="#FFE8BA66"
              bgImage={leftCard}
              description="Home and outdoor"
              button={{
                text: "Source Now",
                variant: "light",
                onClick: () => {
                  alert("sourced");
                },
              }}
            />
            <LeftPromoCards
              bgColor="#FFFFFF4D"
              bgImage={leftCard2}
              description="Consumer electronics and gadgets"
              button={{
                text: "Source Now",
                variant: "light",
                onClick: () => {
                  alert("sourced");
                },
              }}
            />
          </div>

          <div className="col-12 col-md-9">
            <ProductsPromoCardsGrid />
          </div>
        </div>
        <div className="flex-grow-2"></div>
      </div>

      {/* Promo Banner */}
      <div className=" container-xxl">
        <BlogSection />
      </div>

      {/* More Products */}
      <div className="mt-0">
        <h3 className="py-3 px-3">Recommended Items</h3>
        <ProductsGrid />
      </div>

      <div className="container-xxl">
        <h3 className="py-3 px-3">Our extra services</h3>
        <div className="row">
          <div className="col-12 d-flex gap-2">
           <ServicesList  />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
