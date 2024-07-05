let express = require('express')
// const { Timestamp } = require('mongodb')
let app = express()
let env = require('dotenv').config()
let dns = require('dns')
app.use('/public', express.static(__dirname+"/public"))


app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.post('/api/shorturl', (req, res)=>{
    console.log(req)
    res.json({
        shorturl: "http://localhost:3000/"
    })
})

// app.all('*', (req, res)=>{
//     res.status(400).send("Not Found")
// })

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port ' + process.env.PORT)
})




