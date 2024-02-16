package com.example.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Booking;
import com.example.entity.ManagerRegistration;
import com.example.entity.TurfDetails;
import com.example.entity.UserRegistration;
import com.example.repository.BookingRepo;
import com.example.repository.UserRegistrationRepo;

@Service
public class BookingService {

	@Autowired
	private BookingRepo bookingRepo;
	@Autowired
	UserRegistrationService userServ;
	@Autowired
	TurfService turfServ;
	
	@Autowired
	ManagerRegistrationService managerServ;


	public void addBooking(String date,String slot,Integer id,Long tId) {
		Booking booking=new Booking();
		booking.setBookingDate(date);
		booking.setTimeSlot(slot);
		UserRegistration user=userServ.getOneUser(id);
		TurfDetails turf=turfServ.getOneturf(tId);
		ManagerRegistration manager=managerServ.getOneUser(turfServ.getManagerIdByTurfId(tId));
		
		booking.setUser(user);
		booking.setTurf(turf);
		booking.setManager(manager);
		bookingRepo.save(booking);
		
		
	}
	
	public List<Booking> getAllBookings(){
		List<Booking> allBookings=bookingRepo.findAll();
		return allBookings;
		
	}
	  public List<Booking> getBookingsByUserId(Integer userId) {
	         UserRegistration user = userServ.getOneUser(userId);
	        List<Booking> bookings = bookingRepo.findByUser(user);
	        return bookings;
	    }
	  
	  
	
		  public List<Booking> getBookingsByManagerId(Integer managerId) {
		         ManagerRegistration manager = managerServ.getOneUser(managerId);
		        List<Booking> bookings = bookingRepo.findByManager(manager);
		        return bookings;
		    }
	
	

		
		

}
