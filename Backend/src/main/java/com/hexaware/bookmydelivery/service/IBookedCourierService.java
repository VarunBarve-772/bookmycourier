package com.hexaware.bookmydelivery.service;

import java.util.List;
import java.util.Optional;

import com.hexaware.bookmydelivery.entity.BookedCourier;
import com.hexaware.bookmydelivery.exception.ResourseNotFoundException;

public interface IBookedCourierService {

	public List<BookedCourier> getAllBookedCouriers();
	
	public Optional<BookedCourier> getBookedCourierByID(long bookedCourierId);
	
	public boolean saveBookedCourier(BookedCourier bookedCourier);
	
	public BookedCourier updateBookedCourier(BookedCourier bookedCourier)throws ResourseNotFoundException;
	
	public boolean deleteBookedCourier(long bookedCourierId);


}
