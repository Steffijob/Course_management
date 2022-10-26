import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  teacherData=[{
    name:"",
    message:"",
    course:"",
    date:"",
    
  }]

  X=localStorage.getItem("email")

  constructor(private authService:AuthService,private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.messagedata(this.X).subscribe((data)=>{
      this.teacherData=JSON.parse(JSON.stringify((data)))
     })
  }

}
