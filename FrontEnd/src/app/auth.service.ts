import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signup(data: any) {
    throw new Error('Method not implemented.');
  }
  

  constructor(public http:HttpClient) { }

  
registerUser(registerUserData: any) {
  console.log("auth file executed");
  return this.http.post('http://localhost:3000/login/register',{ registerUserData }).subscribe(data =>{console.log(data)});
}

loginUser(loginUserData: any) {
  return this.http.post<any>('http://localhost:3000/login/login',{loginUserData});
}


getToken() {
  return localStorage.getItem('token')
}

loggedIn(){
  return !!localStorage.getItem('token')
}

}
