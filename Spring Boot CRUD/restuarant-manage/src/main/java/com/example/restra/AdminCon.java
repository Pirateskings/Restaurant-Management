package com.example.restra;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;

@RestController

@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200")
public class AdminCon {
	@Autowired
	 AdminSer us;
	
	@PostMapping("/adminuser")
	public void admin(@RequestBody Adminlog u) {
		us.admin(u);
	}

	@PostMapping("/adminlogin")
	public ResponseEntity<?> admin1(@RequestBody Adminlog loginRequest) {
	    Optional<Adminlog> user = us.adminlogin(loginRequest.getUsername(), loginRequest.getPassword(), loginRequest.getEmail());
	    
	    if (user.isPresent()) {
	        Adminlog loggedInUser = user.get();
	        loggedInUser.setStatus("Active");
	        loggedInUser.setLoggintime(LocalDateTime.now());
	        us.save(loggedInUser);
	        
	        // Return a success message or token here
	        return ResponseEntity.ok("Admin login successful");
	    }
	    
	    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid admin credentials");
	}

	
	
}
	

