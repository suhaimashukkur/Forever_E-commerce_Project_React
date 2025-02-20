const express = require("express");
const {
  createProduct,
  getAllProducts,
  getIdProducts,
  updateProducts,
  deleteProducts,
  uploadImage,
} = require("../Controllers/productController");
const upload = require("../Middleware/multer");
const router = express.Router();
router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getIdProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);
router.post
("/upload-image",upload.single('image1') ,uploadImage);

module.exports = router;
