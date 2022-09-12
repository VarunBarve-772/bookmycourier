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

import com.hexaware.bookmydelivery.entity.HeadManager;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;
import com.hexaware.bookmydelivery.service.HeadManagerService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/headmanager")
public class HeadManagerController {

	@Autowired
	private HeadManagerService headManagerService;
	
	@GetMapping("/headmanagers")
	public ResponseEntity<List<HeadManager>> getHeadManagerList() {
		List<HeadManager> headManagerList = headManagerService.getAllHeadManagers();
		
		if(headManagerList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(headManagerList);
		} else {
			return ResponseEntity.ok().body(headManagerList);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<HeadManager>> getHeadManagerById(@PathVariable(value = "id") Long headManagerId) {
		Optional<HeadManager> headManager = headManagerService.getHeadManagerByID(headManagerId);
		
		if(headManager.isPresent()) {
			return ResponseEntity.ok().body(headManager);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(headManager);
		}
	}
	
	@PostMapping("/")
	public ResponseEntity<String> saveHeadManager(@RequestBody HeadManager headManager) {
		if(headManagerService.saveHeadManager(headManager)) {
			return new ResponseEntity<>("Head Manager Added" , HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Head Manager Not Added", HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}
	
	@PutMapping("/")
	public ResponseEntity<HeadManager> updateHeadManager(@RequestBody HeadManager headManager)throws ResourseNotFoundException {
		HeadManager updatedHeadManager= headManagerService.updateHeadManager(headManager);
		
		if(updatedHeadManager == null) {
			return ResponseEntity.ok().body(updatedHeadManager);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(updatedHeadManager);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteHeadManager(@PathVariable(value = "id") Long headManagerId) {
		if (headManagerService.deleteHeadManager(headManagerId)) {
			return new ResponseEntity<>("Head Manager Deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Head Manager Not Deleted", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<HeadManager> loginHeadManager(@RequestBody HeadManager headManager) {
		HeadManager headManagerUser = headManagerService.loginHeadManager(headManager);
		
		if(headManagerUser == null) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(headManagerUser);
		} else {
			return ResponseEntity.ok().body(headManagerUser);
		}
	}
}
