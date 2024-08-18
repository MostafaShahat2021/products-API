require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const port = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute)

app.get("/", (req, res) => {
  res.send("<h1>Heloo World</h1>")
});

app.get("*", (req, res) => {
  res.json({"messaage": "Resurce not exist!"})
})

const connection = async () => {
  await mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB Connected");
      app.listen(port, () => console.log(`Server Running on port ${port}`))
    })
    .catch(err => console.log(err))
}

connection();