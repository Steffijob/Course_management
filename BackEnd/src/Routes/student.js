const express = require('express')
const router = express.Router()

const enrollmentModel = require('../model/EnrollmentModel')
const notificationModel = require('../model/NotificationModel')
const approvedModel = require('../model/ApprovedModel')
const jwt = require('jsonwebtoken');


router.post('/enrollstudent', async (req,res)=>{
    console.log('body', req.body);
  try{
    const enrollstudent = new enrollmentModel({
      fullName: req.body.enrolldata.fullName,
      email: req.body.enrolldata.email,
      phoneNo: req.body.enrolldata.phoneNo,
      address: req.body.enrolldata.address,
      qualification: req.body.enrolldata.qualification,
      course: req.body.enrolldata.course
    })
    await enrollstudent.save()
    res.json({
        success: 1,
        message: 'Saved enrolled student data'

    })
}
catch (err) {
    res.json({
        success: 0,
        message: 'error occuured while saving' + err
    })
}
})

router.get("/messagedata/:id", (req,res)=>{
  

   var id = req.params.id
   console.log(id)

   approvedModel.findOne({email:id}).then((data)=>{
    if(data===null){
      res.send()
    }else{
      var course = data.course
      console.log(course)

      notificationModel.find({course:course}).sort({"date": -1}).then((data)=>{
        console.log(data)
        res.send(data)
      })
    }
   })

})


router.post('/checkverified', (req, res) => {
  
  userid = req.body.id;
  approvedModel.findOne({ email: userid }).then((data) => {
    if (data) {
      res.send();
    }
    
  })
  
 })

   





module.exports = router