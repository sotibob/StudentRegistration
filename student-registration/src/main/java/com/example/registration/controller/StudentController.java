package com.example.registration.controller;

import com.example.registration.VO.ResponseTemplate;
import com.example.registration.entity.Student;
import com.example.registration.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/")
    public List<ResponseTemplate> selectStudentsWithCourses() {
        return studentService.selectStudentsWithCourses();
    }

    @GetMapping("/{id}")
    public ResponseTemplate selectStudentByIdWithCourses(@PathVariable("id") int id) {
        return studentService.selectStudentByIdWithCourses(id);
    }

    @GetMapping("/email/{email}")
    public ResponseTemplate selectStudentByEmailWithCourses(@PathVariable("email") String email) {
        return studentService.selectStudentByEmailWithCourses(email);
    }

    @PostMapping("/add")
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    @PutMapping("/update/{id}")
    public Student updateStudent(@PathVariable("id") int id, @RequestBody Student student) {
        return studentService.updateStudent(id, student);
    }

    @DeleteMapping("/delete/{id}")
    public Student deleteStudent(@PathVariable("id") int id) {
        return studentService.deleteStudent(id);
    }
}
