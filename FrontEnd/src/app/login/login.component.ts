import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
// import { NgToastService } from 'ng-angular-popup'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor( public auth:AuthService,public router: Router) { }

  // private toast:NgToastService,
  loginUserData = {email:'', password:''};

  ngOnInit(): void {
  }

  token: string | undefined;
  
onlogin() {
    console.log("login button hit");
    console.log(this.loginUserData);

    if(this.loginUserData.email==null||this.loginUserData.password==null){
      console.log("values missing");
      this.router.navigate(['login'])
    }else{
      this.auth.loginUser(this.loginUserData)
        .subscribe(res => {
            localStorage.setItem('token', res.token)
            // localStorage.removeItem('admin')
            this.router.navigate(['/course'])
          },
          (     err: any) => {
            console.log(err)
          //  this.toast.error({detail:"login failed",summary:'invalid login credentials',duration:5000});
            this.router.navigate(['login'])
          });
  
     }
  }
}