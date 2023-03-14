const express = require("express");
const {
  getProduct,
  getProducts,
  addProduct,
  getProductById,
  updateProductById,
  deleteProduct,
  createProductReview,
  getallRatings,
} = require("../controllers/productsController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

//GET ROUTE FOR ALL PRODUCTS
router.route("/products").get(getProducts);

//GET ROUTE FOR SINGLE PRODUCT
router.route("/products/:id").get(getProduct);
router.route("/products/:id/rating").get(getallRatings);
router.route("/products/:id/reviews").post(protect, createProductReview);
router.route("/addproducts").post(addProduct);
router.route("/getproductsbyid").post(getProductById);
router.route("/updateproducts").post(updateProductById);
router.route("/deleteproducts").post(deleteProduct);

module.exports = router;
