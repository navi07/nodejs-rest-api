const express = require("express");
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const OrdersController = require('../controllers/orders');

router.get("/", checkAuth, OrdersController.orders_get_all);

router.get("/sortByQuantity/ascending", checkAuth, OrdersController.orders_get_all_sort_ascending);

router.get("/sortByQuantity/descending", checkAuth, OrdersController.orders_get_all_sort_descending);

router.post("/", checkAuth, OrdersController.orders_create_order);

router.get("/:orderId", checkAuth, OrdersController.orders_get_order);

router.delete("/:orderId", checkAuth, OrdersController.orders_delete_order);

module.exports = router;
