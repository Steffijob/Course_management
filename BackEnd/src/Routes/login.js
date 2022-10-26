const express = require('express')
const router = express.Router();
const userModel = require('../model/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//Register API
router.post('/register', async (req,res)=> {
    console.log('reached');
    const password= req.body.password;
    const confpassword= req.body.repeatPassword;
    if(password === confpassword){
        const userdata = new userModel({

            fullName : req.body.registerUserData.fullName,
            email : req.body.registerUserData.email,
            phoneNo: req.body.registerUserData.phoneNo,
            password : req.body.registerUserData.password,
            repeatPassword : req.body.registerUserData.repeatPassword
            
        })

    const user= await userdata.save();
    res.status(201);
    console.log('registration successfull')
    }else{
        res.send("Password not matching");
    }  

})

//Login API
router.post('/login', async(req,res) => {
     const email = req.body.loginUserData.email;
    const password = req.body.loginUserData.password;
    console.log(req.body);
    const user = await userModel.findOne({email:email});
    console.log(user);
    if(user==null){
        console.log('user not found')
        res.status(401).send('user not found')
    }
     else{
        const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch){
        let payload = {subject: email+password}
        
        let token = jwt.sign(payload, 'secretKey')
        
        res.status(200).send({token})
        console.log("key value matches");
    }else {
        res.status(401).send("Invalid credentials");
    }    
}}); 



//professor login
router.post('/professorlogin', async(req,res) => {
    const email = req.body.loginUserData.email;
    const password = req.body.loginUserData.password;
    console.log(req.body);
    const user = await userModel.findOne({email:email});
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch){
        let payload = {subject: email+password}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
        console.log("key value matches");
    }else {
        res.status(401).send("Invalid credentials");
    }    
});

module.exports=router;