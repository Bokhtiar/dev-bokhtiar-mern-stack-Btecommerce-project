const  cartRoute = require('express').Router()
const cartController = require("../../controller/userController/cartController")

cartRoute.get('/', cartController.list)
cartRoute.post('/:id', cartController.store)
cartRoute.delete('/:id', cartController.destroy)

module.exports = cartRoute