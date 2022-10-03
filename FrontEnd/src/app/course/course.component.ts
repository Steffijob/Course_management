import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course= [
    {'id':1,'name':'Learn Angular','description':'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.','image':'../../assets/angular.jpg'},
    {'id':2,'name':'Learn MEAN Stack','description':'The MEAN stack is a JavaScript-based framework for developing web applications. MEAN is named after MongoDB, Express, Angular, and Node, the four key technologies that make up the layers of the stack.','image':'../../assets/mean.jpeg'},
    {'id':3,'name':'Learn Nodejs','description':'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.','image':'../../assets/nodejs.jpg'},
    {'id':4,'name':'Learn Reactjs','description':'React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.','image':'../../assets/reactjs.jpg'},
  ]
  
}
