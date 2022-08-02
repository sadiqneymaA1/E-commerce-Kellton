const CommerceModel = require("../model/e-commerce.model")

const create = (req,res) =>{

    CommerceModel.create({
        title: req.body.title,
        url: req.body.url,
        id: req.body.id,
    },(err, result)=>{
        
            if(err){
                res.send({
                    message: "Not able to Create User",
                    error:err
                })
            }
            res.send({
                message:"succesfully created user",
                data:result,
            })
        })

}

const read = (req,res) =>{

    CommerceModel.find({
        
    },(err, result)=>{
        
            if(err){
                res.send({
                    message: "Not able to Read",
                    error:err
                })
            }
            res.send({
                message:"succesfully created user",
                data:result,
            })
        })

}

module.exports = {create,read}