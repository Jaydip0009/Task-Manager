const { Router } = require('Router')
const {getUser, createUser, login} = require('../controller/user.controllert')

const userRoute = Router()

userRoute.get('/', getUser)
userRoute.post('/create', createUser)
userRoute.post('/login', login)

module.exports = userRoute