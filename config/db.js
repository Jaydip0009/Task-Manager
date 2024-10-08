const mongoose = require('mongoose')

const db = async() => {
    await mongoose.connect('mongodb://localhost:27017/Task')
    console.log('connecting to database')
}

module.exports = db