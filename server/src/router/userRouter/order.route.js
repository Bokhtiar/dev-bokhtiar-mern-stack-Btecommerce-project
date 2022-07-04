const orderRoute = require("express").Router();
const orderController = require("../../controller/userController/orderController");

orderRoute.get("/", orderController.list);
orderRoute.post("/", orderController.store);

module.exports = orderRoute;
