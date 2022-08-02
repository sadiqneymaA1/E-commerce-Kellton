const ContactModel = require("../model/contact.model")

const ContactCreate = (req, res) =>{
    ContactModel.create({
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


model.exports = {ContactCreate}