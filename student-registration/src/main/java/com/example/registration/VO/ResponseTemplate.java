package com.example.registration.VO;

import com.example.registration.entity.Student;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResponseTemplate {

    private Student student;
    private List<Course> courses;

}
