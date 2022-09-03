package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.bookmydelivery.entity.DeliveryBoy;
import com.hexaware.bookmydelivery.repository.DeliveryBoyRepository;

@Service
public class DeliveryboyService implements IDeliveryBoyService {

	@Autowired
	private DeliveryBoyRepository deliveryBoyRepository;
	@Override
	public List<DeliveryBoy> getAllDeliveryBoys() {
		// TODO Auto-generated method stub
		return deliveryBoyRepository.findAll();
	}

	@Override
	public Optional<DeliveryBoy> getDeliveryBoyByID(long deliveryBoyId) {
		// TODO Auto-generated method stub
		return deliveryBoyRepository.findById(deliveryBoyId);
	}

	@Override
	public boolean saveDeliveryBoy(DeliveryBoy deliveryBoy) {
		try {
			deliveryBoyRepository.save(deliveryBoy);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public DeliveryBoy updateDeliveryBoy(DeliveryBoy deliveryBoy) {
		// TODO Auto-generated method stub
		return deliveryBoyRepository.save(deliveryBoy);
	}

	@Override
	public boolean deleteDeliveryBoy(long deliveryBoyId) {
		try {
			deliveryBoyRepository.deleteById(deliveryBoyId);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
