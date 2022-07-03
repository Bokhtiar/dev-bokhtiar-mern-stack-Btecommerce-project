const appRouter = require('express').Router()
const adminRoute = require('../router/adminRouter/auth/admin.route')


appRouter.use('/admin', adminRoute)
    

module.exports = appRouter
