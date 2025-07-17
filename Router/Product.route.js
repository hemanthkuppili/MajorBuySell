const express = require("express");
const router = express.Router();

const auth = require("../Middlewares/auth");
const upload = require("../Middlewares/uploads");
const productController =  require("../Controllers/product.controller");

router.post("/",auth, upload.single("image"),productController.createProduct);
router.get("/",productController.getAllProducts);
router.get("/:id",productController.getProductById);
router.get("/user/my",auth,productController.getMyProducts);

router.put(
    "/:id",
    auth,
    upload.single("image"),
    productController.updateProduct
);
router.delete("/:id",auth,productController.deleteProduct);
router.get("/search/category", productController.searchByCategory);
module.exports = router;


