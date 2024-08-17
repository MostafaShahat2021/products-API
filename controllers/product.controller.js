const Product = require("../models/product.model");

// Get all Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Get single Product
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Add Product
const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(500).json({ message: message.error })
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id)
    res.status(200).json({ message: `${product.name} Deleted`, product })
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
}