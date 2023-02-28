package com.example.registration.VO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Course {

    private int classId;
    private String className;
    private String creditHours;
    private String dateTime;
    private String classProfessor;
    private String classLocation;
}
