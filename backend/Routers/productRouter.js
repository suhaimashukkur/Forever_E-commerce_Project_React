const express = require("express");
const {
  createProduct, getAllProducts, getIdProducts,updateProducts,deleteProducts,addProducts} = require("../Controllers/productController");

const upload = require("../Middleware/multer");
const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }
  ]),
  addProducts
);

productRouter.delete('/remove/:id',deleteProducts)
productRouter.get('/single/:id',getIdProducts)
productRouter.get('/list',getAllProducts)

// router.post("/", createProduct);
// router.get("/", getAllProducts);
// router.get("/:id", getIdProducts);
// router.put("/:id", updateProducts);
// router.delete("/:id", deleteProducts);
// router.post("/add", upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]), addProducts);

module.exports = productRouter;
