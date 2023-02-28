package com.example.registration.repository;

import com.example.registration.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository<Student, Integer> {

    Student findByStudentId(int id);

    Student findByEmail(String email);
}
