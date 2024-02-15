package com.example.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.entity.Booking;
import com.example.service.BookingService;

@RestController
public class BookingController {
	
	@Autowired
	private BookingService servRef;
	
	@PostMapping("/add-booking/{userid}")
	public void addBooking(@RequestBody Booking booking,@PathVariable("userid") Integer id){
		
		servRef.addBooking(booking,id);
	}

	@GetMapping("/fetch-data")
	public Collection<Booking> getBookings(){
		Collection<Booking> allBook=servRef.getAllBookings();
		return allBook;		
	}
}
