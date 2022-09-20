import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb:FormBuilder) {
    this.signupForm = this.fb.group({
      'fullName':['',Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  signup(){
    alert("Account Created")
  }

}
