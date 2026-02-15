import React from 'react'
import heroBannerImg from '../../assets/Home/HeroBanner.png';
function HeroBanner() {
  return (
    <div className="position-relative  h-100 w-100 " >

  {/* Image */}
  <img 
    src={heroBannerImg} 
    alt="banner" 
    className="img-fluid h-100 w-100"
    style={{ objectFit: "cover" }}
  />

  {/* Overlay Content */}
  <div className="position-absolute top-50 start-0 translate-middle-y ps-4 text-white">
    <p className='m-0 text-dark'>Latest trending</p>
    <h2 className='text-dark'>Electronic items</h2>
    <button className="btn btn-light">Learn more</button>
  </div>

</div>

  )
}

export default HeroBanner