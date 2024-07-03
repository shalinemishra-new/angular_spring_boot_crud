package com.yash.student.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yash.student.model.Student;
import com.yash.student.repository.StudentRepository;
import com.yash.student.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	private StudentRepository studentRepository;

	@Override
	public Student saveStudent(Student student) {
		Student student2=studentRepository.save(student);
		return student2;
	}

	@Override
	public Student getStudentById(Long sid) {
		return studentRepository.findById(sid).get();
	}

	@Override
	public List<Student> getAllStudent() {
		return studentRepository.findAll();
	}

	@Override
	public Student updateStudent(Student student) {
		// TODO Auto-generated method stub
	
		Student updatedStudent=studentRepository.findById(student.getStudentId()).get();
		if(updatedStudent!=null) {
			if(student.getFirstName()!=null) {
				updatedStudent.setFirstName(student.getFirstName());
			}
			if(student.getLastName()!=null) {
				updatedStudent.setLastName(student.getLastName());
			}
			if(student.getAge()!=null) {
				updatedStudent.setAge(student.getAge());
			}
			if(student.getContact()!=null) {
				updatedStudent.setContact(student.getContact());
			}
			
			updatedStudent=studentRepository.save(updatedStudent);
		}
		return updatedStudent;
	}

	@Override
	public String deleteStudent(Long studentId) {
		studentRepository.deleteById(studentId);
		return "Student removed successfully..";
	}

	

	
}
