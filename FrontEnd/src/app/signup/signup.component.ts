import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  message:string = '';
  className = 'd-none'
  isProcess:boolean = false;
  constructor(private fb:FormBuilder,private auth:AuthService) {
    this.signupForm = this.fb.group({
      'fullName':['',Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  signup(){
    this.isProcess = true;
    const data = this.signupForm.value;
    delete data['confirm']
    this.auth.signup(data).subscribe(res=>{
      if(res.success){
        this.isProcess = false;
        this.message = "Account has been created";
        this.className = 'alert alert-success';
      }else{
        this.isProcess = false;
        this.message = res.message;
        this.className = 'alert alert-danger';
      }
      //this.signupForm.reset();
    }), (err: any) =>{
      this.isProcess = false;
      this.message = "Server error !";
      this.className = 'alert alert-success';
    }

    }
    
  }


