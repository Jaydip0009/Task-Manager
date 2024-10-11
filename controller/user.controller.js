const User = require('../model/user.Schema')

const getUser = async (req, res) => {
    let data = await User.find()
    res.send(data)
}

const createUser = async (req, res) => {
    let {email, password} = req.body
    let user = await User.findOne({email})
    try{
        if(!user) {
            let data = await User.create(req.body)
            res.send(data)
        }
        else{
            res.send({email:user.email, user})
        }   
    }
    catch(e){
        res.status(404).send({msg:"user creting error"})
    }
} 

const login = async (req, res) => {
    let {email, password} = req.body
    let user = await User.findOne({email})
    try{
        if(!email){
            throw new Error('user not found')
        }
        if(user.password !== password){
            throw new Error('password is incorrect !!')
        }
        return res.send('loged in sucssefull')
    }
    catch(e){
        res.status(404).send({msg:e})

    }
}

module.exports = {getUser, createUser, login}
