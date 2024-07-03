package com.yash.student.service;

import java.util.List;

import com.yash.student.model.Student;

public interface StudentService {
	public Student saveStudent(Student student);
	public Student getStudentById(Long sid);
	public List<Student> getAllStudent();
	public Student updateStudent(Student student);
	public String deleteStudent(Long studentId);
}
