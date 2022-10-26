import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Cyber Security Analyst','description':'This course will introduce students to Cyber Security Fundamentals and Careers in Cyber Security to understand the real-world cybersecurity challenges that organizations face today. Students will learn to apply this knowledge and gain skills to address them. This course focuses on hands-on activities, and students are encouraged to participate in public and industry cyber security challenges.','image':'../../assets/cybersecurity.jpg'},
    {'id':2,'name':'Full Stack Development (MERN)','description':'The MERN stack is an excellent choice for web developers who wish to develop high-quality web applications using JavaScript. The core technologies define the MERN stack - MongoDB, Express.js, React, and Node.js - all are based on one language, Javascript. By taking this program, learners will acquire the relevant skills and will be able to grab the opportunities in the field of IT or business organizations.','image':'../../assets/MERN.png'},
    {'id':3,'name':'Software Testing','description':'Software updation and replacement are essential for a better business growth where technology is more accessible than ever. Quality plays a vital role when rapid updates are happening in Software products.This program covers the basics of software testing to the industry-relevant tools used for verifying and validating functional and non-functional requirements of a software product.','image':'../../assets/SoftwareTesting.jpg'},
    {'id':4,'name':'Data Science & Analytics','description':'Data Science & Analytics (DSA) program is a technology training program. In this age of Big Data, Data Analytics has become ever more challenging and amusing. By taking this program, learners will acquire the relevant skills to grab the opportunities in the field of IT or business organizations (such as Information Technology, Banking, Financial Services, and Retail) that use such technologies.','image':'../../assets/datascience.jpg'},
    {'id':5,'name':'Full Stack Development (MEAN)','description':'The MEAN stack is an excellent choice for web developers who wish to develop high-quality web applications using JavaScript. The core technologies define the MEAN stack - MongoDB, Express.js, Angular, and Node.js - all are based on one language, Javascript. By taking this program, learners will acquire the relevant skills and will be able to grab the opportunities in the field of IT or business organizations.','image':'../../assets/mean.jpeg'},
    {'id':6,'name':'Machine Learning & Artificial Intelligence','description':'Machine Learning (ML) and Artificial Intelligence (AI) are transforming our world, and the adaptation rate of ML/AI technologies is high. The products of the new AI revolution, like self-driven vehicles, robot assistance will affect how we live and function. This program provides the learners with a firm awareness of ML/AI technologies and their applications.','image':'../../assets/MLAL.jpeg'},
    {'id':7,'name':'Java Programming','description':'Java is one of the most popular languages with developers, mainly because of its versatile nature and compatibility. With the increase in the number of users of devices like smartphones and tablets, there is a massive demand for the applications that run on these devices. Java is the backbone of eighty percent of these mobile applications. This program helps the learners to build a solid foundation in the Java language.','image':'../../assets/Java.jpg'},
    {'id':8,'name':'Social Media Marketing & SEO','description':'Digital marketing is the act of promoting and selling products and services by leveraging online marketing tactics such as social media marketing, search marketing, and email marketing.Digital marketing is a rapidly growing and evolving career path.This program discusses the basics of social media marketing and demonstrates how to use social media platforms like Facebook, Instagram, and LinkedIn effectively.','image':'../../assets/SEO.jpg'}
  ]

}
