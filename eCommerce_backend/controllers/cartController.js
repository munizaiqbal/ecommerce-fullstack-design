const Cart = require("../models/CartModel");
const Product = require("../models/Product");

// GET CART
const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne().populate("items.product");

    if (!cart) {
      cart = await Cart.create({ items: [] });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD TO CART
const addToCart = async (req, res) => {
  const { productId } = req.body;

  try {
    let cart = await Cart.findOne();

    if (!cart) {
      cart = await Cart.create({ items: [] });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId,
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({ product: productId, quantity: 1 });
    }

    await cart.save();
    res.json(await cart.populate("items.product"));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// REMOVE FROM CART
const removeFromCart = async (req, res) => {
  const { productId } = req.params;

  try {
    let cart = await Cart.findOne();

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId,
    );

    await cart.save();
    res.json(await cart.populate("items.product"));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE QUANTITY (Increase / Decrease)
const updateQuantity = async (req, res) => {
  const { productId } = req.params;
  const { action } = req.body; // "inc" or "dec"

  try {
    let cart = await Cart.findOne();

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (action === "inc") {
      item.quantity += 1;
    }

    if (action === "dec") {
      item.quantity -= 1;

      // Remove item if quantity becomes 0
      if (item.quantity <= 0) {
        cart.items = cart.items.filter(
          (item) => item.product.toString() !== productId
        );
      }
    }

    await cart.save();
    res.json(await cart.populate("items.product"));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  updateQuantity,
};
