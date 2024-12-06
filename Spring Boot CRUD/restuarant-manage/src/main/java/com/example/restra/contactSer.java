package com.example.restra;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class contactSer {
	
	@Autowired
	contactRepo cr;
	
	public void contact(contact c) {
		cr.save(c);
	}
	public List<contact> getAllContact() {
        return cr.findAll();
    }
	 public void deleteContact(Integer id) {
	        cr.deleteById(id);
	    }

}
