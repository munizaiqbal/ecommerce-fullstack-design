import React from "react";
import ratings from '../../assets/Products/rating.png'

function ProductsListingCard({ product }) {
  return (
    <div
      className="card  shadow-sm  h-100 d-flex flex-row flex-md-column p-2"
      style={{  width: "100%"}}
    >
      <div
        className="d-flex justify-content-center p-0 align-items-center  "
        style={{ height: "130px" }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxHeight: "100px",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div className="card-body">
        <h6 className="">{product.name}</h6>
        <p className="fw-bold">${product.price}</p>
        <div className="ratings d-flex  gap-2 align-items-center">
          <img  style={{width:'60px'}} src={ratings} alt="" />
          <span  style={{color:'orange',fontSize:'14px',whiteSpace:'nowrap'}}>7.5</span>
          <span style={{fontSize:'14px',whiteSpace:'wrap'}} className="text-muted small">154 orders</span>
        </div>
          <span style={{color:'green',fontSize:'14px',whiteSpace:'nowrap'}}>Free delivery</span>

        <p className="text-muted small">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductsListingCard;
