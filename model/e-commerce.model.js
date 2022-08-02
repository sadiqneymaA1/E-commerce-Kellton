const mongoose = require('mongoose')

const Commerce = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url:{
        type:String,
        required: true,
        
    },

    id:{
        type:String,
        required: true
       

    },

    


})

module.exports = mongoose.model('commerce', Commerce)

