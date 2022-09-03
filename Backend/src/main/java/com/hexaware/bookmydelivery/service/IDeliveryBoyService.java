package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.bookmydelivery.entity.DeliveryBoy;

public interface IDeliveryBoyService {
	
	public List<DeliveryBoy> getAllDeliveryBoys();
	
	public Optional<DeliveryBoy> getDeliveryBoyByID(long deliveryBoyId);
	
	public boolean saveDeliveryBoy(DeliveryBoy deliveryBoy);
	
	public DeliveryBoy updateDeliveryBoy(DeliveryBoy deliveryBoy);
	
	public boolean deleteDeliveryBoy(long deliveryBoyId);

}
