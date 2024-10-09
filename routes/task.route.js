const { Router } = require('express')
const {getTask, createTask, updateTask, deleteTask, getTaskId} = require('../controller/Task.controller')

const taskRoute = Router()

taskRoute.get('/get', getTask)
taskRoute.get('/:id', getTaskId)
taskRoute.post('/createTask', createTask)
taskRoute.patch('/updateTask/:id', updateTask)
taskRoute.delete('/deleteTask/:id', deleteTask)

module.exports = taskRoute
