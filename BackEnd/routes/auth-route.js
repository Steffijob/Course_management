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
    User.find({email:req.body.email}).exec().then((result)=>{
        if(result.length < 1){
            return res.json({success: false, message: "User not found!"})
        }
        const user = result[0];
        bcrypt.compare(req.body.password, user.password, (err, ret)=>{
            if(ret){
                return res.json({success:true, message:"Login successful"})
            }else{
                return res.json({success:false, message:"Password does not match"})
            
            }
        })
    }).catch(err =>{
        res.json({success:false, message:"Authentication failed!"})
    })
})

module.exports = router