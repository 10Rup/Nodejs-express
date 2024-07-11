const express = require('express')
const tasks = require('./routes/tasks.js')
// const bodyparser = require('body-parser')
const port = 3000
app = express()

// app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json())

// routes
app.get('/hello', (req, res)=>{
    res.send('Task Manager')
})


app.use('/api/v1/tasks', tasks)
app.get('/api/v1/tasks', (req, res)=>{
    res.send('Task Manager')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})