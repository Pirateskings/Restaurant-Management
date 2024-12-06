package com.example.restra;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	

Optional<User> findByUsernameAndPassword(String username, String password);

List<User> findByUsername(String username);

Optional<User> findByStatus(String status);

Optional<User> findByUsernameAndEmail(String username, String email);


}
