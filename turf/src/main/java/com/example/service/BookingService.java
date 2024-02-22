package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Booking;
import com.example.entity.ManagerRegistration;
import com.example.entity.TurfDetails;
import com.example.entity.UserRegistration;
import com.example.repository.BookingRepo;

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

	public String addBooking(String date, String slot, Integer id, Long tId) {
		if(!checkAvailability(date, slot)) {
			Booking booking = new Booking();
			booking.setBookingDate(date);
			booking.setTimeSlot(slot);
			UserRegistration user = userServ.getOneUser(id);
			TurfDetails turf = turfServ.getOneturf(tId);
			ManagerRegistration manager = managerServ.getOneUser(turfServ.getManagerIdByTurfId(tId));

			booking.setUser(user);
			booking.setTurf(turf);
			booking.setManager(manager);
			bookingRepo.save(booking);
			return "booking added successfully";
		}
		else {
			return "the slot is not available";
		}
			

	}

	public List<Booking> getAllBookings() {
		List<Booking> allBookings = bookingRepo.findAll();
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
	
	public boolean checkAvailability(String date, String slot) {
		Booking booking = bookingRepo.checkAvailability(date, slot);
		
		if(booking != null)
			return true;
		
		return false;
		
		
		
		
	}

}
