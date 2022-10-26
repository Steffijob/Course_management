import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  // wanish(){
  //   alert('logout successfull')
  //   localStorage.removeItem('professor')
  //   this.router.navigate(['']);

  // }

}
