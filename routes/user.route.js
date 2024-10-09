const { Router } = require('express')
const {getUser, createUser, login} = require('../controller/user.controller')

const userRoute = Router()

userRoute.get('/', getUser)
userRoute.post('/create', createUser)
userRoute.post('/login', login)

module.exports = userRoute
