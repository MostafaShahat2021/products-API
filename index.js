require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const Product = require("./models/product.model");
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.send("<h1>Heloo World</h1>")
});

// Add a Product
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// get product by id
app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// update a product
app.put("/api/products/:id", async (req, res) => {
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
})

// delete a product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id)
    res.status(200).json({message: `${product.name} Deleted`, product})
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(port, () => console.log(`Server Running on port ${port}`))
  })
  .catch(err => console.log(err))