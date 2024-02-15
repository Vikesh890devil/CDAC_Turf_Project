package com.example.entity;

import java.util.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Date bookingDate;
	
	private String timeSlot;
		
	@ManyToOne(cascade = CascadeType.ALL)
	private UserRegistration user ;
	
	@ManyToOne(cascade = CascadeType.ALL)
	private TurfDetails turf;
	
	public Booking() {
		// TODO Auto-generated constructor stub
	}

	

	public Booking(Long id, Date bookingDate, String timeSlot, UserRegistration user, TurfDetails turf) {
		super();
		this.id = id;
		this.bookingDate = bookingDate;
		this.timeSlot = timeSlot;
		this.user = user;
		this.turf = turf;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public Date getBookingDate() {
		return bookingDate;
	}



	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}



	public String getTimeSlot() {
		return timeSlot;
	}



	public void setTimeSlot(String timeSlot) {
		this.timeSlot = timeSlot;
	}



	public UserRegistration getUser() {
		return user;
	}



	public void setUser(UserRegistration user) {
		this.user = user;
	}



	public TurfDetails getTurf() {
		return turf;
	}



	public void setTurf(TurfDetails turf) {
		this.turf = turf;
	}



	@Override
	public String toString() {
		return "Booking [id=" + id + ", bookingDate=" + bookingDate + ", timeSlot=" + timeSlot + ", user=" + user
				+ ", turf=" + turf + "]";
	}

}
