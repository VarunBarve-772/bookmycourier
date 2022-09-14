package com.hexaware.bookmydelivery.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.bookmydelivery.entity.BookedCourier;
import com.hexaware.bookmydelivery.entity.Center;
import com.hexaware.bookmydelivery.entity.Customer;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;
import com.hexaware.bookmydelivery.repository.BookedCourierRepository;
import com.hexaware.bookmydelivery.repository.CenterRepository;

@Service
public class BookedCourierService implements IBookedCourierService {

	@Autowired
	private BookedCourierRepository bookedCourierRepository;
	
	@Autowired
	private ICustomerService customerService;
	
	@Autowired CenterRepository centerRepository;
	
	@Override
	public List<BookedCourier> getAllBookedCouriers() {
		// TODO Auto-generated method stub
		return bookedCourierRepository.findAll();
	}

	@Override
	public Optional<BookedCourier> getBookedCourierByID(long bookedCourierId) {
		// TODO Auto-generated method stub
		return bookedCourierRepository.findById(bookedCourierId);
	}

	@Override
	public boolean saveBookedCourier(BookedCourier bookedCourier, Long custId) {
		try {
			Optional<Customer> customerOptional = customerService.getCustomerByID(custId);
			Customer customer = customerOptional.get();
			
//			logic to check and add courier to center
			Center center = centerRepository.findByCenterPin(customer.getCustPin());
			if(center.equals(null)) {
				return false;
			} else {
				Set<BookedCourier> bookedCourierCenter= center.getBookedCourier();
				bookedCourierCenter.add(bookedCourier);
				center.setBookedCourier(bookedCourierCenter);
				centerRepository.save(center);	
			}
			
//			logic to add courier to customer
			Set<BookedCourier> bookedCourierCustomer = customer.getBookedCourier();
			if(bookedCourierCustomer.isEmpty()) {
				bookedCourierCustomer = new HashSet<>();
			}
			bookedCourierCustomer.add(bookedCourier);
			customer.setBookedCourier(bookedCourierCustomer);
			
			customerService.saveCustomer(customer);
			
//			bookedCourierRepository.save(bookedCourier);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public BookedCourier updateBookedCourier(BookedCourier updatedBookedCourier, Long bookedCourierId)throws ResourseNotFoundException  {
		// TODO Auto-generated method stub
		Optional<BookedCourier> oldBookedCourierOptional = bookedCourierRepository.findById(bookedCourierId);
		BookedCourier oldBookedCourier = oldBookedCourierOptional.get();
//		System.out.println(updatedBookedCourier.getCourierComment());
		oldBookedCourier.setCourierComment(updatedBookedCourier.getCourierComment());
		oldBookedCourier.setCourierPrice(updatedBookedCourier.getCourierPrice());
		oldBookedCourier.setCourierStatus(updatedBookedCourier.getCourierStatus());
		
		bookedCourierRepository.save(oldBookedCourier);
		return 	oldBookedCourier;
	}

	@Override
	public boolean deleteBookedCourier(long bookedCourierId) {
		try {
			bookedCourierRepository.deleteById(bookedCourierId);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public boolean updateBookedCourierStatus(BookedCourier updatedBookedCourier, Long bookedCourierId) {
		// TODO Auto-generated method stub
		try {
			Optional<BookedCourier> oldBookedCourierOptional = bookedCourierRepository.findById(bookedCourierId);
			BookedCourier oldBookedCourier = oldBookedCourierOptional.get();
			oldBookedCourier.setCourierStatus(updatedBookedCourier.getCourierStatus());
			
			bookedCourierRepository.save(oldBookedCourier);
			return true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		}

}
