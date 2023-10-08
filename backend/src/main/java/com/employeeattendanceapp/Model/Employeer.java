package com.employeeattendanceapp.Model;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Employeer implements Serializable{
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String phoneNumber;
    @Column(unique = true)
    private String email;
    private String password;
    private String companyName;
    @JsonIgnore
    @OneToMany(mappedBy="employeerId")
    private List<Employee> listOfEmployees;
  
    
}
