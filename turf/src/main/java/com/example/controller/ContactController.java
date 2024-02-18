package com.example.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.ContactUs;
import com.example.service.ContactService;

@RestController
public class ContactController {
	
	@Autowired
	private ContactService servRef;
	
	@PostMapping("/add-query")
	public void contactUS(@RequestBody ContactUs contact) {
		
		servRef.contactUs(contact);
	}
	
	@GetMapping("/all-queries")
	public Collection<ContactUs> allQueries(){
		
		return servRef.allQueries();
	}

}
