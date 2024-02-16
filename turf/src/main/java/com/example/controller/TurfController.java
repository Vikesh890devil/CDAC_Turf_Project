package com.example.controller;

import java.io.IOException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.entity.TurfDetails;
import com.example.service.TurfService;

@RestController
@RequestMapping("/input")
public class TurfController {

	@Autowired
	private TurfService turfServiceRef;
	
	@PostMapping("/turf-data/save/{mId}")
	public String saveData(@RequestParam("file") MultipartFile file,@RequestParam("turfName") String name,@RequestParam("description") String description,@RequestParam("width") double width,@RequestParam("length")double length,@PathVariable("mId") Integer id) throws IOException {
		
		return turfServiceRef.saveData(file, name, description, width, length,id);
	}
	
	@GetMapping("/get-allTurf")
	public Collection<TurfDetails> getAllTurf(){
		Collection<TurfDetails> allTurfs=turfServiceRef.getAllTurf();
		return allTurfs;
	}
	
	@GetMapping("/get-one/{tId}")
	public TurfDetails getOneTurf(@PathVariable("tId") Long id) {
		
		TurfDetails turf=turfServiceRef.getOneturf(id);
		return turf;
		
	}
	
	@GetMapping("/get_manager/{tId}")
	public int getManager(@PathVariable("tId") Long tID) {
		
		return turfServiceRef.getManagerIdByTurfId(tID);
	}
}
