import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudnetOperationComponent } from './components/studnet-operation/studnet-operation.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateOperationComponent } from './components/update-operation/update-operation.component';
import { ViewOperationComponent } from './components/view-operation/view-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    StudnetOperationComponent,
    HomeComponent,
    AddStudentComponent,
    UpdateOperationComponent,
    ViewOperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
