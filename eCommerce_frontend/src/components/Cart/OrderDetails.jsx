import React from "react";
import useCart from "../../context/useCart";

function OrderDetails() {
    const { cartItems, updateQuantity } = useCart();

 const handleUpdate = (productId, action) => {
   console.log("Updating product with ID:", productId, "Action:", action);
  updateQuantity(productId, action);
};
if (!cartItems.length) {
    return <p>Your cart is empty</p>;
  }
  return (
    <div className="col-sm-7 col-12 mb-4">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div className="card mb-3" key={item.product._id}>
            <div className="row g-0 align-items-center">
              <div className="col-md-3 p-2">
                <img
                 src={`http://localhost:5000${item.product.image}`}
                  className="img-fluid rounded-start"
                  alt={item.product.name}
                  style={{ width: "80px", objectFit: "cover" }}
                />
              </div>

              <div className="col-md-9">
                <div className="card-body">
                  <h5>{item.product.name}</h5>
                  <p>Price: ${item.product.price}</p>
                  <p>
                    Quantity:
                    <button
                      className="btn btn-sm btn-secondary mx-2"
                      onClick={() => handleUpdate(item.product._id, "dec")}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-sm btn-secondary mx-2"
                      onClick={() => handleUpdate(item.product._id, "inc")}
                    >
                      +
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderDetails;
