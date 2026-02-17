import React from 'react'

function ProductsPromoCard({product}) {
  return (
    <div className="d-flex align-items-center justify-content-center border p-2 w-100" >
  

      <div className="d-flex justify-content-start align-items-start flex-column w-50">
        <h6 className="card-title">{product.name}</h6>
        <p className="text-muted small m-0 pt-3">from</p>
        <p className="text-muted small ">${product.price}</p>
      </div>

         <div className="d-flex justify-content-end align-items-end ms-1" style={{ height: "80px" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxHeight: "100px",
            maxWidth: '70px',
            objectFit: "cover"
          }}
        />
      </div>
    </div>
  )
}

export default ProductsPromoCard