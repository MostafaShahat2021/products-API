const express = require("express");
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/product.controller");
const router = express.Router();


router.route("/")
  .get(getProducts)
  .post(addProduct);

// Get single Product
router.route("/:id")
.get(getProduct)
.put(updateProduct)
.delete(deleteProduct);

module.exports = router;