package com.hexaware.bookmydelivery.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.bookmydelivery.entity.Center;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;
import com.hexaware.bookmydelivery.service.CenterService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/center")
public class CenterController {

	@Autowired
	private CenterService centerService;
	
	@GetMapping("/centers")
	public ResponseEntity<List<Center>> getCenterList() {
		List<Center> centerList = centerService.getAllCenters();
		
		if(centerList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(centerList);
		} else {
			return ResponseEntity.ok().body(centerList);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Center>> getCenterById(@PathVariable(value = "id") Long centerId) {
		Optional<Center> center = centerService.getCenterByID(centerId);
		
		if(center.isPresent()) {
			return ResponseEntity.ok().body(center);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(center);
		}
	}
	
	@PostMapping("/")
	public ResponseEntity<String> saveCenter(@RequestBody Center center) {
		if(centerService.saveCenter(center)) {
			return new ResponseEntity<>("Center Added" , HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Center Not Added", HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}
	
	@PutMapping("/")
	public ResponseEntity<Center> updateCenter(@RequestBody Center center)throws ResourseNotFoundException {
		Center updatedCenter = centerService.updateCenter(center);
		
		if(updatedCenter == null) {
			return ResponseEntity.ok().body(updatedCenter);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(updatedCenter);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteCenter(@PathVariable(value = "id") Long centerId) {
		if (centerService.deleteCenter(centerId)) {
			return new ResponseEntity<>("Center Deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Center Not Deleted", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
