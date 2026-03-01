import React from 'react'
import { useNavigate } from "react-router-dom";

function ProductsSection({product}) {
  const navigate = useNavigate();
   const handleClick = () => {
    navigate("/products");
  };
  return (

      <div
      onClick={handleClick}
      className="card shadow-sm h-100"
      style={{ width: "270px", cursor: "pointer" }}
    >
    
<div className="card  shadow-sm  h-100" style={{width:'270px'}} >
     <div className="d-flex justify-content-center p-0 align-items-center" style={{ height: "130px" }}>
        <img
         src={`http://localhost:5000${product.image}`}
          alt={product.name}
          style={{
            maxHeight: "100px",
            maxWidth: "100%",
            objectFit: "contain"
          }}
        />
      </div>

      <div className="card-body">
        <p className="fw-bold">${product.price}</p>
        <h6 className="text-muted small m-0">{product.name}</h6>
        <p className="text-muted small">{product.description}</p>
        
      </div>
    </div>
</div>
    
  )
}

export default ProductsSection