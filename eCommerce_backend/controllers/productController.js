const Product = require("../models/Product");


// ==========================================
// @desc    Get all products (with filtering)
// @route   GET /api/products
// ==========================================
const getProducts = async (req, res) => {
  try {
    const { category, condition, minRating } = req.query;

    let filter = {};

    // Filtering by category
    if (category) {
      filter.category = category;
    }

    // Filtering by condition
    if (condition) {
      filter.condition = condition;
    }

    // Filtering by minimum rating
    if (minRating) {
      filter.rating = { $gte: Number(minRating) };
    }

    const products = await Product.find(filter);

    res.json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ==========================================
// @desc    Get single product by ID
// @route   GET /api/products/:id
// ==========================================
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ==========================================
// @desc    Create new product
// @route   POST /api/products
// ==========================================
const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      image,
      description,
      category,
      condition,
      rating,
    } = req.body;

    const product = new Product({
      name,
      price,
      image,
      description,
      category,
      condition,
      rating,
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// ==========================================
// @desc    Update product
// @route   PUT /api/products/:id
// ==========================================
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const {
      name,
      price,
      image,
      description,
      category,
      condition,
      rating,
    } = req.body;

    // Update fields
    product.name = name || product.name;
    product.price = price || product.price;
    product.image = image || product.image;
    product.description = description || product.description;
    product.category = category || product.category;
    product.condition = condition || product.condition;
    product.rating = rating || product.rating;

    const updatedProduct = await product.save();

    res.json(updatedProduct);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// ==========================================
// @desc    Delete product
// @route   DELETE /api/products/:id
// ==========================================
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();

    res.json({ message: "Product removed successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};