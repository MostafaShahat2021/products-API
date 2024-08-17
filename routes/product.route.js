const express = require("express");
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/product.controller");
const router = express.Router();

//Get all Products
router.get("/", getProducts);

// Get single Product
router.get("/:id", getProduct);

// Add Product
router.post("/", addProduct);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;