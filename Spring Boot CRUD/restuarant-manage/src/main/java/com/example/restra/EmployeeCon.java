package com.example.restra;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200")
public class EmployeeCon {
	@Autowired
	EmployeeSer es;
	

	 @GetMapping("/getemployee")
	    public List<Employee> getAllEmployees() {
	        return es.getAllEmployees();
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Employee> getEmployeeById(@PathVariable Integer id) {
	        Employee employee = es.getEmployeeById(id);
	        return employee != null ? ResponseEntity.ok(employee) : ResponseEntity.notFound().build();
	    }

	    @PostMapping("/addemployee")
	    public Employee addEmployee(@RequestBody Employee employee) {
	        return es.addEmployee(employee);
	    }

	    @PutMapping("/update/{id}")
	    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employee) {
	        Employee updatedEmployee = es.updateEmployee(id, employee);
	        return updatedEmployee != null ? ResponseEntity.ok(updatedEmployee) : ResponseEntity.notFound().build();
	    }

	    @DeleteMapping("/delete/{id}")
	    public ResponseEntity<Void> deleteEmployee(@PathVariable int id) {
	        es.deleteEmployee(id);
	        return ResponseEntity.noContent().build();
	    }
	    
	    @PostMapping("/netsalary/{name}")
	  	    public ResponseEntity<String> updateNetSalary(
	            @PathVariable String name,
	            @RequestBody String Totalsalary) {
	        
	    		es.updateSalary(name, Totalsalary);
				return ResponseEntity.ok("Calculated");
	    }
}
