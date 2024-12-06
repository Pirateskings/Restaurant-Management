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
public class contactCon {
	@Autowired
	 contactSer us;
	
	@PostMapping("/contact")
	public void contact(@RequestBody contact c) {
		us.contact(c);
	}
	@GetMapping("/contactall")
    public List<contact> getAllContact() {
        return us.getAllContact();
    }
    @DeleteMapping("/contactdelete/{id}")
    public ResponseEntity<Void> deleteContact(@PathVariable Integer id) {
        us.deleteContact(id);
        return ResponseEntity.noContent().build();
    }

}
