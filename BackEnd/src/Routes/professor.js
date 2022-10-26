const express = require('express')
const router = express.Router()

const courseModel = require('../model/CourseModel')
const enrollmentModel = require('../model/EnrollmentModel')
const notificationModel = require('../model/NotificationModel')
const approvedModel = require('../model/ApprovedModel')

const jwt = require('jsonwebtoken');


router.get("/getrequest" ,(req,res)=>{
    
  enrollmentModel.find().then((data)=>{
    res.send(data)
  })

})


router.get("/getcount" , (req,res)=>{
  
      var datacount=[]
      courseModel.countDocuments().then((number)=>{
          datacount.push(number)
          enrollmentModel.countDocuments().then((number)=>{
              datacount.push(number);
             approvedModel.countDocuments().then((number)=>{
              datacount.push(number)
              console.log(datacount)
              res.send(datacount);
          })
          })
          
      })
  })
  
  router.get("/approvestudent/:id" , (req,res)=>{
    

    console.log(req.params)
    var id = req.params.id
  
    enrollmentModel.findById(id).then((data)=>{
      res.send(data)
    })
  
  })
  
 
  
  router.delete("/deletreq/:id" , (req,res)=>{
    
    console.log(req.params)
    var id = req.params.id
  
     enrollmentModel.findByIdAndDelete({"_id":id}).then((data)=>(
      res.send()
     ))
  
  })
  
  
  
  router.post("/approveddata" ,(req,res)=>{
    
    var data = req.body;
    console.log(data);
  
    var id = req.body._id;
    console.log(id)
  
    var date2join = new Date();
    var dd = String(date2join.getDate()).padStart(2, '0');
    var mm = String(date2join.getMonth() + 1).padStart(2, '0'); 
    var yyyy = date2join.getFullYear();
    date2join = dd + '/' + mm + '/' + yyyy;
  
    var enrollstudent={
      fullName: req.body.enrolldata.fullName,
      email: req.body.enrolldata.email,
      phoneNo: req.body.enrolldata.phoneNo,
      address: req.body.enrolldata.address,
      qualification: req.body.enrolldata.qualification,
      course: req.body.enrolldata.course,
      datejoin:date2join
    }
  
  
    var approvedModel = new approvedModel(enrollstudent)
        approvedModel.save();
        res.send({ status: true, message: 'Success' })
  
  
    enrollmentModel.findByIdAndDelete(id).then((data)=>{
      res.send()
    })
  })
  
  
  
  router.get("/getapproveddata" , (req,res)=>{
    approvedModel.find().then((data)=>{
      res.send(data)
    })
  })
  
  
  router.delete("/deletapproved/:id" , (req,res)=>{
    
    console.log(req.params)
    var id = req.params.id
  
     approvedModel.findByIdAndDelete({"_id":id}).then((data)=>(
      res.send()
     ))
  })
  
  
  router.post("/bulknotification" , (req,res)=>{
    
     var data = req.body;
     console.log(data);
  
     var date2join = new Date();
     console.log(date2join)

  
     var messsagedata={
      course:data.course,
      message:data.message,
      name:data.professor,
      date:date2join
    }
  
  
    var msgdata = new notificationModel(messsagedata)
        msgdata.save();
        res.send({ status: true, message: 'Success' })
  
  
  
  })








module.exports = router