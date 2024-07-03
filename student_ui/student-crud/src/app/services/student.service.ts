import { Student } from './../models/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   url : string ="http://localhost:8080/employee/student";

  constructor(private http:HttpClient) { }

  saveStudent(student:Student): Observable<Object>{
    return this.http.post<Student>(this.url+"/save",student);
  }


  getStudentList(){
    return this.http.get<Student[]>(this.url+"/getstudents");
  }

  updateStudent(student:Student){
    return this.http.put<Student>(this.url+"/editstudent",student);
  }

  
 deleteStudentData(studentId:number)
 {
     return this.http.delete(this.url+"/remove/"+studentId);
 }
}
