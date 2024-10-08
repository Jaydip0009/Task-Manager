const { Router } = require('Router')
const {readTask, createTask, updateTask, deleteTask} = require('../controller/Task.controller')

const taskRoute = Router()

taskRoute.get('/read', readTask)
taskRoute.post('/createTask', createTask)
taskRoute.patch('/updateTask/:id', updateTask)
taskRoute.deleteTask('/deleteTask/:id', deleteTask)

module.exports = taskRoute