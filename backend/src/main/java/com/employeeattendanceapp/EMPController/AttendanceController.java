package com.employeeattendanceapp.EMPController;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.employeeattendanceapp.EMPrepository.AttendanceRepository;
import com.employeeattendanceapp.EMPrepository.EmployeeRepository;
import com.employeeattendanceapp.EMPrepository.EmployeerRepository;
import com.employeeattendanceapp.Model.Attendance;
import com.employeeattendanceapp.Model.Employee;

import java.util.Date;
@RestController
@ControllerAdvice
public class AttendanceController {
    @Autowired AttendanceRepository attendanceRepository;
    @Autowired EmployeeRepository employeeRepository;
    @Autowired EmployeerRepository employeerRepository; 
@GetMapping(value="/attendance/save/{employeeId}/{employeerId}")  
public ResponseEntity<Attendance>createAttendance(@PathVariable int employeeId,@PathVariable int employeerId){
     Employee employee = employeeRepository.findById(employeeId).get();
     Attendance attend=new Attendance();
     attend.setEmployee(employee);
     attend.setAttendanceDate(new Date());
     return ResponseEntity.ok(attendanceRepository.save(attend));} 
@PostMapping(value="attendance/delete")  
public String deleteAttendance(@RequestBody Attendance data)
{   String result ="Attendance deleted successfully";
    try {
  attendanceRepository.deleteById(data.getId());
} catch (Exception e) {
    result="Invalid Attendance Account";
}
    return result;
}
// @GetMapping(value = "/attendance/employeer/{employeerId}")
// public List<Attendance>getAllAttendances(@PathVariable int employeerId){
//     Employeer employeer=employeerRepository.findById(employeerId).orElse(null);
//     for(Attendance attend:employeer.getListOfEmployees())
//     return attend;
// } 
@Autowired private EmployeeRepository empRepo;
@GetMapping(value = "/attendance/all/{id}")
public  List<Attendance> getAttendanceById(@PathVariable int id){
    Employee emp=empRepo.findById(id).orElse(null);
    return attendanceRepository.findByEmployee(emp);
} 
}
