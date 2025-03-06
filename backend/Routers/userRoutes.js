const express = require('express')
const { registerUser, loginUser } = require('../Controllers/userController')

const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

module.exports = userRouter;