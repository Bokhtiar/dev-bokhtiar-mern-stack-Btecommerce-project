const  cartRoute = require('express').Router()
const cartController = require("../../controller/userController/cartController")

cartRoute.post('/:id', cartController.store)

module.exports = cartRoute