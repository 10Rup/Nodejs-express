const express = require('express')

const port = 3000
app = express()



// routes
app.get('/', (req, res)=>{
    res.send('Task Manager')
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})