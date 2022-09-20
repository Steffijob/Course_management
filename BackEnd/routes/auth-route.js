const router = require('express').Router();
const User = require('../src/model/user')
const bcrypt = require('bcrypt');

router.post('/signup', (req,res)=>{
    bcrypt.hash(req.body.password, 10,(err, hash)=>{
        if(err){
            
            return res.json({success:false, message:"Hash error"})
        }else{
            const user = new User({
                fullName:req.body.fullName,
                email:req.body.email,
                password:hash
            })
            user.save()
            .then((_)=>{
                res.json({success:true, message:"Account has been created"})
            })
             .catch((err)=>{
                 if(err.code ===11000){
                   return res.json({success:false, message:"Email is already exist"})
                 }
                 res.json({success:false, message:"Authentication failed!"})
             })
    }});
        
    }
    
)

   

router.post('/login', (req,res)=>{
    res.json("Login work")
})

module.exports = router