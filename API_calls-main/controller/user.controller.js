

const UserModel = require('../model/users.model')

const create = (req,res)=>{

    // Two para
    // 1. Object or document that needs to be stored
    // 2. Callback funtion
    UserModel.create({

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone

    },(err,result)=>{
        if(err){
            res.send({
                message:"Not able to vreate the user",
                error: err
            })
        }
        res.send({
            message: "Created user",
            data: result
        })
    })

}

const read = (req,res) =>{
    UserModel.find({},(err,result) =>{
        if(err){
            res.send({
                message:"Not able to read the user",
                error: err
            })
        }
        res.send({
            message: "Read user",
            data: result
        })
    })
}

const update = (req,res) =>{
    UserModel.findByIdAndUpdate(req.params.id, req.body,(err,result) =>{
        if(err){
            res.send({
                message:"Not able to update the user",
                error: err
            })
        }
        res.send({
            message: "User updated",
            data: result
        })

    })
}

const deleteUsers = (req,res) => {
    UserModel.deleteOne({_id:req.params.id},(err,result)=>{
        if(err){
            res.send({
                message:"Not able to delete the user",
                error: err
            })
        }
        res.send({
            message: "User deleted",
            data: result
        })
    })
}

module.exports = {create,read,update,deleteUsers}