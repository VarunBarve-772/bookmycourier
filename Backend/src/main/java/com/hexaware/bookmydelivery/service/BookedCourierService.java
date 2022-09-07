package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.bookmydelivery.entity.BookedCourier;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;
import com.hexaware.bookmydelivery.repository.BookedCourierRepository;

@Service
public class BookedCourierService implements IBookedCourierService {

	@Autowired
	private BookedCourierRepository bookedCourierRepository;
	
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
	public boolean saveBookedCourier(BookedCourier bookedCourier) {
		try {
			bookedCourierRepository.save(bookedCourier);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public BookedCourier updateBookedCourier(BookedCourier bookedCourier)throws ResourseNotFoundException  {
		// TODO Auto-generated method stub
		return bookedCourierRepository.save(bookedCourier);
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

}
