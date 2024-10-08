const express = require('express')
const tasks = require('./routes/tasks.js')
const notFound =  require('./middelware/not-found.js')
// const bodyparser = require('body-parser')
const {connectDb} = require('./db/connect.js')
require('dotenv').config()

const port = 3000
app = express()

// static files
app.use(express.static('./public'))
app.use(notFound)
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


const start = async ()=>{
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, ()=>{
            console.log(`Server is running on port ${port}`)
        })

    } catch (error) {
        console.log(error)
    }
}

start()