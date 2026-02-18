import React from "react";

function Services({ icon, bgImage, description }) {
  return (
    <div
      className="services position-relative d-flex flex-column rounded-3 border"
      style={{maxWidth: '250px'}}
    >
      <div className="image overflow-hidden">
        <img
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
          src={bgImage}
          alt=""
        />
          <div
        className="position-absolute p-2 bg-secondary-subtle rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "30px", height: "30px", top: "90px", left: '200px', zIndex:100 }}
      >
        <img src={icon} alt="" />
      </div>
      </div>
      <div className="content ">
        <p className="mt-2 p-2" style={{maxWidth:'230px',  whiteSpace: 'wrap'}}>{description}</p>
      </div>
    
    </div>
  );
}

export default Services;
