package com.example.registration.service;

import com.example.registration.VO.Course;
import com.example.registration.VO.ResponseTemplate;
import com.example.registration.entity.Student;
import com.example.registration.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private RestTemplate restTemplate;

    public List<ResponseTemplate> selectStudentsWithCourses() {
        List<ResponseTemplate> voL = new ArrayList<ResponseTemplate>();
        List<Student> s = studentRepo.findAll();
        for(int x = 0; x < s.size(); x++) {
            ResponseTemplate vo = new ResponseTemplate();
            List<Course> courses = new ArrayList<Course>();
            Student stu = studentRepo.findByStudentId(s.get(0).getStudentId());
            for(Integer t : stu.getClassIds()) {
                Course c = restTemplate.getForObject("http://localhost:9100/courses/" + t, Course.class);
                courses.add(c);
            }

            vo.setStudent(stu);
            vo.setCourses(courses);
            voL.add(vo);
        }
        return voL;
    }

    public ResponseTemplate selectStudentByIdWithCourses(int id) {
        ResponseTemplate vo = new ResponseTemplate();
        List<Course> courses = new ArrayList<Course>();
        Student stu = studentRepo.findByStudentId(id);
        for(Integer t : stu.getClassIds()) {
            Course c = restTemplate.getForObject("http://localhost:9100/courses/" + t, Course.class);
            courses.add(c);
        }
        vo.setStudent(stu);
        vo.setCourses(courses);
        return vo;
    }

    public ResponseTemplate selectStudentByEmailWithCourses(String email) {
        ResponseTemplate vo = new ResponseTemplate();
        List<Course> courses = new ArrayList<Course>();
        Student stu = studentRepo.findByEmail(email);
        for(Integer t : stu.getClassIds()) {
            Course c = restTemplate.getForObject("http://localhost:9100/courses/" + t, Course.class);
            courses.add(c);
        }
        vo.setStudent(stu);
        vo.setCourses(courses);
        return vo;
    }

    public Student addStudent(Student student) {
        if(!(studentRepo.findAll().size() > 0)) {
            student.setStudentId(1);
        } else {
            student.setStudentId(studentRepo.findAll().get(studentRepo.findAll().size() -1).getStudentId() + 1);
        }
        return studentRepo.save(student);
    }

    public Student updateStudent(int id, Student student) {
        Student s = studentRepo.findByStudentId(id);
        if((student.getPassword() != null) && !(student.getPassword().equals(s.getPassword()))){
            s.setPassword(student.getPassword());
        }
        if((student.getFirstName() != null) && !(student.getFirstName().equals(s.getFirstName()))){
            s.setFirstName(student.getFirstName());
        }
        if((student.getLastName() != null) && (student.getLastName() != s.getLastName())){
            s.setLastName(student.getLastName());
        }
        if((student.getStudentDOB() != null) && (student.getStudentDOB() != s.getStudentDOB())){
            s.setStudentDOB(student.getStudentDOB());
        }
        if((student.getEmail() != null) && (student.getEmail() != s.getEmail())){
            s.setEmail(student.getEmail());
        }
        if((student.getStreet() != null) && (student.getStreet() != s.getStreet())){
            s.setStreet(student.getStreet());
        }
        if((student.getCity() != null) && (student.getCity() != s.getCity())){
            s.setCity(student.getCity());
        }
        if((student.getState() != null) && (student.getState() != s.getState())){
            s.setState(student.getState());
        }
        if((student.getZip() != null) && (student.getZip() != s.getZip())){
            s.setZip(student.getZip());
        }
        if((student.getClassIds() != null) && (student.getClassIds() != s.getClassIds())){
            s.setClassIds(student.getClassIds());
        }
        studentRepo.save(s);
        return s;
    }

    public Student deleteStudent(int id) {
        Student s = studentRepo.findByStudentId(id);
        studentRepo.delete(s);
        return s;
    }
}
