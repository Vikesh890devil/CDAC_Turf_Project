package com.example.controller;

import java.io.IOException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.entity.TurfDetails;
import com.example.service.TurfService;
@CrossOrigin("*")
@RestController
@RequestMapping("/input")
public class TurfController {

	@Autowired
	private TurfService turfServiceRef;
	
	@PostMapping("/turf-data/save/{mId}")
	public String saveData(@RequestParam("file") MultipartFile file,@RequestParam("turfName") String name,@RequestParam("description") String description,@RequestParam("width") double width,@RequestParam("length")double length,@RequestParam("price")double price,@PathVariable("mId") Integer id) throws IOException {
		
		return turfServiceRef.saveData(file, name, description, width, length,price,id);
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
	@GetMapping("/get-managerTurfs/{managerId}")
	public Collection<TurfDetails> getManagerTurfs(@PathVariable("managerId")Integer id ){
		Collection<TurfDetails> allTurfs=turfServiceRef.getTurfsByManagerId(id);
		return allTurfs;
	}
	
	
	@GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getImageById(@PathVariable Long id) {
        byte[] imageData = turfServiceRef.getImageById(id);

        if (imageData != null) {
            // Set appropriate headers like content type
            return ResponseEntity.ok().body(imageData);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
