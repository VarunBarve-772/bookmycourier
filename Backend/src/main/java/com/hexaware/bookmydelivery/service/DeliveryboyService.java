package com.hexaware.bookmydelivery.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.bookmydelivery.entity.BookedCourier;
import com.hexaware.bookmydelivery.entity.DeliveryBoy;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;
import com.hexaware.bookmydelivery.repository.DeliveryBoyRepository;

@Service
public class DeliveryboyService implements IDeliveryBoyService {

	@Autowired
	private DeliveryBoyRepository deliveryBoyRepository;
	
	@Autowired
	private IBookedCourierService bookedCourierService;
	
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
	public DeliveryBoy updateDeliveryBoy(DeliveryBoy deliveryBoy)throws ResourseNotFoundException  {
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

	@Override
	public DeliveryBoy loginDeliveryBoy(DeliveryBoy deliveryBoy) {
		// TODO Auto-generated method stub
		return deliveryBoyRepository.findByDeliveryBoyUsernameAndDeliveryBoyPass(deliveryBoy.getDeliveryBoyUsername(), deliveryBoy.getDeliveryBoyPass());
	}

	@Override
	public boolean addCourier(Long deliveryBoyId, Long bookedCourierId) {
		// TODO Auto-generated method stub
		
		try {
			Optional<BookedCourier> bookedCourierOptional = bookedCourierService.getBookedCourierByID(bookedCourierId);
			Optional<DeliveryBoy> deliveryBoyOptional = deliveryBoyRepository.findById(deliveryBoyId);
			BookedCourier bookedCourier = bookedCourierOptional.get();
			DeliveryBoy deliveryBoy = deliveryBoyOptional.get();
			
			Set<BookedCourier> bookedCourierSet = deliveryBoy.getBookedCourier();
			
			if(bookedCourierSet.isEmpty()) {
				bookedCourierSet = new HashSet<>();
			}
			
			bookedCourierSet.add(bookedCourier);
			deliveryBoy.setBookedCourier(bookedCourierSet);
			deliveryBoyRepository.save(deliveryBoy);
			return true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		
	}

}
