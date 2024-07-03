import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-operation',
  templateUrl: './update-operation.component.html',
  styleUrls: ['./update-operation.component.css']
})
export class UpdateOperationComponent implements OnInit {
  student!:Student;
studentupdateform!:FormGroup;
namepattern="^[a-zA-Z ]{2,15}$";
emailpattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
contactpattern="^[0-9]+(x|X){0,1}[0-9]*?$";

  constructor(private fb:FormBuilder,
    private studentService : StudentService,
    private router : Router) { }

  ngOnInit(): void {
    const parser=window.sessionStorage.getItem('current-student');
    
    if (parser) {
      this.student=JSON.parse(parser);
      console.log("Student detail on update",this.student);
    }

    this.studentupdateform=this.fb.group({
      studentId:[''],
      firstName:['',[Validators.required,Validators.pattern(this.namepattern)]],
      lastName:['',[Validators.required,Validators.pattern(this.namepattern)]],
      age:['',[Validators.required]],
      contact:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]]
    })

  }

  onUpdate()
  {
    if(this.studentupdateform.valid)
    {
      var updatedStudent : Student = this.studentupdateform.value;
      updatedStudent.studentId=this.student.studentId;
      this.studentupdateform.value.studentId=this.student.studentId;
      console.log("Updated Student",this.studentupdateform.value);
      this.studentService.updateStudent(this.studentupdateform.value).subscribe((data:any)=>{
        this.router.navigate(['/student-crud']);
      });
      
    }
 } 

}