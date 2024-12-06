package com.example.restra;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200")
public class ComplaintCon {
	@Autowired
	 ComplaintSer us;
	
	@PostMapping("/complaint")
	public void contact(@RequestBody Complaint c) {
		us.complaint(c);
	}
	
	@GetMapping("/complaintall")
    public List<Complaint> getAllComplaint() {
        return us.getAllComplaint();
    }
    @DeleteMapping("/complaintdelete/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Integer id) {
        us.deleteComplaint(id);
        return ResponseEntity.noContent().build();
    }
}