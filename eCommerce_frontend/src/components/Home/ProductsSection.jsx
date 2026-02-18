import React from 'react'

function ProductsSection({product}) {
  return (
    
<div className="card  shadow-sm" style={{width:'300px',minHeight:'150px'}}>
     <div className="d-flex justify-content-center p-0 align-items-center" style={{ height: "130px" }}>
        <img
          src={product.image}
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

    
  )
}

export default ProductsSection