package com.example.restra;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class FeedbackSer {
	@Autowired
	FeedbackRepo fr;
	
	public void testimonals(Feedback f) {
		 fr.save(f);
	}
	public List<Feedback> getAllFeedback() {
        return fr.findAll();
    }
	 public void deleteFeedback(Integer id) {
	        fr.deleteById(id);
	    }
}