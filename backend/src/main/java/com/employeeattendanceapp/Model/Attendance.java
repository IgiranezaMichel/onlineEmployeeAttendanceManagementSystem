package com.employeeattendanceapp.Model;
import java.io.Serializable;
import java.time.Instant;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Attendance implements Serializable{
@Id @GeneratedValue(strategy = GenerationType.AUTO)
   private int id;

   @ManyToOne
   @JsonIgnore
   private Employee employee;
   private Date attendanceDate=Date.from(Instant.now()); 

}
