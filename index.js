const express = require('express');
const nodemon = require('nodemon')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
require("dotenv").config()
const cors = require("cors");
const router = require('./routes/sign-up.routes');
const app = express();


app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.send('The E-commerce website')
});

app.use('/signup',router)




mongoose.connect(process.env.MONGOURL)
.then(() => {
    console.log("Successfully Connected to the Database")
})

.catch((err)=>{
    console.log("error connecting to the database")
})







app.listen(process.env.PORT || 8000, ()=>{
    console.log(`This is running on port 8080`)
});

