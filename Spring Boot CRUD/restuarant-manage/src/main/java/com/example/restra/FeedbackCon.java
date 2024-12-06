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
public class FeedbackCon {
		@Autowired
		FeedbackSer fs;
		
		@PostMapping("/testimonials")
		public void testimonials(@RequestBody Feedback f) {
			 fs.testimonals(f);
		}
		@GetMapping("/feedbackall")
	    public List<Feedback> getAllContact() {
	        return fs.getAllFeedback();
	    }
	    @DeleteMapping("/feedbackdelete/{id}")
	    public ResponseEntity<Void> deleteFeedback(@PathVariable Integer id) {
	        fs.deleteFeedback(id);
	        return ResponseEntity.noContent().build();
	    }
}