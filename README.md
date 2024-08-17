# Products API (CRUD)

## Overview
This is a simple CRUD (Create, Read, Update, Delete) API for managing products. It is built using Node.js with Express for the server and MongoDB with Mongoose for the database. The project follows the MVC (Model-View-Controller) architecture pattern.

## Built With
- **Node.js** (Express)
- **MongoDB** (Mongoose)
- **MVC Architecture**

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MostafaShahat2021/products-API.git
   cd products-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Usage
The API provides the following endpoints:

#### Get All Products
- **Method**: GET
- **Endpoint**: `/api/products`
- **Description**: Retrieves a list of all products.
- **Example**: [Get All Products](http://localhost:3000/api/products)

#### Add Product
- **Method**: POST
- **Endpoint**: `/api/products`
- **Description**: Adds a new product.
- **Example**: [Add Product](http://localhost:3000/api/products)

#### Get Single Product
- **Method**: GET
- **Endpoint**: `/api/products/:id`
- **Description**: Retrieves a single product by its ID.
- **Example**: [Get Single Product](http://localhost:3000/api/products/66bfa86f11d459f8560588c7)

#### Update Product
- **Method**: PUT
- **Endpoint**: `/api/products/:id`
- **Description**: Updates an existing product by its ID.
- **Example**: [Update Product](http://localhost:3000/api/products/66c0e70076857b69a75ada1c)

#### Delete Product
- **Method**: DELETE
- **Endpoint**: `/api/products/:id`
- **Description**: Deletes a product by its ID.
- **Example**: [Delete Product](http://localhost:3000/api/products/66c0e70076857b69a75ada1c)

## Project Structure
```
├── controllers
│   └── product.controller.js
├── models
│   └── product.model.js
├── routes
│   └── product.routes.js
├── .env
├── app.js
└── package.json
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.
