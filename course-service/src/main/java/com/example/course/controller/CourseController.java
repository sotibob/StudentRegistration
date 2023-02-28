package com.example.course.controller;

import com.example.course.entity.Course;
import com.example.course.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/")
    public List<Course> selectCourses() {
        return courseService.selectCourses();
    }

    @GetMapping("/{id}")
    public Course selectCourseById(@PathVariable("id") int id) {
        return courseService.selectCourseById(id);
    }

    @GetMapping("/name/{name}")
    public Course selectCourseByName(@PathVariable("name") String name) {
        return courseService.selectCourseByName(name);
    }

    @PostMapping("/add")
    public Course addCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    @PutMapping("/update/{id}")
    public Course updateCourse(@PathVariable("id") int id, @RequestBody Course course) {
        return courseService.updateCourse(id, course);
    }

    @DeleteMapping("/delete/{id}")
    public Course deleteCourse(@PathVariable("id") int id) {
        return courseService.deleteCourse(id);
    }
}
