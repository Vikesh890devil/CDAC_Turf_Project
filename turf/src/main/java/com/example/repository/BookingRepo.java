package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Booking;

public interface BookingRepo extends JpaRepository<Booking, Long> {

}
