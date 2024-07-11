let express = require('express')
const mongoose = require('mongoose')
let app = express()
let env = require('dotenv').config()
let dns = require('dns')
let bodyparser = require('body-parser')
const  shortid = require("shortid")
const { MongoClient } = require('mongodb');

MongoClient.connect(process.env.MONGO_URI, (err, client) => {
    if (err) throw err;
  
    const db = client.db('sample_mflix');
    db.listDatabases().toArray((err, dbs) => {
      if (err) throw err;
  
      console.log('List of databases:');
      dbs.forEach((dbInfo) => {
        console.log(dbInfo.name);
      });
  
      client.close();
    });
  });

  let express = require('express')
const mongoose = require('mongoose')
let app = express()
let env = require('dotenv').config()
let dns = require('dns')
let bodyparser = require('body-parser')
const  shortid = require("shortid")
const { MongoClient } = require('mongodb');

// MongoClient.connect(process.env.MONGO_URI, (err, client) => {
//     if (err) throw err;
  
//     const db = client.db('sample_mflix');
//     db.listDatabases().toArray((err, dbs) => {
//       if (err) throw err;
  
//       console.log('List of databases:');
//       dbs.forEach((dbInfo) => {
//         console.log(dbInfo.name);
//       });
  
//       client.close();
//     })
// })
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// const client = new MongoClient(process.env.MONGO_URI)
// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };


// try{

//     client.connect();
//     listDatabases(client)
    
// }catch{
//     console.log("Error connecting to database")
// }


app.use('/public', express.static(__dirname+"/public"))
app.use(bodyparser.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

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

// app.post('/api/shorturl', (req, res)=>{

//     const url = req.body.myurl
//     console.log(new URL(url).hostname)
//     res.json({
//         "original_url": url,
//         "short_url": url
//     })
// })

app.all('*', (req, res)=>{
    res.status(400).send("Not Found")
})

app.listen(process.env.PORT, ()=>{
    console.log('Server is running on port ' + process.env.PORT)
})
