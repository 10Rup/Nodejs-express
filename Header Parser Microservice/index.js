let express = require('express')
// const { Timestamp } = require('mongodb')
let app = express()
let env = require('dotenv').config()

app.use('/public', express.static(__dirname+"/public"))


app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.get('/api/whoami', function (req, res) {
    res.json({
        "ipaddress": req.headers.host,
        "language": req.headers['accept-language'],
        "software": req.headers['user-agent']
    });
});

app.get('/api/hello', function (req, res) {
    res.json({ greeting: 'hello API' });
});

app.all('*', (req, res)=>{
    res.status(400).send("Not Found")
})

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port ' + process.env.PORT)
})




