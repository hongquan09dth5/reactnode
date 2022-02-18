const { Router } = require("express");

const controller = require("../controllers/product.controller");

const router = Router();

router.get("/", controller.getProducts);
router.get("/:id", controller.getProduct);
router.post("/create", controller.createProduct);
router.put("/update", controller.updateProduct);
router.delete("/delete/:id", controller.deleteProduct);

module.exports = router;
