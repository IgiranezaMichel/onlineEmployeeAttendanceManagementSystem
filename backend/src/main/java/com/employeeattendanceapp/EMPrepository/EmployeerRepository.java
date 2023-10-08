package com.employeeattendanceapp.EMPrepository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.employeeattendanceapp.Model.Employeer;

public interface EmployeerRepository extends JpaRepository<Employeer,Integer>{

    Employeer findByEmail(String email);
    
}
