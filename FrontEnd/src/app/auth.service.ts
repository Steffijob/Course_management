import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getProfile() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  signup(data:any):Observable <any> {
    return this.http.post('http://localhost:3000/auth/signup', data);
  }
  signin(data:any):Observable<any>{
    
    return this.http.post('http://localhost:3000/auth/login', data);
  }
 
}
