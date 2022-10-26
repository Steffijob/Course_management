import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(public http:HttpClient) { }

  approvestudent(id:any){
    return this.http.get('http://localhost:3000/professor/approvestudent/'+id);
  
  }

  approvedstudent(data:any){
    return this.http.post('http://localhost:3000/professor/approveddata',data).subscribe((data)=>{
     console.log(data)
    })
   }
  
   getapprovedstudent(){
    return this.http.get('http://localhost:3000/professor/getapproveddata')
   }

   getCount(){
    return this.http.get('http://localhost:3000/professor/getcount')
   }
 
   getrequest(){
     return this.http.get('http://localhost:3000/professor/getrequest')
   }
 
   rejectstudent(id:any){
     return this.http.delete('http://localhost:3000/professor/deletreq/'+id)
   }
 
   rejectapprovedstudent(id:any){
     return this.http.delete('http://localhost:3000/professor/deletapproved/'+id)
   }

   bulknotification(data:any){
    return this.http.post('http://localhost:3000/professor/bulknotification',data)
   }
}
