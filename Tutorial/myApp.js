let express = require('express')
let app = express()
require('dotenv').config()
let bodyparser = require('body-parser')
let mongoose = require('mongoose')
let {MongoClient} = require('mongodb')


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


const personSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: Number,
    favoriteFoods: [String]
})

const Person = mongoose.model("Person", personSchema)

const createAndSavePerson = (done)=>{
    newRecord = new Person({name: "Rup", age: 22, favoriteFoods:['a','b','c']})
    newRecord.save((err, data)=>{
        if(err) return console.error(err);
        done(null, data)
    })

} 
const arrayOfPeople = [
    {name:'name1', age:25, favoriteFoods:['a','b','c']},
    {name:'namer2', age:43, favoriteFoods:['a','4','c']},
    {name:'name3', age:23, favoriteFoods:['a','6','c']}
]

const createManyPeople = ((arrayOfPeople, done)=>{
    Person.create(arrayOfPeople, (err, data)=>{
        if(err) return console.error(err);
        done(null, data)
    })
})


const findPeopleByName = (personName, done) => {
    Person.find({name: personName}, (err, data)=>{
        if(err) return console.error(err);
        done(null, data)
    })
}


const findOneByFood = (food, done) => {
    Person.find({favoriteFoods: food}, (err, data)=>{
        if(err) return console.error(err);
        done(null, data)
    })
};
  
const findEditThenSave = (personId, done) => {
    const foodToAdd = "hamburger";

    Person.findById({_id: personId}, (err, person)=>{
        if(err) return console.log(err)

        person.favoriteFoods.push(foodToAdd);
        person.save((err, updatedata)=>{
            if(err) return console.log(err)
            done(null, updatedata)
        })
    })
};


const findAndUpdate = (personName, done) => {
    const ageToSet = 20;
    Person.findOneAndUpdate({name: personName},{age: ageToSet},{new: true}, (err, updatedData)=>{
        if(err) return console.log(err)
        done(null, updatedData)
    })  
};
  

const removeById = (personId, done) => {
    Person.findOneAndRemove({_id: personId}, (err, removeData)=>{
        if(err) return console.log(err)
        done(null, removeData)
    })
};


const removeManyPeople = (done) => {
    const nameToRemove = "Mary";
    Person.remove({name: nameToRemove}, (err, finalData)=>{
        if(err) return console.log(err)
        done(null, finalData)
    })
};


const queryChain = (done) => {
    const foodToSearch = "burrito";
    Person.find({favoriteFoods: foodToSearch}, (err, foundData)=>{
        if(err) return console.log(err)
        done(null, foundData)
    }).sort( "name").limit(2).select(["name", "favoriteFoods"]).exec((err, data)=>{
        if(err) return console.log(err)
        done(null, data)
    })
    // .find(), .sort(), .limit(), .select(), and then .exec()

};


app.use(bodyparser.urlencoded({extended:false}))

app.use('/public', express.static(__dirname+"/public"))



app.get('/:word/echo', (req, res)=>{
    res.json({echo: req.params.word})
})

app.get('/name', (req, res)=>{
    var {first: firstname, last: lastname} = req.query
    res.json({name: `${firstname} ${lastname}`})
})


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