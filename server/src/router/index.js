const appRouter = require('express').Router()
const { IsUser } = require('../middleware/userMiddleware')
const adminRoute = require('../router/adminRouter/auth/admin.route')
const categoryRoute = require('../router/adminRouter/category.route.js')
const productRoute = require('../router/adminRouter/product.route')
const cartRoute = require('./userRouter/cartRoute')
const userRoute = require('./userRouter/user.route')


/*user route */
appRouter.use('/user', userRoute)
appRouter.use('/cart', IsUser, cartRoute)


/*admin route*/
appRouter.use('/admin', adminRoute)
appRouter.use('/category', categoryRoute)
appRouter.use('/product', productRoute)





    

module.exports = appRouter
