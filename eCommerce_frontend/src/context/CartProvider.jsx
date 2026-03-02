import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart from backend
  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/cart");
      const data = await res.json();
      setCartItems(data.items || []);
    } catch (error) {
      console.log("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Add item
  const addToCart = async (productId) => {
    await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    fetchCart();
  };

  // Remove item
  const removeFromCart = async (productId) => {
    await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: "DELETE",
    });

    fetchCart();
  };

  // Update quantity
  const updateQuantity = async (productId, action) => {
    await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action }), // "inc" or "dec"
    });

    fetchCart();
  };

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;