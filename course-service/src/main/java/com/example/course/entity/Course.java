package com.example.course.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Course {

    @Id
    private int classId;
    private String className;
    private Integer creditHours;
    private String dateTime;
    private String classProfessor;
    private String classLocation;
}
