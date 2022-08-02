const signInModel = require("../model/sign-in.model")

const signinCreate = (req, res) =>{
    signinModel.create({
        email: req.body.email,
        password: req.body.password
        
    },(err, result)=>{
        
            if(err){
                res.send({
                    message: "Not able to login User",
                    error:err
                })
            }
            res.send({
                message:"succesfully created user",
                data:result,
            })
        })

    

}


model.exports = {signinCreate}