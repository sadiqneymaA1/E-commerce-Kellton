const mongoose = require('mongoose')

const signup = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        
    },

    password:{
        type:String,
        required: true
       

    },

  

})

module.exports = mongoose.model('signup', signup)

