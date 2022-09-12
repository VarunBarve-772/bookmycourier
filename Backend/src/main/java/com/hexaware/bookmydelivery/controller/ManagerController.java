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

import com.hexaware.bookmydelivery.entity.Manager;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;
import com.hexaware.bookmydelivery.service.ManagerService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/manager")
public class ManagerController {

	@Autowired
	private ManagerService managerService;
	
	@GetMapping("/managers")
	public ResponseEntity<List<Manager>> getMangerList() {
		List<Manager> managerList = managerService.getAllManagers();
		
		if(managerList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(managerList);
		} else {
			return ResponseEntity.ok().body(managerList);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Manager>> getManagerById(@PathVariable(value = "id") Long managerId) {
		Optional<Manager> manager = managerService.getManagerByID(managerId);
		
		if(manager.isPresent()) {
			return ResponseEntity.ok().body(manager);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(manager);
		}
	}
	
	@PostMapping("/")
	public ResponseEntity<String> saveManager(@RequestBody Manager manager) {
		if(managerService.saveManager(manager)) {
			return new ResponseEntity<>("<Manager Added" , HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Manager Not Added", HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}
	
	@PutMapping("/")
	public ResponseEntity<Manager> updateManager(@RequestBody Manager manager)throws ResourseNotFoundException {
		Manager updatedManager= managerService.updateManager(manager);
		
		if(updatedManager == null) {
			return ResponseEntity.ok().body(updatedManager);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(updatedManager);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteManager(@PathVariable(value = "id") Long managerId) {
		if (managerService.deleteManager(managerId)) {
			return new ResponseEntity<>("Manager Deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Manager Not Deleted", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<Manager> loginManager(@RequestBody Manager manager) {
		Manager managerUser = managerService.loginManager(manager);
		
		if(managerUser == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(managerUser);
		} else {
			return ResponseEntity.ok().body(managerUser);
		}
	}

}
