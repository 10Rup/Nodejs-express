let express = require('express')
let app = express()
let env  = require('dotenv').config()
let bodyparser = require('body-parser')
console.log("Hello World")

console.log(process.env.MESSAGE_TYPE)
// app.get('/', function(req, res){
//     res.send("Hello Express");
// })
app.use(bodyparser.urlencoded({extended:false}))

app.use('/public', express.static(__dirname+"/public"))



app.get('/:word/echo', (req, res)=>{
    res.json({echo: req.params.word})
})

app.get('/name', (req, res)=>{
    var {first: firstname, last: lastname} = req.query
    res.json({name: `${firstname} ${lastname}`})
})



// app.route('/name').post((req, res)=>{
//     var {first: firstname, last: lastname} = req.query
//     res.json({name: `${firstname} ${lastname}`})
// })

app.get('/now', 
    (req, res, next)=>{
        req.time = new Date().toString();
        next();
    },
    (req, res)=>{
        res.json({time: req.time})
    }
)



app.use( (req, res, next)=>{
    console.log(req.method+" "+req.path+" - "+req.ip)
    next();
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.get('/json', (req, res)=>{
    if(process.env.MESSAGE_TYPE == "uppercase"){
        res.json({message: "Hello json".toUpperCase()})
    }
    else{
        res.json({message: "Hello json"})
    }
    
})

app.listen(3000)