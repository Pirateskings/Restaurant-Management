package com.example.restra;

import java.time.LocalDateTime;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController

@RequestMapping("/api")
@CrossOrigin(origins ="http://localhost:4200")
public class UserCon {
	@Autowired
	 UserSer us;
	
	@PostMapping("/register")
	public void register(@RequestBody User u) {
		us.vaild(u);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> valid(@RequestBody User loginRequest) {
	    Optional<User> user = us.findByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
	    
	    if (user.isPresent()) {
	        User loggedInUser = user.get();
	        loggedInUser.setStatus("Active");
	        loggedInUser.setLoggintime(LocalDateTime.now());
	        us.save(loggedInUser);
	        
	        // Return a success message or token here
	        return ResponseEntity.ok("Login successful");
	    }
	    
	    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
	}

	@GetMapping("/auth/{username}/{password}")
	public Optional<User> getUsername(@PathVariable String username,@PathVariable String password){
		return us.findByUsernameAndPassword(username,password);
	}
	@GetMapping("/userdata")
	public List<User> getAll(){
		return us.getAll();
	}
	
	 // Add new user
    @PostMapping("/adduser")
    public void addUser(@RequestBody User user) {
        us.addUser(user);
    }

    // Update an existing user
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Integer id, @RequestBody User user) throws Exception {
        return us.updateUser(id, user);
    }

    // Delete a user by ID
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Integer id) {
        us.deleteUser(id);
    }
    
    @PostMapping("/resetpass/{username}/{email}")
    public Optional<User>  forgotpassword(@PathVariable String username,@PathVariable String email) {
		return us.forgotpassword(username,email);
    	
    }
}
