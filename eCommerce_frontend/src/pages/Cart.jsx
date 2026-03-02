import React from "react";
import MainNavbar from "../components/Home/MainNavbar";
import OrderSummary from "../components/Cart/OrderSummary";
import OrderDetails from "../components/Cart/OrderDetails";
import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState(null);

  useEffect(() => {
   const loadCart = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/cart");

    if (!res.ok) {
      throw new Error("Failed to fetch cart");
    }

    const data = await res.json();
    setCart(data);
  } catch (error) {
    console.log("Error fetching cart:", error.message);
  }
};

    loadCart();
  }, []);
  if (!cart) return <p>Loading...</p>;

  return (
    <div className="container-xxl">
      <MainNavbar showSearch={false} />
      <h2 className="my-4">My Cart</h2>
      <div className="row">
        <OrderDetails cart={cart}   setCart={setCart}  />
        <OrderSummary cart={cart} />
      </div>
    </div>
  );
}

export default Cart;
