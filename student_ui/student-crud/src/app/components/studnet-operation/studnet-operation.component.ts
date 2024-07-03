import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studnet-operation',
  templateUrl: './studnet-operation.component.html',
  styleUrls: ['./studnet-operation.component.css']
})
export class StudnetOperationComponent implements OnInit {

  studentList!:Student[];
  updatedStudent!:Student;

  constructor(private studentService : StudentService,
    private router:Router) { }

  ngOnInit(): void {
   // window.location.reload();
    this.getAllStudents();
  }

  getAllStudents(){
    this.studentService.getStudentList().subscribe( list=>{this.studentList=list;})
  }

  deleteDataById(studentId:number)
  {
    console.log("In delete");
  this.studentService.deleteStudentData(studentId).subscribe( data =>{
  console.log(data);
})
this.getAllStudents();
  window.location.reload();
  }

  editData(student : Student){
    window.sessionStorage.removeItem('current-student');
    window.sessionStorage.setItem('current-student', JSON.stringify(student));
    this.router.navigate(['update-student']);
  }

  viewData(student : Student){
    window.sessionStorage.removeItem('current-student');
    window.sessionStorage.setItem('current-student', JSON.stringify(student));
    this.router.navigate(['view-student']);
  }

}
