package com.example.restra;



import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="User")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	@Column(unique=true)
	private String email;
	@Column(unique=true)
	private String username;
	private String address;
	private String phone;
	private String zipcode;
	private String confirmpass;
	private String status;
	private String date;
	private String password;
	private LocalDateTime loggintime;
	public User(int id, String name, String email, String username, String address, String phone, String zipcode,
			String confirmpass, String status, String date, String password, LocalDateTime loggintime) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.username = username;
		this.address = address;
		this.phone = phone;
		this.zipcode = zipcode;
		this.confirmpass = confirmpass;
		this.status = status;
		this.date = date;
		this.password = password;
		this.loggintime = loggintime;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getZipcode() {
		return zipcode;
	}
	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
	public String getConfirmpass() {
		return confirmpass;
	}
	public void setConfirmpass(String confirmpass) {
		this.confirmpass = confirmpass;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
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
	
	public User() {}
	
}
