const userRoute = require('express').Router()
const userController = require('../../controller/userController/userController')

userRoute.post('/register', userController.register)

module.exports = userRoute