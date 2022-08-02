const express = require('express');
const nodemon = require('nodemon')
const mongoose = require('mongoose');
const router = require("./routes/user.routes");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

app.use(bodyParser.json())


app.get('/', (req,res)=>{
    res.send('The E-commerce website')
});


app.use("/user",router)

app.use("/e-commerce", commercerouter)

app.use("/auth",signinRouter)
app.use("/auth",signupRouter)

app.use("/contact",contactRouter)

const username = "sadiqneymaA1"
const password = 'sadiqneymaA1'
const dbName = "Employee"

const MongoURL = `mongodb+srv://${username}:${password}@project.rdd2sru.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(MongoURL)
.then(() => {
    console.log("Successfully Connected to the Database")
})

.catch((err)=>{
    console.log("error connecting to the database")
})





const PORT = 8000

app.listen(PORT, ()=>{
    console.log(`This is running on port ${PORT}`)
});

