let express = require('express')
// const { Timestamp } = require('mongodb')
let app = express()
let env = require('dotenv').config()
let dns = require('dns')
let bodyparser = require('body-parser')
const  shortid = require("shortid")


app.use('/public', express.static(__dirname+"/public"))
app.use(bodyparser.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.use('/api/shorturl', (req, res, next)=>{
    let url =req.body.myurl.replace("https://","")

    const options ={
        all: true
    }
    let base ='http://localhost:3000'
    let urlId = shortid.generate()

    dns.lookup(url, options, (err, addressess)=>{
        if(err){
            console.log(`error - ${url}`)
        }
        else{
           console.log(`${base}/${urlId}`)
        }
        
    })
    next();
})

app.post('/api/shorturl', (req, res)=>{
    // console.log(req.body.myurl)
    const url = req.body.myurl
    // dns.lookup(url, (err, address)=>{
    //     console.log(`${address}`)
    // })
    // const options ={
    //     all: true
    // }
    // dns.lookup(url,options, (err, address, family) => 
    //     console.log('address: %j family: IPv%s', address, family));
    // dns.lookup('www.google.com',options, (err, address, family) => 
    //     console.log('address: %j family: IPv%s', address, family));
    res.json({
        "original_url": url,
        "short_url": url
    })
})

app.all('*', (req, res)=>{
    res.status(400).send("Not Found")
})

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port ' + process.env.PORT)
})




