const appRouter = require('express').Router()
const adminRoute = require('../router/adminRouter/auth/admin.route')
const categoryRoute = require('../router/adminRouter/category.route.js')
const productRoute = require('../router/adminRouter/product.route')

appRouter.use('/admin', adminRoute)
appRouter.use('/category', categoryRoute)
appRouter.use('/product', productRoute)
    

module.exports = appRouter
