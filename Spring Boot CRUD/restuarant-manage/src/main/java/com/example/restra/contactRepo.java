package com.example.restra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface contactRepo  extends JpaRepository<contact,Integer>{

}
