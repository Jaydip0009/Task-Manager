const express = require ('express')
const db = require('./config/db')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())



app.listen(8090, ()=> {
    console.log('listing on port 8090');
    db()    
})