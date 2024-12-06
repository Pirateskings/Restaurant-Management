package com.example.restra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintRepo  extends JpaRepository<Complaint,Integer>{

}
