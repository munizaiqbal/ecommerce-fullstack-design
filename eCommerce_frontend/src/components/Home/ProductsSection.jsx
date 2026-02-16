import React from 'react'

function ProductsSection({product}) {
  return (
    
<div className="card  shadow-sm" style={{minHeight:'350px'}}>
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ objectFit: "cover" }}
      />

      <div className="card-body">
        <h6 className="card-title">{product.name}</h6>
        <p className="text-muted small">{product.description}</p>
        <p className="fw-bold">${product.price}</p>
      </div>
    </div>

    
  )
}

export default ProductsSection