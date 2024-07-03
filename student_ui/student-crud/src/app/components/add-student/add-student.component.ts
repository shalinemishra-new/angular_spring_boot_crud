import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

student!:Student[];
studentform!:FormGroup;
namepattern="^[a-zA-Z ]{2,15}$";
emailpattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
contactpattern="^[0-9]+(x|X){0,1}[0-9]*?$";
agepattern="^(?:1[8-9]|[2-5][0-9]|60)$";

  constructor(private router : Router,
    private fb : FormBuilder,
    private studentService : StudentService) { }

  ngOnInit(): void {
    this.studentform=this.fb.group({
      studentId:[''],
      firstName:['',[Validators.required,Validators.pattern(this.namepattern)]],
      lastName:['',[Validators.required,Validators.pattern(this.namepattern)]],
      age:['',[Validators.required]],
      contact:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      gender:['',[Validators.required]]
    })
  }

  listRoute(){
    this.router.navigate(['/student-crud']);
  }

  onSubmit()
  {
    if(this.studentform.valid)
    {
      console.log(this.studentform.value);
      this.studentService.saveStudent(this.studentform.value).subscribe((data:any)=>{
        this.router.navigate(['/student-crud']);
      });
      //window.location.reload();
      //this.getAllStudents();
      //this.router.navigate(['/student-crud']);
    
    }
 }  

 getAllStudents(){
  this.studentService.getStudentList().subscribe();
 }
 

}

