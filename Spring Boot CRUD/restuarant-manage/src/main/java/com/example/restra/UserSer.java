package com.example.restra;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSer {
	
	@Autowired
	UserRepo ur;

	public void  vaild(User u) {
		 ur.save(u);
	}
	
	public Optional<User> findByUsernameAndPassword(String username, String password) {
		return  ur.findByUsernameAndPassword(username,password);

	}

	public void save(User loggedInUser) {
		 ur.save(loggedInUser);
	}

	public List<User> getAll() {
		 return ur.findAll();
	}

	public List<User> getUsername(String  username) {
		return  ur.findByUsername(username);
	}
	 public void addUser(User user) {
	         ur.save(user);
	    }

	    public User updateUser(Integer id, User user) throws Exception {
	        Optional<User> existingUser = ur.findById(id);
	        if (existingUser.isPresent()) {
	            User updatedUser = existingUser.get();
	            updatedUser.setName(user.getName());
	            updatedUser.setEmail(user.getEmail());
	            updatedUser.setUsername(user.getUsername());
	            updatedUser.setAddress(user.getAddress());
	            updatedUser.setPhone(user.getPhone());
	            updatedUser.setZipcode(user.getZipcode());
	            updatedUser.setStatus(user.getStatus());
	            updatedUser.setPassword(user.getPassword());
	            updatedUser.setLoggintime(user.getLoggintime());
	            return ur.save(updatedUser);
	        } else {
	            throw new Exception("User not found with id " + id);
	        }
	    }

	    public void deleteUser(Integer id) {
	        ur.deleteById(id);
	    }

		public Optional<User> forgotpassword(String username, String email) {
			// TODO Auto-generated method stub
			return ur.findByUsernameAndEmail(username,email);
		}
	
}
