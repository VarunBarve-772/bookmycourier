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

import com.hexaware.bookmydelivery.entity.Customer;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;
import com.hexaware.bookmydelivery.service.CustomerService;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@GetMapping("/customers")
	public ResponseEntity<List<Customer>> getCustomerList() {
		List<Customer> customerList = customerService.getAllCustomers();
		
		if(customerList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(customerList);
		} else {
			return ResponseEntity.ok().body(customerList);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Customer>> getCustomerById(@PathVariable(value = "id") Long customerId) {
		Optional<Customer> customer = customerService.getCustomerByID(customerId);
		
		if(customer.isPresent()) {
			return ResponseEntity.ok().body(customer);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(customer);
		}
	}
	
	@PostMapping("/")
	public ResponseEntity<String> saveCustomer(@RequestBody Customer customer) {
		if(customerService.saveCustomer(customer)) {
			return new ResponseEntity<>("Customer Added" , HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Customer Not Added", HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}
	
	@PutMapping("/")
	public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer)throws ResourseNotFoundException {
		Customer updatedCustomer = customerService.updateCustomer(customer);
		
		if(updatedCustomer == null) {
			return ResponseEntity.ok().body(updatedCustomer);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(updatedCustomer);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable(value = "id") Long customerId) {
		if (customerService.deleteCustomer(customerId)) {
			return new ResponseEntity<>("Customer Deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Customer Not Deleted", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
