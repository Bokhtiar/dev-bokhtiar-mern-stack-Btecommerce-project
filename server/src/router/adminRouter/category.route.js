const categoryRoute = require('express').Router()
const categoryController = require('../../controller/adminController/categoryController')

categoryRoute.get('/', categoryController.index)
categoryRoute.post('/', categoryController.store)

module.exports = categoryRoute