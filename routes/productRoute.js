// productRoute.js
const express = require("express");
const { getAllProducts,createProduct, updateProduct, deleteProduct } = require("../controllers/productControllers");

const router = express.Router();

// Define a route for getting all products
router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct)


// Additional routes can be added here if needed

module.exports = router;
