const Task = require('../model/task.schema')

const readTask = async (req, res) =>{
    let data = Task.find()
    res.send(data)
}

const createTask = async (req, res) => {
    let data = Task.create()
    res.send(data)
}

const updateTask = async (req, res) => {
    let {id} = req.params
    let data = await Task.findByIdAndUpdate(id, req.body)
    res.send(data)
}

const deleteTask =async (req, res) => {
    let {id} = req.params
    let data =await Task.findByIdAndDelete(id, res.body)
    res.send(data)
}

module.exports = {readTask, createTask, updateTask, deleteTask}