package com.example.registration.entity;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Student {

    @Id
    private int studentId;
    private String password;
    private String firstName;
    private String lastName;
    private String studentDOB;
    private String email;
    private String street;
    private String city;
    private String state;
    private Integer zip;
    @ElementCollection
    private List<Integer> classIds;
}
