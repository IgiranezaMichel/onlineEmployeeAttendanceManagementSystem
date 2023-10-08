package com.employeeattendanceapp.EMPrepository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.employeeattendanceapp.Model.Attendance;
import com.employeeattendanceapp.Model.Employee;
public interface AttendanceRepository extends JpaRepository<Attendance,Integer>{
    List<Attendance> findByEmployee(Employee emp);
}
