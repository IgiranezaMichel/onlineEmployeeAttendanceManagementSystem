package com.employeeattendanceapp.EMPController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employeeattendanceapp.EMPrepository.EmployeeRepository;
import com.employeeattendanceapp.EMPrepository.EmployeerRepository;
import com.employeeattendanceapp.Model.Employee;
import com.employeeattendanceapp.Model.Employeer;
@RestController
public class EmployeeController {
@Autowired EmployeeRepository Employeepo;
@Autowired EmployeerRepository employeerRepository;
@PostMapping(value="/employee/save/{id}")  
public ResponseEntity<Employee>createEmployee(@RequestBody Employee data,@PathVariable int id){ 
      Employeer emp=employeerRepository.findById(id).get();
      data.setEmployeerId(emp);
    return ResponseEntity.ok(Employeepo.save(data));} 
@PostMapping(value="employee/delete")  
public String deleteEmployee(@RequestBody Employee data)
{   String result ="Employee deleted successfully";
    try {
  
  Employee emp= Employeepo.findByPhoneNumber(data.getPhoneNumber());
  Employeepo.deleteById(emp.getId());
} catch (Exception e) {
    result="Invalid Employee Account";
}
    return result;
}
@GetMapping(value = "/employee/all/{id}")
public List<Employee>getAllEmployees(@PathVariable int id){
    Employeer employeer=employeerRepository.findById(id).get();
    return Employeepo.findByEmployeerId(employeer);
} 
@GetMapping(value = "/employee/phonenumber/{id}")
public  Employee getEmployeeById(@PathVariable String id){
    return Employeepo.findByPhoneNumber(id);
} 
}
