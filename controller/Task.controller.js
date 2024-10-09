const Task = require('../model/task.schema')

const getTask = async (req, res) =>{
    let data = Task.find()
    res.send(data)
}

const getTaskId =async (req, res) => {
    let {id} = req.params
    let data = await Task.findById(id)
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
    let data = await Task.findByIdAndDelete(id)
    res.send(data)
}

module.exports = {getTask, getTaskId, createTask, updateTask, deleteTask}
