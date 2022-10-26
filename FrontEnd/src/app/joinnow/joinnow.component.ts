import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthData } from './auth-data.model';
import { AuthService } from '../auth.service';

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
     
  constructor(  public auth:AuthService,public router:Router) { }
   

  ngOnInit(): void {
  }
  onSubmit(){
    
    this.auth.registerUser(this.registerUserData);
    console.log("auth service called");
    alert("Registration successfull")
    this.router.navigate(['/login']);
      
    
  };

  }



