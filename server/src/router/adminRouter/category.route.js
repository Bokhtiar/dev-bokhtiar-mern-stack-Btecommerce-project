const categoryRoute = require('express').Router()
const categoryController = require('../../controller/adminController/categoryController')

categoryRoute.get('/', categoryController.index)
categoryRoute.post('/', categoryController.store)
categoryRoute.get('/status/:id', categoryController.status)
categoryRoute.put('/:id', categoryController.update)
categoryRoute.delete('/:id', categoryController.destroy)

module.exports = categoryRoute