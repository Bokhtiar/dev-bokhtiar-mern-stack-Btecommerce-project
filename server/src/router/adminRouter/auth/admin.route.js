const adminRoute = require('express').Router()
const authController = require('../../../controller/adminController/authController')

adminRoute.post('/login', authController.login)

module.exports = adminRoute