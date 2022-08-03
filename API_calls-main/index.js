

const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/users.routes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

// request and response
app.get('/',(req,res) =>{
    res.send('First api')
})

app.use('/users', router)

// Database details
const username = "jnikam1"
const password = "1234"
const dbName = "Employee"

const MongoURL = `mongodb+srv://${username}:${password}@cluster0.8uptl.mongodb.net/${dbName}?retryWrites=true&w=majority`

// Connecct to database
// 1. URL
// 2. call back funtion
mongoose.connect(MongoURL)
.then(()=>{
    console.log("Connected to Database")
})
.catch((err)=>{
    console.log(err)
})

const PORT = 3000
app.listen(PORT,() => {
    console.log(`Listening on ${PORT}`)
})