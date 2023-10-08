package com.employeeattendanceapp.EMPrepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.employeeattendanceapp.Model.Employee;
import com.employeeattendanceapp.Model.Employeer;

public interface EmployeeRepository  extends JpaRepository<Employee,Integer>{
    Employee findByPhoneNumber(String phoneNumber);
    List<Employee> findByEmployeerId(Employeer employeer);
    
}
