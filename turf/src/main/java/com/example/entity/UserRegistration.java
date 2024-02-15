package com.example.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "user_details", uniqueConstraints = @UniqueConstraint(columnNames = { "username" }))
@SequenceGenerator(name="port_gen",sequenceName="port_gen",initialValue = 100)
public class UserRegistration {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	private String Name;
	private int age;
	private String mobileNo;
	private String username;
	private String password;
	
	@OneToMany(mappedBy = "user" )
	private List<Booking>  bookings =new ArrayList<>();

	public UserRegistration() {
		// TODO Auto-generated constructor stub
	}

	

	public UserRegistration(int userId, String name, int age, String mobileNo, String username, String password,
			List<Booking> bookings) {
		super();
		this.userId = userId;
		Name = name;
		this.age = age;
		this.mobileNo = mobileNo;
		this.username = username;
		this.password = password;
		this.bookings = bookings;
	}



	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}



	public List<Booking> getBookings() {
		return bookings;
	}



	public void setBookings(List<Booking> bookings) {
		this.bookings = bookings;
	}
	

}
