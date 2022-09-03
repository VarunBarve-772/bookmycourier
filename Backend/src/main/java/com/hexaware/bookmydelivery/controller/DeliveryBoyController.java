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

import com.hexaware.bookmydelivery.entity.DeliveryBoy;
import com.hexaware.bookmydelivery.service.DeliveryboyService;

@RestController
@RequestMapping("/api/deliveryboy")
public class DeliveryBoyController {

	@Autowired
	private DeliveryboyService deliveryBoyService;
	
	@GetMapping("/deliveryboy")
	public ResponseEntity<List<DeliveryBoy>> getDeliveryBoyList() {
		List<DeliveryBoy> deliveryBoyList = deliveryBoyService.getAllDeliveryBoys();
		
		if(deliveryBoyList.isEmpty()) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(deliveryBoyList);
		} else {
			return ResponseEntity.ok().body(deliveryBoyList);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<DeliveryBoy>> getDeliveryBoyById(@PathVariable(value = "id") Long deliveryBoyId) {
		Optional<DeliveryBoy> deliveryBoy = deliveryBoyService.getDeliveryBoyByID(deliveryBoyId);
		
		if(deliveryBoy.isPresent()) {
			return ResponseEntity.ok().body(deliveryBoy);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(deliveryBoy);
		}
	}
	
	@PostMapping("/")
	public ResponseEntity<String> savedeliveryBoy(@RequestBody DeliveryBoy deliveryBoy) {
		if(deliveryBoyService.saveDeliveryBoy(deliveryBoy)) {
			return new ResponseEntity<>("Delivery Boy Added" , HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Delivery Boy Not Added", HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}
	
	@PutMapping("/")
	public ResponseEntity<DeliveryBoy> updateDeliveryBoy(@RequestBody DeliveryBoy deliveryBoy) {
		DeliveryBoy updatedDeliveryBoy = deliveryBoyService.updateDeliveryBoy(deliveryBoy);
		
		if(updatedDeliveryBoy == null) {
			return ResponseEntity.ok().body(updatedDeliveryBoy);
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(updatedDeliveryBoy);
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteDeliveryBoy(@PathVariable(value = "id") Long deliveryBoyId) {
		if (deliveryBoyService.deleteDeliveryBoy(deliveryBoyId)) {
			return new ResponseEntity<>("Delivery Boy Deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Delivery Boy Not Deleted", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}



}
