import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-view-operation',
  templateUrl: './view-operation.component.html',
  styleUrls: ['./view-operation.component.css']
})
export class ViewOperationComponent implements OnInit {
  student!:Student;
  studentviewform!:FormGroup;
  namepattern="^[a-zA-Z ]{2,15}$";
emailpattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
contactpattern="^[0-9]+(x|X){0,1}[0-9]*?$";

  constructor(private fb:FormBuilder,
    private route:Router) { }

  ngOnInit(): void {
    const parser=window.sessionStorage.getItem('current-student');
    
    if (parser) {
      this.student=JSON.parse(parser);
     // this.studentviewform.value=this.student;
      console.log("Student detail on view page",this.student);
    }

    this.studentviewform=this.fb.group({
      studentId:[''],
      firstName:['',[Validators.required,Validators.pattern(this.namepattern)]],
      lastName:['',[Validators.required,Validators.pattern(this.namepattern)]],
      age:['',[Validators.required]],
      contact:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]]
    })
  }

  cancel(){
    this.route.navigate(['student-crud']);
  }

}
