// Creating the Schema

// Importing Mongoose
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    }
})

// Need to follow the schema
module.exports =  mongoose.model('User',UserSchema)