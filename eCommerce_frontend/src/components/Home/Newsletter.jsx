import React from 'react'
import { FaEnvelope } from "react-icons/fa";

function Newsletter() {
  return (
   <div className="d-flex flex-column  text-dark align-items-center  ">
    <h2>Subscribe on our newsletter</h2>
    <p>Get daily news on upcoming offers from many suppliers all over the world</p>
<div className="inputs d-flex flex-column flex-md-row gap-2 position-relative w-100">
   <div className="position-relative w-100">
  <FaEnvelope
        className="position-absolute  "
        style={{
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "gray"
        }}
      />
<input type='email' placeholder='Email' className='form-control' style={{paddingLeft:'35px'}} />
</div>
<button className='btn btn-primary'>Subscribe</button>
</div>
   </div>
  )
}

export default Newsletter