package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.bookmydelivery.entity.DeliveryBoy;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;

public interface IDeliveryBoyService {
	
	public List<DeliveryBoy> getAllDeliveryBoys();
	
	public Optional<DeliveryBoy> getDeliveryBoyByID(long deliveryBoyId);
	
	public boolean saveDeliveryBoy(DeliveryBoy deliveryBoy);
	
	public DeliveryBoy updateDeliveryBoy(DeliveryBoy deliveryBoy)throws ResourseNotFoundException;
	
	public boolean deleteDeliveryBoy(long deliveryBoyId);

	public DeliveryBoy loginDeliveryBoy(DeliveryBoy deliveryBoy);
	
	public boolean addCourier(Long deliveryBoyId, Long courierId);
}
