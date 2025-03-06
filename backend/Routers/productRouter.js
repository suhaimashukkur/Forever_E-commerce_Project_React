const express = require("express");
const {
  createProduct, getAllProducts, getIdProducts,updateProducts,deleteProducts,addProducts} = require("../Controllers/productController");

const upload = require("../Middleware/multer");
const router = express.Router();

router.post(
  "/add-products",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }
  ]),
  addProducts
);

router.delete('/remove/:id',deleteProducts)
router.get('/single/:id',getIdProducts)
router.get('/list',getAllProducts)

// router.post("/", createProduct);
// router.get("/", getAllProducts);
// router.get("/:id", getIdProducts);
// router.put("/:id", updateProducts);
// router.delete("/:id", deleteProducts);
// router.post("/add", upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]), addProducts);

module.exports = router;
