import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CourseService } from '../course.service';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-enrollcourse',
  templateUrl: './enrollcourse.component.html',
  styleUrls: ['./enrollcourse.component.css']
})
export class EnrollcourseComponent implements OnInit {

  courses = [
    { name: 'Cyber Security Analyst' },
    { name: 'Full Stack Development(MERN)' },
    { name: 'Software Testing' },
    { name: 'Data Science & Analytics'},
    { name: 'Full Stack Development(MEAN)' },
    { name: 'Machine Learning & Artificial Intelligence' },
    { name: 'Java Programming'},
    { name: 'Social Media Marketing & SEO'},


  ]


  enrolldata={
    fullName:"",
    email:"",
    phoneNo:"",
    address:"",
    qualification:"",
    course:"",

  }

  constructor(private authService:AuthService, private studentService:StudentService, private courseService:CourseService, private route:Router) { }


  // register(){
  //   console.log("register button hit");
  //   console.log(this.enrolldata);
  //    }
     
  enroll(){
    this.studentService.enrollstudent(this.enrolldata)
    alert("Registered successfully")
    this.route.navigate(["/student"])

  }

  ngOnInit(): void {
    this.courseService.displayCourse().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }

}
