const categoryRoute = require('express').Router()
const categoryController = require('../../controller/adminController/categoryController')

categoryRoute.get('/', categoryController.index)
categoryRoute.post('/', categoryController.store)
categoryRoute.get('/status/:id', categoryController.status)
categoryRoute.delete('/:id', categoryController.destroy)

module.exports = categoryRoute