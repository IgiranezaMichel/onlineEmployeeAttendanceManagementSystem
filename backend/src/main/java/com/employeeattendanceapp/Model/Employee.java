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
public class Employee implements Serializable{
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    @Column(unique = true)
    private String phoneNumber;
    private String position;
    private double payment;
    @ManyToOne()
     @JsonIgnore
    private Employeer employeerId;
    @OneToMany(mappedBy="employee")
    private List<Attendance> listOfAttendance;
}
