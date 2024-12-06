package com.example.restra;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="AdminLog")
public class Adminlog {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String username;
	private String status;
	private String password;
	@Column(unique=true)
	private String email;
	private LocalDateTime loggintime;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public LocalDateTime getLoggintime() {
		return loggintime;
	}
	public void setLoggintime(LocalDateTime loggintime) {
		this.loggintime = loggintime;
	}
	public Adminlog(int id, String email, String username, String status, String password, LocalDateTime loggintime) {
		super();
		this.id = id;
		this.email = email;
		this.username = username;
		this.status = status;
		this.password = password;
		this.loggintime = loggintime;
	}
	
	public Adminlog() {}

}
