package com.yash.student.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yash.student.model.Student;
import com.yash.student.serviceimpl.StudentServiceImpl;

@RestController
//@CrossOrigin("*")
@RequestMapping("/employee/student")
public class StudentController {
	
	@Autowired
	private StudentServiceImpl studentServiceImpl;

	@PostMapping("/save")
	public Student createStudent(@RequestBody Student student) {
		return studentServiceImpl.saveStudent(student);
	}
	
	@GetMapping("/{studentId}")
	public Student getStudentById(@PathVariable Long studentId) {
		return studentServiceImpl.getStudentById(studentId);
	}
	
	@GetMapping("/getstudents")
	public List<Student> getAllStudents(){
		return studentServiceImpl.getAllStudent();
	}
	
	
	@DeleteMapping("/remove/{studenId}")
	public String deleteStudent(@PathVariable Long studenId) {
		 return studentServiceImpl.deleteStudent(studenId);
	}
	
	@PutMapping("/editstudent")
	public Student updateStudent(@RequestBody Student student) {
		return studentServiceImpl.updateStudent(student);
	}
	
}
