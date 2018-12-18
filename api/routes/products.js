const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const ProductsController = require('../controllers/products');

router.get("/", ProductsController.products_get_all);

router.get("/findByName/:name", ProductsController.products_get_all_byName);

router.get("/sortByPrice/ascending", ProductsController.products_get_all_sort_ascending);

router.get("/sortByPrice/descending", ProductsController.products_get_all_sort_descending);

router.post("/", checkAuth, ProductsController.products_create_product);

router.get("/:productId", ProductsController.products_get_product);

router.patch("/:productId", checkAuth, ProductsController.products_update_product);

router.delete("/:productId", checkAuth, ProductsController.products_delete);

module.exports = router;
