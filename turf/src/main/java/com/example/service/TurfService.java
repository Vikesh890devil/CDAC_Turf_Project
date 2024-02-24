package com.example.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.entity.ManagerRegistration;
import com.example.entity.TurfDetails;

import com.example.repository.TurfRepo;

@Service
public class TurfService {

	@Autowired
	private TurfRepo turfRepoRef;
	@Autowired
	private ManagerRegistrationService managerServ;


	public String saveData(MultipartFile file, String name, String description, double width, double length,double price, Integer id)
			throws IOException {
		TurfDetails turfdetails = new TurfDetails();
//		List<TurfDetails> detail = new ArrayList<>();
		turfdetails.setDescription(description);
		turfdetails.setLength(length);
		turfdetails.setName(name);
		turfdetails.setWidth(width);
		turfdetails.setPrice(price);
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
	        TurfDetails turfDetails =getOneturf(turfId);

	        if (turfDetails != null && turfDetails.getManager() != null) {
	            return turfDetails.getManager().getManagerId();
	        }

	        return null; 
	    }
		 public List<TurfDetails> getTurfsByManagerId(Integer managerId) {
		         ManagerRegistration manager = managerServ.getOneUser(managerId);
		        List<TurfDetails> managerTurf = turfRepoRef.findByManager(manager);
		        return managerTurf;
		    }
		 
		 public byte[] getImageById(Long id) {
		        Optional<TurfDetails> turfDetailsOptional = turfRepoRef.findById(id);
		        return turfDetailsOptional.map(TurfDetails::getImage).orElse(null);
		    }

}
