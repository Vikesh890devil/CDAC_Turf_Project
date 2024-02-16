package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Booking;
import com.example.entity.ManagerRegistration;
import com.example.entity.UserRegistration;

public interface BookingRepo extends JpaRepository<Booking, Long> {
	
	List<Booking> findByUser(UserRegistration user);
	
	List<Booking> findByManager(ManagerRegistration manager);

}
