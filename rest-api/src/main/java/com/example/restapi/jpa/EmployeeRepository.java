package com.example.restapi.jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.restapi.model.Employee;



@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
