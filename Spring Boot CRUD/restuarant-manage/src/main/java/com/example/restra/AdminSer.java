package com.example.restra;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminSer {

	@Autowired
	AdminRepo ao;
	
	public void admin(Adminlog a) {
		ao.save(a);
	}

	public void save(Adminlog loggedInUser) {
		ao.save(loggedInUser);
		
		
	}

	public Optional<Adminlog> adminlogin(String username, String password, String email) {
		return ao.findByUsernameAndPasswordAndEmail(username,password,email);
		 
		}
}
