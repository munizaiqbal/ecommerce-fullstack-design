import React from "react";
import useCart from "../../context/useCart";

function OrderDetails() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div className="col-sm-7 col-12 mb-4">
      {cartItems.map((item) => (
        <div className="card mb-3" key={item.id}>
          <div className="row g-0 align-items-center">
            <div className="col-md-3 d-flex justify-content-start p-2 align-items-start">
              <img
                src={item.image}
                className="img-fluid rounded-start"
                alt={item.name}
                style={{ width: "80px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>

                <div className="d-flex align-items-center mb-2">
                  {/* Quantity input */}
                  <input
                    type="number"
                    className="form-control me-2"
                    style={{ width: "80px" }}
                    value={item.quantity}
                    min={1}
                    onChange={(e) => {
                      const newQty = Number(e.target.value);
                      if (newQty > item.quantity) increaseQty(item.id);
                      else if (newQty < item.quantity) decreaseQty(item.id);
                    }}
                  />

                  {/* Remove button */}
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderDetails;