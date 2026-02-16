import React from 'react'

function LeftPromoCards({bgColor, bgImage,description,button}) {
  return (
    <div className=" p-2 d-flex justify-content-center align-items-start flex-column d-none d-md-flex" style={{ 
        minHeight: "200px",
        width:'200px',
      backgroundColor: bgColor,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"}}>
          <p>{description}</p>
<button
className={`btn btn-${button?.variant || 'light'}`} onClick={button?.onClick}
>{button?.text}</button>
    </div>
  )
}

export default LeftPromoCards