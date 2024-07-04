let express = require('express')
const { Timestamp } = require('mongodb')
let app = express()
let env = require('dotenv').config()

app.use('/public', express.static(__dirname+"/public"))


app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})


app.use('/api/:unixtime', (req, res, next)=>{
    let data_time = "asds"
    if(Number(req.params.unixtime)){
        console.log(`data updated`)
        res.json({
            "unix": Number(req.params.unixtime),
            "utc": new Date(Number(req.params.unixtime)).toUTCString()})
    }
    else if(new Date(req.params.unixtime).getTime()){
        req.params.unixtime = new Date(req.params.unixtime).getTime()
        console.log(`data mismatch ${req.params.unixtime}`)
        res.json({
            "unix": req.params.unixtime,
            "utc": new Date(req.params.unixtime).toUTCString()})
    }
    else{
        res.json({"error": "Invalid Date"})
    }
    next();
})

app.get('/api', (req, res)=>{
    const unix = new Date().getTime()
    res.json({
        "unix": unix,
        "utc": new Date(unix).toUTCString()})
})

app.get('/api/:unixtime',(req, res)=>{
    
})


app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port ' + process.env.PORT)
})




