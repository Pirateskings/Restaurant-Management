package com.example.restra;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class newselser {
	@Autowired
	newselrepos nr;
		
	public void email(newseltter n) {
			nr.save(n);
	}
	
	public List<newseltter> getAllNewsletter() {
        return nr.findAll();
    }
	 public void deleteNewSletter(Integer id) {
	        nr.deleteById(id);
	    }
}
