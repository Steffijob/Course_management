import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  // courseArray: any;
  courses=[{
    name:"",
    duration:"",
    description:"",
  }]

  constructor(private courseService:CourseService,private router:Router,) { }

  ngOnInit() {
    this.courseService.displayCourse().subscribe((res)=>{
      console.log(res);
      this.courses=res.item
    })
  }

  apply(){
    this.router.navigate(['/enrollcourse'])
  }


  
}
