import React from 'react'

function ProductsSection({product}) {
  return (
    
<div className="card  shadow-sm" style={{width:'300px',minHeight:'250px'}}>
     <div className="d-flex justify-content-center align-items-center" style={{ height: "180px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxHeight: "150px",
            maxWidth: "100%",
            objectFit: "contain"
          }}
        />
      </div>

      <div className="card-body">
        <h6 className="card-title">{product.name}</h6>
        <p className="text-muted small">{product.description}</p>
        <p className="fw-bold">${product.price}</p>
      </div>
    </div>

    
  )
}

export default ProductsSection