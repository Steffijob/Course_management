import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { AuthService } from '../auth.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-studentalert',
  templateUrl: './studentalert.component.html',
  styleUrls: ['./studentalert.component.css']
})
export class StudentalertComponent implements OnInit {

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
    course:"",
    message:""
  }


  constructor(private authService:AuthService, private professorService:ProfessorService, private courseService:CourseService, private route:Router) { }


  messagealert(){
    this.professorService.bulknotification(this.enrolldata).subscribe((data:any)=>{
     if(data.status){
       alert("Sucessfully Generated Alert");
     }else{
       alert("Error");
     }
    })
    location.reload();
   }


  ngOnInit(): void {
    this.courseService.displayCourse().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }

}
