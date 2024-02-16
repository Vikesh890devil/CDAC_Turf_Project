package com.example.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.entity.Booking;
import com.example.entity.ManagerRegistration;
import com.example.entity.TurfDetails;
import com.example.entity.UserRegistration;
import com.example.repository.ManagerRegistrationRepo;
import com.example.repository.TurfRepo;

@Service
public class TurfService {

	@Autowired
	private TurfRepo turfRepoRef;
	@Autowired
	private ManagerRegistrationService managerServ;
	@Autowired
	private ManagerRegistrationRepo managerRepo;

	public String saveData(MultipartFile file, String name, String description, double width, double length, Integer id)
			throws IOException {
		TurfDetails turfdetails = new TurfDetails();
//		List<TurfDetails> detail = new ArrayList<>();
		turfdetails.setDescription(description);
		turfdetails.setLength(length);
		turfdetails.setName(name);
		turfdetails.setWidth(width);
		turfdetails.setImage(file.getBytes());
//		detail.add(turfdetails);

		ManagerRegistration man = managerServ.getOneUser(id);
//		man.setTurf(detail);
		turfdetails.setManager(man);
		turfRepoRef.save(turfdetails);
//		managerRepo.save(man);

		return "turf details saved sucessfully";
	}

	public List<TurfDetails> getAllTurf() {

		List<TurfDetails> allTurf = turfRepoRef.findAll();
		return allTurf;
	}

	public TurfDetails getOneturf(Long id) {

		TurfDetails foundTurf = null;
		Optional<TurfDetails> opt = turfRepoRef.findById(id);
		if (!opt.isEmpty())
			foundTurf = opt.get();
		return foundTurf;
	}
	
	  public Integer getManagerIdByTurfId(Long turfId) {
	        // Assuming you have a method to get TurfDetails by ID, replace the following line with the actual retrieval
	        TurfDetails turfDetails =getOneturf(turfId);

	        if (turfDetails != null && turfDetails.getManager() != null) {
	            return turfDetails.getManager().getManagerId();
	        }

	        return null; // or throw an exception or handle accordingly based on your requirements
	    }

}
