const User = require('../model/user.Schema')

const getUser = async (req, res) => {
    let data = await User.find()
    res.send(data)
}

const createUser = async (req, res) => {
    let data = await User.findOne()
    res.send(data)
} 

const login = async (req, res) => {
    let {email, password} = req.body
    if(!email){
        res.send('user not found')
    }
    if(!password){
        res.send('password is incorrect !!')
    }
    else{
        res.send('loged in sucssefull')
    }
}

module.exports = {getUser, createUser, login}
