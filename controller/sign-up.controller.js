const signInModel = require("../model/sign-up.model")

const signupCreate = (req, res) =>{
    signupModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmpassword: req.body.confirmpassword
        
    },(err, result)=>{
        
            if(err){
                res.send({
                    message: "Login unsucesfull",
                    error:err
                })
            }
            res.send({
                message:"succesfully Logged in",
                data:result,
            })
        })

    

}


model.exports = {signupCreate}