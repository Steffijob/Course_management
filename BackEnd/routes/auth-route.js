const router = require('express').Router();
const User = require('../src/model/user')


router.post('/signup', (req,res)=>{
    const user = new User({
        fullName:req.body.fullName,
        email:req.body.email,
        password:req.body.password
    })


    user.save()
    .then((_)=>{
        res.json({success:true, message:"Account has been created"})
    })
     .catch((err)=>{
         res.json({success:false, message:"Authentication failed"})
     })
});

router.post('/login', (req,res)=>{
    res.json("Login work")
})

module.exports = router