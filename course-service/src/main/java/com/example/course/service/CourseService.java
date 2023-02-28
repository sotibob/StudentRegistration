package com.example.course.service;

import com.example.course.entity.Course;
import com.example.course.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepo courseRepo;

    public List<Course> selectCourses() {
        return courseRepo.findAll();
    }

    public Course selectCourseById(int id) {
        return courseRepo.findByClassId(id);
    }

    public Course selectCourseByName(String name) {
        return courseRepo.findByClassName(name);
    }

    public Course addCourse(Course course) {
        if(!(selectCourses().size() > 0)) {
            course.setClassId(1);
        } else {
            int val = selectCourses().size() - 1;
            int id = selectCourses().get(val).getClassId() + 1;
            course.setClassId(id);
        }
        return courseRepo.save(course);
    }

    public Course updateCourse(int id, Course course) {
        Course c = selectCourseById(id);
        if((course.getClassName() != null) && (course.getClassName() != c.getClassName())){
            c.setClassName(course.getClassName());
        }
        if((course.getClassProfessor() != null) && (course.getClassProfessor() != c.getClassProfessor())){
            c.setClassProfessor(course.getClassProfessor());
        }
        if((course.getCreditHours() != null) && (course.getCreditHours() != c.getCreditHours())){
            c.setCreditHours(course.getCreditHours());
        }
        if((course.getClassLocation() != null) && (course.getClassLocation() != c.getClassLocation())){
            c.setClassLocation(course.getClassLocation());
        }
        if((course.getDateTime() != null) && (course.getDateTime() != c.getDateTime())){
            c.setDateTime(course.getDateTime());
        }
        return courseRepo.save(c);
    }

    public Course deleteCourse(int id) {
        Course c = selectCourseById(id);
        courseRepo.delete(c);
        return c;
    }

}
