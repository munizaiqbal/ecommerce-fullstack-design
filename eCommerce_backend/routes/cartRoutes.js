const express = require("express");
const router = express.Router();
const {
  getCart,
  addToCart,
  removeFromCart,
  updateQuantity,
} = require("../controllers/cartController");

router.get("/", getCart);
router.put("/:productId", updateQuantity);
router.post("/", addToCart);
router.delete("/:productId", removeFromCart);

module.exports = router;