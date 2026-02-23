import React from "react";
import useCart from "../../context/useCart";

function OrderSummary() {
  const { cartItems } = useCart(); // get cart items from context

  // Ensure price and quantity are numbers
  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="col-sm-5 col-12">
      <div className="card p-3">
        <h4>Order Summary</h4>
        <hr />
        <p>
          Subtotal: <span className="float-end">${subtotal.toFixed(2)}</span>
        </p>
        <p>
          Shipping: <span className="float-end">${shipping.toFixed(2)}</span>
        </p>
        <hr />
        <h5>
          Total: <span className="float-end">${total.toFixed(2)}</span>
        </h5>
        <button className="btn btn-success w-100 mt-3">Checkout</button>
      </div>
    </div>
  );
}

export default OrderSummary;