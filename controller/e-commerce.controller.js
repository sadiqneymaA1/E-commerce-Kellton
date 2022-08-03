const SignupModel = require('../model/sign-up');
const SigninModel = require('../model/sign-in');
const productModel = require('../model/products')
const contactModel = require('../model/contact')

const signupCreate = (req, res) =>{
    SignupModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
        
    },(err,result) =>{
        if(err){
            res.send({
                message:"Not able to login",
                eror: err
            })
        } 
        res.send({
            message: "sign up sucessfully",
            data:result
        })

    })
    
    
}


const signinCreate = (req, res) =>{
    SigninModel.create({
        
        email: req.body.email,
        password: req.body.password
        
        
    },(err,result) =>{
        if(err){
            res.send({
                message:"Not able to login",
                eror: err
            })
        } 
        res.send({
            message: "sign in sucessfully",
            data:result
        })

    })
    
    
}

const productsread = (req, res) =>{
    productModel.create({
        
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        id:req.body.id,
        linkUrl: req.body.linkUrl

        
        
    },(err,result) =>{
        if(err){
            res.send({
                message:"succefully seen",
                eror: err
            })
        } 
        res.send({
            message: "sign in sucessfully",
            data:result
        })

    })
    
    
}


const ContactCreate = (req,res)=>{

    
    contactModel.create({

        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        
    },(err,result)=>{
        if(err){
            res.send({
                message:"Not able to send the message",
                error: err
            })
        }
        res.send({
            message: "Message sent successfully",
            data: result
        })
    })

}



module.exports = {signupCreate, signinCreate, productsread, ContactCreate}