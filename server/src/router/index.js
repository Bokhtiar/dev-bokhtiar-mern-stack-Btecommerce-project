const appRouter = require('express').Router()
const adminRoute = require('../router/adminRouter/auth/admin.route')
const categoryRoute = require('../router/adminRouter/category.route.js')

appRouter.use('/admin', adminRoute)
appRouter.use('/category', categoryRoute)
    

module.exports = appRouter
