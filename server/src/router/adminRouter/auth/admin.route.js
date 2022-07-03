const adminRoute = require('express').Router()
const authController = require('../../../controller/adminController/authController')

adminRoute.post('/login', authController.login)
adminRoute.post('/register', authController.register)

module.exports = adminRoute