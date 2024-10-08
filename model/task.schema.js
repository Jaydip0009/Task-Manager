const mongoose = require('mongoose')

const task = new mongoose.Schema({
    taskName: String, 
    description: String,
    status: String, enum: ["pending", "in-progress", "completed"], default: "pending"
})

const Task = mongoose.model('Task', task)

module.exports = Task