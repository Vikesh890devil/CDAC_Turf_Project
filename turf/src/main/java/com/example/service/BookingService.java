package com.example.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Booking;
import com.example.repository.BookingRepo;

@Service
public class BookingService {

	@Autowired
	BookingRepo bookingRef;
	@Autowired
	UserRegistrationService userServiceRef;
	
	public void addBooking(Booking booking,Integer id) {
		
		booking.setUser(userServiceRef.getOneUser(id)); 
		
		bookingRef.save(booking);
		
		
	}
	public Collection<Booking> getAllBookings(){
		Collection<Booking> allbook=bookingRef.findAll();	
		return allbook;
		
	}
}
