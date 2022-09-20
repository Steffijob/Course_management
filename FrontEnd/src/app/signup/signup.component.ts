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
    const data = this.signupForm.value;
    delete data['confirm']
    this.auth.signup(data).subscribe(res=>{
      alert("User registered successfully")
      
    }), (err: any) =>{
        alert(err)
    }

    }
    
  }


