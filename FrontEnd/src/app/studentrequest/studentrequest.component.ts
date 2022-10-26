import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-studentrequest',
  templateUrl: './studentrequest.component.html',
  styleUrls: ['./studentrequest.component.css']
})
export class StudentrequestComponent implements OnInit {

  studentData=
  [{
    email:"",
    fullName:"",
    qualification:"",
    course:"",
  }]

  constructor(private professorService:ProfessorService , private route:Router) { }

  rejectstudent(id: any){
    if(confirm(`Are you sure want to delete ${id.fullName}`)){
    this.professorService.rejectstudent(id._id).subscribe((data)=>{
      this.studentData=this.studentData.filter(p=>p!==id)
    })
   }
  }

  approvestudent(id:any){
    localStorage.setItem("uid" , id._id)
    this.route.navigate(["/professor/approvestudent"])
  }

  ngOnInit(): void {
    this.professorService.getrequest().subscribe((data)=>{
      this.studentData=JSON.parse(JSON.stringify(data))

    })
  }

}
