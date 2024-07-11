let express = require('express')
const mongoose = require('mongoose')
let app = express()
let env = require('dotenv').config()
let dns = require('dns')
let bodyparser = require('body-parser')
const  shortid = require("shortid")
const { MongoClient } = require('mongodb');
app.use('/public', express.static(__dirname+"/public"))
app.use(bodyparser.urlencoded({extended:false}))

const personSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: Number,
    favoriteFoods: [String]
})
const Person = mongoose.model("Person", personSchema)

const createAndSavePerson =async ()=>{
    newRecord =await new Person({name: "Rup", age: 22, favoriteFoods:['a','b','c']})
    newRecord.save()
    }


createAndSavePerson()
Person.find()
// const shortUrlSchema = new mongoose.Schema({
//     long_Url:{
//         type:String,
        
//     },
//     short_Url:{
//         type:String,
//     }
// })


// const urlShortener = mongoose.model("urlShortener", shortUrlSchema)
// data ={long_Url:"https://accounts.google.com", short_Url:'hdfcs'}
// const add_url = (urls,done)=>{
//     // newrecord = new urlShortener({long_Url:"https://accounts.google.com", short_Url:'hdfcs'})
//     newrecord = urlShortener.create(urls,(err,record)=>{
//             if(err){
//                 return console.log(err)
//             }
//             done(null, record)
//         })
    
    
    // newrecord.save((err,record)=>{
    //     if(err){
    //         return console.log(err)
    //     }
    //     done(null, record)
    // })
// }
// add_url(data)
// urlShortener.find()
// app.get('/', (req, res)=>{
//     res.sendFile(__dirname+"/views/index.html")
// })

// app.use('/api/shorturl', (req, res, next)=>{
//     let url =req.body.myurl.replace("https://","")

//     const options ={
//         all: true
//     }
//     let base ='http://localhost:3000'
//     let urlId = shortid.generate()

//     dns.lookup(url, options, (err, addressess)=>{
//         if(err){
//             console.log(`error - ${url}`)
//         }
//         else{
//            console.log(`${base}/${urlId}`)
//         }
        
//     })
//     next();
// })

app.post('/api/shorturl', (req, res)=>{

    const url = req.body.myurl
    console.log(new URL(url).hostname)
    // urlShortener.find()
    add_url(url,url)
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




