import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-professordashboard',
  templateUrl: './professordashboard.component.html',
  styleUrls: ['./professordashboard.component.css']
})
export class ProfessordashboardComponent implements OnInit {

  datacount=[]

  studentData=
  [{
    fullName:"",
    email:"",
    phoneNo:"",
    address:"",
    qualification:"",
    course:"",
    datejoin:""
  }]

  constructor(private authService:AuthService,private professorService:ProfessorService) { }

  ngOnInit(): void {
    this.professorService.getCount().subscribe((data)=>{
      console.log(data)
      this.datacount=JSON.parse(JSON.stringify(data))
     })


      this.professorService.getapprovedstudent().subscribe((data)=>{
      this.studentData = JSON.parse(JSON.stringify(data))
    })
  }

}
