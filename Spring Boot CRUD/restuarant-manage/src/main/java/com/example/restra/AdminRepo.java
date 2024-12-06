package com.example.restra;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface AdminRepo extends JpaRepository<Adminlog, Integer>{

	Optional<Adminlog> findByUsernameAndPasswordAndEmail(String username, String password, String email);
	
}
