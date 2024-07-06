let express = require('express')
// const { Timestamp } = require('mongodb')
let app = express()
let env = require('dotenv').config()
let dns = require('dns')
let bodyparser = require('body-parser')
app.use('/public', express.static(__dirname+"/public"))
app.use(bodyparser.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

// app.get('/api/shorturl', (req, res)=>{
//     console.log(req.query)
//     res.json({
//         shorturl: "http://localhost:3000/"
//     })
// })


app.post('/api/shorturl', (req, res)=>{
    
    const url = req.body.myurl
    dns.lookup(url, (err, address)=>{
        console.log(`${address}`)
    })
    const options ={
        all: true
    }
    dns.lookup(url, (err, address, family) => 
        console.log('address: %j family: IPv%s', address, family));
    dns.lookup('geeksforgeeks.org', options, (err, addresses) => 
        console.log('addresses: %j', addresses)); 
    res.json({
        "original_url": url,
        "short_url": url
    })
})

// app.all('*', (req, res)=>{
//     res.status(400).send("Not Found")
// })

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port ' + process.env.PORT)
})




