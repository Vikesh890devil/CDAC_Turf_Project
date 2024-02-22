package com.example.controller;


import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Booking;
import com.example.service.BookingService;

@RestController
public class BookingController {
	
	@Autowired
	private BookingService servRef;
	
	@PostMapping("/add-booking/{userid}/{turfId}")
	public String addBooking(@RequestParam("date") String date,@RequestParam("slot") String slot,@PathVariable("userid") Integer id,@PathVariable("turfId") Long tId){
		return servRef.addBooking(date,slot,id,tId);
	}

	@GetMapping("/fetch-data")
	public Collection<Booking> getBookings(){
		Collection<Booking> allBook=servRef.getAllBookings();
		return allBook;		
	}
	
	@GetMapping("/get-user-bookings/{uId}")
	public List<Booking> getUserBookings(@PathVariable("uId") Integer id){
		
		return servRef.getBookingsByUserId(id);
	}

	@GetMapping("/get-manager-bookings/{mId}")
	public List<Booking> getaManagerBookings(@PathVariable("mId") Integer id){
		
		return servRef.getBookingsByManagerId(id);
	}
	
	

}
