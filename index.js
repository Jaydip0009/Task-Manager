const express = require ('express')
const db = require('./config/db')
const cors = require('cors')
const userRoute = require('./routes/user.route')
const taskRoute = require('./routes/task.route')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/user", userRoute)
app.use("/task", taskRoute)

app.listen(8090, ()=> {
    console.log('listing on port 8090');
    db()    
})
