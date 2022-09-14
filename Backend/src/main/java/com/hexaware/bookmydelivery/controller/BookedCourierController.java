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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.bookmydelivery.entity.BookedCourier;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;
import com.hexaware.bookmydelivery.service.BookedCourierService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/bookedcourier")
public class BookedCourierController {

	@Autowired
	private BookedCourierService bookedCourierService;
	
	@GetMapping("/bookedcouriers")
	public ResponseEntity<List<BookedCourier>> getBookedCourierList() {
		List<BookedCourier> bookedCourierList = bookedCourierService.getAllBookedCouriers();
		
		if(bookedCourierList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(bookedCourierList);
		} else {
			return ResponseEntity.ok().body(bookedCourierList);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<BookedCourier>> getBookedCourierById(@PathVariable(value = "id") Long bookedCourierId) {
		Optional<BookedCourier> bookedCourier = bookedCourierService.getBookedCourierByID(bookedCourierId);
		
		if(bookedCourier.isPresent()) {
			return ResponseEntity.ok().body(bookedCourier);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(bookedCourier);
		}
	}
	
	@PostMapping("/")
	public ResponseEntity<String> saveBookedCourier(@RequestParam Long custId, @RequestBody BookedCourier bookedCourier) {
		System.out.println(custId);
		if(bookedCourierService.saveBookedCourier(bookedCourier, custId)) {
			return new ResponseEntity<>("Booked Courier Added" , HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Booked Courier Not Added", HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<BookedCourier> updateBookedCourier(@RequestBody BookedCourier bookedCourier, @PathVariable(value = "id") Long bookedCourierId)throws ResourseNotFoundException {
		BookedCourier updatedBookedCourier = bookedCourierService.updateBookedCourier(bookedCourier, bookedCourierId);
		
		if(updatedBookedCourier.equals(null)) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(updatedBookedCourier);
		} else {
			return ResponseEntity.ok().body(updatedBookedCourier);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteBookedCourier(@PathVariable(value = "id") Long bookedCourierId) {
		if (bookedCourierService.deleteBookedCourier(bookedCourierId)) {
			return new ResponseEntity<>("Booked Courier Deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Booked Courier Not Deleted", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/updatestatus/{id}")
	public ResponseEntity<String> updateBookedCourierStatus(@RequestBody BookedCourier bookedCourier, @PathVariable(value = "id") Long bookedCourierId){
		 if (bookedCourierService.updateBookedCourierStatus(bookedCourier, bookedCourierId)) {
				return new ResponseEntity<>("Booked Courier Status Updated", HttpStatus.OK);
			} else {
				return new ResponseEntity<>("Booked Courier Status Not Updated", HttpStatus.INTERNAL_SERVER_ERROR);
			}

	}
}
