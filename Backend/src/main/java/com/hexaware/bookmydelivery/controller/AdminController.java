package com.hexaware.bookmydelivery.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.bookmydelivery.entity.Admin;
import com.hexaware.bookmydelivery.service.AdminService;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@GetMapping("/admins")
	public ResponseEntity<List<Admin>> getAdminList() {
		List<Admin> adminList = adminService.getAllAdmins();
		
		if(adminList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(adminList);
		} else {
			return ResponseEntity.ok().body(adminList);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Admin>> getAdminById(@PathVariable(value = "id") Long adminId) {
		Optional<Admin> admin = adminService.getAdminByID(adminId);
		
		if(admin.isPresent()) {
			return ResponseEntity.ok().body(admin);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(admin);
		}
	}
	
	@PostMapping("/")
	public ResponseEntity<String> saveAdmin(@RequestBody Admin admin) {
		if(adminService.saveAdmin(admin)) {
			return new ResponseEntity<>("Admin Added" , HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Admin Not Added", HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}
	
	@PutMapping("/")
	public ResponseEntity<Admin> updateAdmin(@RequestBody Admin admin) {
		Admin updatedAdmin = adminService.updateAdmin(admin);
		
		if(updatedAdmin == null) {
			return ResponseEntity.ok().body(updatedAdmin);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(updatedAdmin);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteAdmin(@PathVariable(value = "id") Long adminId) {
		if (adminService.deleteAdmin(adminId)) {
			return new ResponseEntity<>("Admin Deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Admin Not Deleted", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
