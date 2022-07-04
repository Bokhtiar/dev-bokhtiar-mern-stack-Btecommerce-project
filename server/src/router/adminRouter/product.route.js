const productRoute = require('express').Router()
const productController = require('../../controller/adminController/productController')

productRoute.get('/', productController.list)
productRoute.post('/', productController.store)

module.exports = productRoute