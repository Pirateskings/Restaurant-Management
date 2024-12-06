package com.example.restra;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class ComplaintSer {
	@Autowired
	ComplaintRepo cr;
	
	public void complaint(Complaint c) {
		cr.save(c);
	}
	public List<Complaint> getAllComplaint() {
        return cr.findAll();
    }
	 public void deleteComplaint(Integer id) {
	        cr.deleteById(id);
	    }
}
