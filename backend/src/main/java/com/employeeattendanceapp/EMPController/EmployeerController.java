package com.employeeattendanceapp.EMPController;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.employeeattendanceapp.EMPrepository.EmployeerRepository;
import com.employeeattendanceapp.Model.Employeer;

@RestController
public class EmployeerController {
@Autowired EmployeerRepository employeerRep;
@PostMapping(value="/employeer/save")  
public ResponseEntity<Employeer>createEmployeer(@RequestBody Employeer data)
{
    return ResponseEntity.ok(employeerRep.save(data));
} 
@PostMapping(value="/employeer/delete")  
public String deleteEmployeer(@RequestBody Employeer data)
{   String result ="Account deleted successfully";
    try {
  Employeer emp= employeerRep.findByEmail(data.getEmail());
  employeerRep.deleteById(emp.getId());
} catch (Exception e) {
    result="Invalid Account";
}
    return result;
}
@GetMapping(value = "/employeer/all")
public List<Employeer>getAllEmployeers(){
    return employeerRep.findAll();
} 
@PostMapping(value = "/employeer/login")
public Employeer login(@RequestBody Employeer data){
    Employeer employee =new Employeer();
    employee=employeerRep.findByEmail(data.getEmail());
   System.out.println("Executes ");
    return employee;
} 
@GetMapping(value = "/employeer")
public Employeer login(){
    Employeer employee =new Employeer();
    employee=employeerRep.findById(1).orElse(employee);
   System.out.println("Executes ");
    return employee;
} 
}
