package com.example.restra;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="newseltter")
public class newseltter {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column(unique=true)
	private String myemail;
	
	
	public newseltter() {}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getMyemail() {
		return myemail;
	}


	public void setMyemail(String myemail) {
		this.myemail = myemail;
	}


	public newseltter(int id, String myemail) {
		super();
		this.id = id;
		this.myemail = myemail;
	}
}
