import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudnetOperationComponent } from './components/studnet-operation/studnet-operation.component';
import { HomeComponent } from './components/home/home.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateOperationComponent } from './components/update-operation/update-operation.component';
import { ViewOperationComponent } from './components/view-operation/view-operation.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'student-crud',component:StudnetOperationComponent},
  {path:'add-student',component:AddStudentComponent},
  {path:'update-student',component:UpdateOperationComponent},
  {path:'view-student',component:ViewOperationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
