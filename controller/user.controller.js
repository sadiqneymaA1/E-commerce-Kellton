const router = require("../routes/user.routes")
const UserModel = require('../model/users.model')
const { findByIdAndUpdate } = require("../model/users.model")
const create = (req,res) =>{


    UserModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phone: req.body.phone
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
        UserModel.find({},(err,result) =>{
            if(err){
                res.send({
                    message: "Not able to create User",
                    error: err
                })

            }

            res.send({
                message: "Sucessfully created User",
                data:result
            })
        })
    }

    const update = (req,res) =>{
        UserModel.findByIdAndUpdate(req.params.id, req.body,(err,result) =>{

            if(err){
                res.send({
                    message: "Not able to Updated User",
                    error: err
                })

            }

            res.send({
                message: "Sucessfully Updated User",
                data:result
            })
            

        })
    }


    const deleteUser = (req,res) => {
        UserModel.deleteOne({_id:req.params.id}, (err,result) =>{
            if(err){
                res.send({
                    message: "Not able to Delete user",
                    error: err 
                })
            }
            res.send({
                message:'Successfully Delete user',
                data:result
            })
        })
    }
    
    module.exports = {create, read, update, deleteUser}