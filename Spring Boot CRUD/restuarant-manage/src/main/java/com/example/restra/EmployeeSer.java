package com.example.restra;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeSer {
	
	@Autowired
	EmployeeRepo eo;
	
	 public Employee addEmployee(Employee employee) {
	        return eo.save(employee);
	    }
	
	 public List<Employee> getAllEmployees() {
	        return eo.findAll();
	    }

	    public Employee getEmployeeById(Integer id) {
	        return eo.findById(id).orElse(null);
	    }

	   

	    public Employee updateEmployee(Integer id, Employee updatedEmployee) {
	        Optional<Employee> optionalEmployee = eo.findById(id);
	        if (optionalEmployee.isPresent()) {
	            Employee employee = optionalEmployee.get();
	            employee.setName(updatedEmployee.getName());
	            employee.setEmail(updatedEmployee.getEmail());
	            employee.setPhone(updatedEmployee.getPhone());
	            employee.setPosition(updatedEmployee.getPosition());
	            employee.setPermissions(updatedEmployee.getPermissions());
	            employee.setSalary(updatedEmployee.getSalary());
	            return eo.save(employee);
	        }
	        return null;
	    }

	    public void deleteEmployee(Integer id) {
	        eo.deleteById(id);
	    }
	    public Employee updateSalary(String name, String totalSalary) {
	       
	        Optional<Employee> employeeOpt = eo.getByName(name);

	        if (employeeOpt.isPresent()) {
	            Employee employee = employeeOpt.get();
	            employee.setTotalsalary(totalSalary);
	            return eo.save(employee); 
	        }

	        return null; 
	    }
}
