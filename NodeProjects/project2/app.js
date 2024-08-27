require('dotenv').config()


const express  =  require('express')
const app = express()
const connectdb = require('./db/connect')
const {router:productsRouter} = require('./routes/products')
const notFound = require('./middleware/not-found')
const erroHandlerMiddlerware = require('./middleware/error-handler')

const port = process.env.PORT || 3000

// middleware
app.use(express.json())


// rootes
app.get('/', (req, res)=>{
    res.send(`<h1> Store Api</h1><a href='/api/v1/products'> prodeucst routes</a>`)

})

app.use('/api/v1/products', productsRouter)

// products route

app.use(notFound)
app.use(erroHandlerMiddlerware)


const start = async ()=>{
    try{
        // connect db
        await connectdb(process.env.MONGO_URI)
        app.listen(port, (req, res)=>{
            console.log(`server is running on port ${port}`)
        })
    } catch (error){
        console.log(`server failed to start ${error}`)
    }

}


start()