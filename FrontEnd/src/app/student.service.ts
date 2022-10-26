import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  enrollstudent(enrolldata: any) {
    console.log("enrolldata executed");
    return this.http.post('http://localhost:3000/student/enrollstudent', data).subscribe((data: any) =>{console.log(data)});
  }

  messagedata(id:any){
    return this.http.get('http://localhost:3000/student/messagedata/'+id);
  }
}

function data(arg0: string, data: any) {
  throw new Error('Function not implemented.');
}

