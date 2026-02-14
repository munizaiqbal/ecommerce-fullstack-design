import React from 'react'
import MainNavbar from '../components/Home/MainNavbar';
import Footer from '../components/Home/Footer';
import BottomNavbar from '../components/Home/Footer';

function Home() {
  return (
   <>
    <MainNavbar />
     <BottomNavbar />
     
      <div className="container mt-4">
        {/* Top Section */}
        <div className="row">
          <div className="col-md-3">
            Sidebar
          </div>

          <div className="col-md-6">
            Hero Section
          </div>

          <div className="col-md-3">
            Promo Cards
          </div>
        </div>

        {/* Product Section */}
        <div className="mt-5">
          Products Section
        </div>

        {/* Promo Banner */}
        <div className="mt-5">
          Blue Banner
        </div>

        {/* More Products */}
        <div className="mt-5">
          More Products
        </div>

      </div>

      <Footer />
   
   
   </>
  )
}

export default Home