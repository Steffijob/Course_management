import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthData } from './auth-data.model';
import { AuthService } from '../auth.service';
// import { NgToastService } from 'ng-angular-popup'

@Component({
  selector: 'app-joinnow',
  templateUrl: './joinnow.component.html',
  styleUrls: ['./joinnow.component.css']
})
export class JoinnowComponent implements OnInit {

  signup(){
    console.log("register button hit");
    console.log(this.registerUserData);
     }
     
  registerUserData = new AuthData('','','','','');
     
  constructor( public auth:AuthService,public router:Router) { }
   
  // private toast:NgToastService,

  ngOnInit(): void {
  }
  onSubmit(){
    
    this.auth.registerUser(this.registerUserData);
    console.log("auth service called");
    // this.toast.success({detail:"SUCCESS",summary:'Signup successfull',duration:5000});
    this.router.navigate(['/login']);
      
    
  };

  }



