import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  course = {
    name: '',
    duration: '',
    description: ''
  }
  id: any
  

  constructor(private courseService: CourseService,public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log('id is:', this.id);
    if (this.id) {
      this.courseService.displayCourseById(this.id).subscribe((res) => {
        console.log({ res });
        this.course = res.item
      })
    }
  }

  onAddCourse() {
    if (this.id) {
      this.courseService.updateCourse(this.id, this.course).subscribe((res) => {
        console.log({ res });
        if (res.success === 1) {
          this.router.navigate(['/course'])
        }
      })
    } else {
      this.courseService.createCourse(this.course).subscribe((res) => {
        console.log({ res });
        this.router.navigate(['/professor'])
      })
    }
  }

  

}
