const mongoose = require('mongoose')

// const connectionString ="mongodb+srv://admin:12345@cluster0.tfpayk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const connectionString ="mongodb+srv://admin:12345@cluster0.tfpayk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb= (url)=>{
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
        .then(()=>console.log("Connected to Db"))
        .catch((err)=>console.log(err))
}


module.exports = {
    connectDb
}