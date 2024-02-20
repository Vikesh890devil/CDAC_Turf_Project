package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.ManagerRegistration;
import com.example.entity.TurfDetails;

public interface TurfRepo extends JpaRepository<TurfDetails, Long> {
       List<TurfDetails> findByManager(ManagerRegistration manager);


}
