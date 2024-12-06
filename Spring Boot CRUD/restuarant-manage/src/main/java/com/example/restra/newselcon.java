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
@CrossOrigin(origins = "http://localhost:4200")
public class newselcon {
	@Autowired
	newselser nn;
	
	@PostMapping("/newseltter")
	public void  newsel(@RequestBody newseltter n) {
		nn.email(n);
	}
	@GetMapping("/newsletterall")
    public List<newseltter> getAllNewsletter() {
        return nn.getAllNewsletter();
    }
    @DeleteMapping("/newsletterdelete/{id}")
    public ResponseEntity<Void> deleteNewsletter(@PathVariable Integer id) {
        nn.deleteNewSletter(id);
        return ResponseEntity.noContent().build();
    }

}
