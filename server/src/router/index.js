const appRouter = require('express').Router()
const adminRoute = require('../router/adminRouter/auth/admin.route')
const categoryRoute = require('../router/adminRouter/category.route.js')
const productRoute = require('../router/adminRouter/product.route')
const userRoute = require('./userRouter/user.route')

appRouter.use('/admin', adminRoute)
appRouter.use('/category', categoryRoute)
appRouter.use('/product', productRoute)


/*user route */
appRouter.use('/user', userRoute)

    

module.exports = appRouter
