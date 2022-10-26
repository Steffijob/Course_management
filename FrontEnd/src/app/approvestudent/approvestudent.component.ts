import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-approvestudent',
  templateUrl: './approvestudent.component.html',
  styleUrls: ['./approvestudent.component.css']
})
export class ApprovestudentComponent implements OnInit {
  
  constructor(private professorService:ProfessorService , private route:Router) { }

  // data = localStorage.getItem('uid')
  
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
    id:this.data
  }

  enroll(){
    this.professorService.approvedstudent(this.enrolldata)
    alert("Approved Student")
    this.route.navigate(["/professor/studentrequest"])
  }



  ngOnInit(): void {

    this.professorService.approvestudent(this.data).subscribe((data)=>{
      this.enrolldata=JSON.parse(JSON.stringify(data))

    })
  }
  data(data: any) {
    throw new Error('Method not implemented.');
  }

}
